/* eslint-disable react-native/split-platform-components */
import {
  compose,
  hoistStatics,
  withProps,
  withHandlers,
  lifecycle,
  withState,
  withPropsOnChange,
  pure,
  branch,
  renderComponent
} from 'recompose';
import R from 'ramda';
import I18n from 'react-native-i18n';
import { Alert } from 'react-native';
import { withApollo } from 'react-apollo';

import { messagesHocs, messagesOperations, messagesStoreOperations } from '../../modules/messages';
import { myProfileHocs } from '../../modules/myProfile';
import Dialog from './Dialog';
import screens from '../../constants/screens';
import { withUploadPhoto, withActionSheet, withCopilot } from '../../utils/enhancers';
import { setCallInterval } from '../../utils/setCallInterval';
import { PreDialogInfo } from './components';
import { commonHocs, commonOperations } from '../../modules/common';
import { REPORT_ITEM_TYPE, REPORT_TYPE } from '../../constants/report';
import { usersHocs, usersOperations } from '../../modules/users';

const formatMessages = R.map((m) => ({
  _id: m.id,
  text: m.message,
  createdAt: new Date(m.created_ts * 1000),
  user: {
    _id: m.mprofile.id,
    name: m.mprofile.fullName || I18n.t('messages.no_name_user'),
    avatar: m.mprofile.photo
  },
  location: m.location,
  locationRequest: m.locationRequest,
  image: m.photo,
  albumAccess: m.albumAccess,
  isRead: !!m.is_read
}));

const getImages = R.reduce((accum, message) => {
  if (message.photo) return [...accum, { url: message.photo }];
  return accum;
}, []);

const enhancer = compose(
  messagesHocs.queryGetDialog({ fetchPolicy: 'cache-and-network' }),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  messagesHocs.mutationSendMessage(),
  messagesHocs.mutationAnswerLocationRequest(),
  messagesHocs.mutationUpdateTypingIndicator(),
  messagesHocs.mutationMarkMessageAsRead(),
  messagesHocs.subscriptionTypingStatusUpdated(),
  messagesHocs.mutationRemoveDialog(),
  commonHocs.mutationReport(),
  usersHocs.mutationBlockUser(),
  withApollo,

  withProps((props) => ({
    messages: formatMessages(R.pathOr([], ['getDialog', 'dialog', 'messages'], props)),
    interlocutor: R.path(['getDialog', 'dialog', 'interlocutor'], props),
    myProfileId: R.path(['currentProfile', 'currentProfile', 'id'], props),
    myName: R.path(['currentProfile', 'currentProfile', 'name'], props),
    images: getImages(R.pathOr([], ['getDialog', 'dialog', 'messages'], props))
  })),
  withState('displayDialogPreview', 'setDisplayDialogPreview', true),
  branch(
    R.both(R.prop('displayDialogPreview'), R.propSatisfies(R.isEmpty, 'messages')),
    renderComponent(PreDialogInfo)
  ),
  withState('viewImageIndex', 'setViewImageIndex', -1),
  withState('isTyping', 'setIsTyping', false),
  withHandlers({
    sendMessage: messagesOperations.sendMessage,
    answerLocationRequest: messagesOperations.answerLocationRequest,
    onEndReached: messagesOperations.fetchMoreMessages,
    subscribeForMessages: messagesOperations.subscribeForMessages,
    subscribeForReadStatusUpdate: messagesOperations.subscribeForReadStatusUpdate,
    onPressAvatar: (props) => () => props.navigator.push(screens.Profile, { passProps: { id: props.interlocutorId } }),
    showImage: (props) => (url) => {
      const index = props.images.findIndex(R.propEq('url', url));
      props.setViewImageIndex(index);
    },
    hideImage: (props) => () => props.setViewImageIndex(-1),
    inputTextChanged: messagesOperations.updateTypingIndicator,
    removeDialog: (props) => () => {
      const fullName = R.pathOr('the interlocutor', ['interlocutor', 'fullName'], props);

      Alert.alert('Delete Dialog', `Are You sure You want to delete dialog with ${fullName}?`, [
        { text: 'Yes, delete', onPress: messagesOperations.removeDialog(props) },
        { text: 'Cancel' }
      ]);
    },
    onBlock: (props) => () => {
      usersOperations.blockUser({
        mutate: props.blockUser,
        variables: {
          targetProfileId: props.interlocutorId
        }
      });
    },
    report: (props) => () => {
      commonOperations.report({
        mutate: props.report,
        variables: {
          item_id: props.interlocutorId,
          alert_type: REPORT_TYPE.ANGRY,
          item_type: REPORT_ITEM_TYPE.MESSAGE,
          note: ''
        }
      });
    }
  }),
  withPropsOnChange(['inputTextChanged'], ({ inputTextChanged }) => ({
    inputTextChanged: setCallInterval(inputTextChanged, 4000)
  })),
  withUploadPhoto((props, data) => {
    props.sendMessage([
      {
        photo: R.pathOr(null, ['file', 'filename'], data)
      }
    ]);
  }, 'uploadPhoto'),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { typingStatusSub, setIsTyping, isTyping } = this.props;
      if (prevProps.typingStatusSub.typingStatusUpdated !== typingStatusSub.typingStatusUpdated) {
        clearTimeout(this.typingTimeout);
        this.typingTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 5000);
        if (!isTyping) {
          setIsTyping(true);
        }
      }
    },
    componentDidMount() {
      const {
        subscribeForMessages,
        subscribeForReadStatusUpdate,
        interlocutor,
        myProfileId,
        client
      } = this.props;
      this.unsubscribeHandlerMessages = subscribeForMessages();
      this.unsubscribeHandlerRead = subscribeForReadStatusUpdate();
      messagesStoreOperations.clearUnreadMessages(client, interlocutor.id, myProfileId);
    },
    componentWillUnmount() {
      clearTimeout(this.typingTimeout);
      if (this.unsubscribeHandlerMessages) {
        this.unsubscribeHandlerMessages();
      }
      if (this.unsubscribeHandlerRead) {
        this.unsubscribeHandlerRead();
      }
    }
  }),
  withActionSheet(
    (props) => [
      {
        name: 'Report',
        handler: props.report
      },
      {
        name: 'Block this user',
        handler: props.onBlock
      },
      {
        name: 'Delete Dialog',
        handler: props.removeDialog
      },
      {
        name: I18n.t('messages.cancel')
      }
    ],
    {
      cancelButtonIndex: 3,
      destructiveButtonIndex: 2
    }
  ),
  withCopilot(screens.Dialog),
  pure
);

export default hoistStatics(enhancer)(Dialog);
