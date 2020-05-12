import { compose, hoistStatics, withHandlers, withProps, lifecycle, pure } from 'recompose';
import R from 'ramda';
import { Alert } from 'react-native';
import { setBadge } from '@navigation';
import { screens } from '../../constants';
import { messagesHocs, messagesOperations } from '../../modules/messages';
import { myProfileHocs } from '../../modules/myProfile';
import DialogsList from './DialogsList';
import { withRootSpinner, withTheme, withCopilot } from '../../utils/enhancers';
import { usersHocs, usersOperations } from '../../modules/users';
import style from './style';

const enhancer = compose(
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  messagesHocs.queryGetDialogs({ fetchPolicy: 'cache-and-network' }),
  usersHocs.mutationBlockUser(),
  messagesHocs.mutationRemoveDialog(),
  usersHocs.mutationBlockUser(),

  withProps((props) => ({
    dialogs: R.pathOr([], ['getDialogs', 'dialogList'], props),
    loading: R.path(['getDialogs', 'loading'], props),
    myProfileId: R.path(['currentProfile', 'currentProfile', 'id'], props)
  })),
  withHandlers({
    onItemPress: (props) => (operation, data, rowMap) => () => {
      if (rowMap[data.key]) {
        rowMap[data.key].closeRow();
      }

      if (operation === 'block') {
        usersOperations.blockUser({
          mutate: props.blockUser,
          variables: {
            targetProfileId: data.interlocutor.id
          }
        });
      } else if (operation === 'delete') {
        Alert.alert(
          'Delete Dialog',
          `Are You sure You want to delete dialog with ${data.interlocutor.fullName}?`,
          [
            { text: 'Yes, delete', onPress: messagesOperations.removeDialog(data) },
            { text: 'Cancel' }
          ]
        );
      }
    },
    toUsersList: (props) => () => {
      props.navigator.push(screens.Users, {
        title: 'Users'
      });
    },
    toChat: (props) => (id) => {
      props.navigator.push(screens.Dialog, {
        passProps: {
          interlocutorId: id
        }
      });
    },
    subscribeForDialogs: messagesOperations.subscribeForDialogs
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { loading, dialogs } = this.props;
      if (prevProps.loading !== loading && !loading) {
        setBadge(screens.DialogsList, dialogs);
      }
    },
    componentDidMount() {
      const { subscribeForDialogs } = this.props;
      if (!this.unsubscribeHandler) {
        this.unsubscribeHandler = subscribeForDialogs();
      }
    },
    componentWillUnmount() {
      if (this.unsubscribeHandler) {
        this.unsubscribeHandler();
      }
    }
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'dialogs'),
  )),
  withCopilot(screens.DialogsList),
  pure,
  withTheme(style),
);

export default hoistStatics(enhancer)(DialogsList);
