import R from 'ramda';
import { setBadge } from '@navigation';

import { screens } from '../../constants';
import subscriptions from './subscriptions';
import queries from './queries';
import { MESSAGES_LIMIT } from './constants';
import { getChatIdFromMessage } from './utils';
import { clearUnreadMessages, removeDialogMessages } from './storeOperations';

const fetchMoreMessages = props => () => {
  const messagesLength = props.messages.length;
  const { getDialog } = props;
  if (getDialog.loading || getDialog.dialog.totalCount <= messagesLength) return;
  getDialog.fetchMore({
    variables: {
      offset: messagesLength,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      ...previousResult,
      ...fetchMoreResult,
      dialog: {
        ...previousResult.dialog,
        ...fetchMoreResult.dialog,
        messages: [
          ...previousResult.dialog.messages,
          ...fetchMoreResult.dialog.messages,
        ],
      },
    }),
  });
};

const subscribeForMessages = props => () => props.getDialog.subscribeToMore({
  document: subscriptions.SUBSCRIBE_MESSAGE_CHANGED,
  variables: { fromProfileId: props.interlocutorId },
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;

    const { eventType, message: newMessage } = R.path(['data', 'messageChanged'], subscriptionData);
    if (eventType === 'ADD') {
      props.mutationMarkMessageAsRead({
        variables: {
          toProfileId: props.interlocutorId,
          messageId: newMessage.id,
        },
      });
      setTimeout(() => {
        clearUnreadMessages(props.client, props.interlocutor.id, props.myProfileId);
      }, 100);

      const responseObj = prev;
      responseObj.dialog.messages.unshift(newMessage);
      props.setIsTyping(false);
      return responseObj;
    }
    if (eventType === 'UPDATE') {
      const prevMessages = R.pathOr([], ['dialog', 'messages'], prev);
      const messageIndex = prevMessages.findIndex(R.propEq('id', newMessage.id));
      const responseObj = prev;
      responseObj.dialog.messages[messageIndex] = newMessage;
      return responseObj;
    }
    return prev;
  },
});

const subscribeForReadStatusUpdate = props => () => props.getDialog.subscribeToMore({
  document: subscriptions.SUBSCRIBE_MESSAGES_HAVE_BEEN_READ,
  variables: { fromProfileId: props.interlocutorId },
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;

    const { toMessageId } = R.path(['data', 'messagesHaveBeenRead'], subscriptionData);
    const messages = R.pathOr([], ['dialog', 'messages'], prev);
    const newMessages = messages.map(message => {
      if (message.mprofile.id !== props.myProfileId || message.id > toMessageId) {
        return message;
      }
      return {
        ...message,
        is_read: 1,
      };
    });
    return {
      ...prev,
      dialog: {
        ...prev.dialog,
        messages: newMessages,
      },
    };
  },
});

const subscribeForDialogs = props => () => props.getDialogs.subscribeToMore({
  document: subscriptions.SUBSCRIBE_DIALOG_UPDATED,
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;

    const dialog = R.pathOr({}, ['data', 'dialogUpdated'], subscriptionData);
    const prevDialogs = R.propOr([], 'dialogList', prev);
    const dialogIndex = prevDialogs.findIndex(R.propEq(['id'], dialog.id));

    const responseObj = prev;
    if (dialogIndex !== -1) {
      responseObj.dialogList.splice(dialogIndex, 1);
    }
    responseObj.dialogList.unshift(dialog);
    setBadge(screens.DialogsList, responseObj.dialogList);
    return responseObj;
  },
});

const answerLocationRequest = props => (messageId, isAccepted) => (
  props.mutationAnswerLocationRequest({
    variables: {
      messageId,
      isAccepted,
    },
  })
);

const sendMessage = props => messages => props.mutationSendMessage({
  variables: {
    message: messages[0].text,
    location: messages[0].location,
    requestLocation: messages[0].requestLocation,
    photo: messages[0].photo,
    toProfileId: props.interlocutorId,
  },
  update: (store, res) => {
    const query = {
      query: queries.GET_DIALOG,
      variables: {
        target_profile_id: props.interlocutorId,
        offset: 0,
        limit: MESSAGES_LIMIT,
      },
    };
    const dialogData = store.readQuery(query);
    const newMessage = R.path(['data', 'sendMessage'], res);
    dialogData.dialog.messages.unshift(newMessage);
    store.writeQuery({
      ...query,
      data: dialogData,
    });
    
    if (props.interlocutorId === props.myProfileId) return;

    const dialogsData = store.readQuery({ query: queries.GET_DIALOGS });
    if (!dialogsData) return;

    const interlocutor = R.path(['dialog', 'interlocutor'], dialogData);
    const dialogId = getChatIdFromMessage(newMessage);
    const index = dialogsData.dialogList.findIndex(R.propEq('id', dialogId));
    if (index !== -1) {
      dialogsData.dialogList.splice(index, 1);
    }
    dialogsData.dialogList.unshift({
      id: dialogId,
      lastMessage: newMessage,
      interlocutor,
      unreadMessages: 0,
      __typename: 'Dialog',
    });

    store.writeQuery({
      query: queries.GET_DIALOGS,
      data: dialogsData,
    });
    setBadge(screens.DialogsList, dialogsData.dialogList);
  },
});

const removeDialog = props => () => {
  const interlocutorId = R.path(['interlocutor', 'id'], props);
  const withProfileId = props.profileId || interlocutorId;
  props.mutationRemoveDialog({
    variables: {
      withProfileId,
    },
    update: (store, response) => {
      removeDialogMessages(store, withProfileId);

      const dialogId = R.path(['data', 'removeDialog', 'dialogId'], response);
      if (!dialogId) return;

      const dialogsData = store.readQuery({ query: queries.GET_DIALOGS });
      if (!dialogsData) return;

      const index = dialogsData.dialogList.findIndex(R.propEq('id', dialogId));
      if (index !== -1) {
        dialogsData.dialogList.splice(index, 1);
        store.writeQuery({
          query: queries.GET_DIALOGS,
          data: dialogsData,
        });
      }
      setBadge(screens.DialogsList, dialogsData.dialogList);
      if (interlocutorId) {
        props.navigator.pop();
      }
    },
  });
};

const updateTypingIndicator = props => (text) => {
  if (!text) return;
  props.mutationUpdateTypingIndicator({
    variables: {
      toProfileId: props.interlocutorId,
    },
  });
};

export default {
  fetchMoreMessages,
  subscribeForMessages,
  answerLocationRequest,
  sendMessage,
  subscribeForDialogs,
  removeDialog,
  updateTypingIndicator,
  subscribeForReadStatusUpdate,
};
