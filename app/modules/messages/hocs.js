import { hoc } from '../../utils/helpers/graphQl';
import mutations from './mutations';
import queries from './queries';
import subscriptions from './subscriptions';

import { MESSAGES_LIMIT } from './constants';

const queryGetDialog = hoc(queries.GET_DIALOG, {
  name: 'getDialog',
  options: props => ({
    variables: {
      target_profile_id: props.interlocutorId,
      offset: 0,
      limit: MESSAGES_LIMIT,
    },
  }),
});

const queryGetDialogs = hoc(queries.GET_DIALOGS, {
  name: 'getDialogs',
});

const mutationSendMessage = hoc(mutations.SEND_MESSAGE, {
  name: 'mutationSendMessage',
});

const mutationAnswerLocationRequest = hoc(mutations.ANSWER_LOCATION_REQUEST, {
  name: 'mutationAnswerLocationRequest',
});

const mutationRemoveDialog = hoc(mutations.REMOVE_DIALOG, {
  name: 'mutationRemoveDialog',
});

const mutationUpdateTypingIndicator = hoc(mutations.UPDATE_TYPING_INDICATOR, {
  name: 'mutationUpdateTypingIndicator',
});

const mutationMarkMessageAsRead = hoc(mutations.MARK_MESSAGE_AS_READ, {
  name: 'mutationMarkMessageAsRead',
});

const mutationToggleIncomingMessagesBlock = hoc(mutations.TOGGLE_INCOMING_MESSAGES_BLOCK, {
  name: 'toggleIncomingMessagesBlock',
});

const queryGetIncomingMessagesBlockStatus = hoc(queries.GET_INCOMING_MESSAGES_BLOCK_STATUS, {
  name: 'getIncomingMessagesBlockStatus',
});

const subscriptionTypingStatusUpdated = hoc(subscriptions.SUBSCRIBE_TYPING_STATUS_UPDATED, {
  name: 'typingStatusSub',
  options: props => ({
    variables: {
      fromProfileId: props.interlocutorId,
    },
  }),
});

export default {
  queryGetDialog,
  queryGetDialogs,
  mutationSendMessage,
  mutationAnswerLocationRequest,
  mutationRemoveDialog,
  mutationUpdateTypingIndicator,
  subscriptionTypingStatusUpdated,
  mutationMarkMessageAsRead,
  mutationToggleIncomingMessagesBlock,
  queryGetIncomingMessagesBlockStatus,
};
