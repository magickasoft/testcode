import {
  compose,
  hoistStatics,
  withHandlers,
  withState,
  withProps,
  lifecycle
} from 'recompose';
import { Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import R from 'ramda';
import I18n from 'react-native-i18n';
import { withLoadingModal, withTheme, withToggle, withActionSheet, withCopilot, withAlert } from '@utils/enhancers';
import { messagesHocs } from '@modules/messages';
import { myProfileHocs } from '@modules/myProfile';
import { screens, storageKeys } from '@constants';
import { theme, permissions, notification, tutorials } from '@services';
import { authOperations } from '../../store/auth';
import Other from './Other';
import s from './style';
import { chartPalette } from '../../styles/colors';
import link from '../../utils/link';

const enhance = compose(
  connect(null, authOperations),
  withTheme(s),
  myProfileHocs.queryCurrentProfile({ fetchPolicy: 'cache-and-network' }),
  messagesHocs.queryGetIncomingMessagesBlockStatus({ fetchPolicy: 'cache-and-network' }),
  messagesHocs.mutationToggleIncomingMessagesBlock(),
  withProps((props) => ({
    currentIndex: props.theme.colors.theme,
    isIncomingMessagesBlocked: R.pathOr(false, [
      'getIncomingMessagesBlockStatus',
      'incomingMessagesBlockStatus',
      'isIncomingMessagesBlocked'
    ], props),
    currentProfile: R.pathOr({}, ['currentProfile', 'currentProfile'], props)
  })),
  withToggle('isVisibleModal', 'setVisibleModal', 'toggleVisibleModal', false),
  withToggle('isVisibleFinger', 'setVisibleFinger', 'onChangeVisibleFinger', false),
  withToggle('isVisibleDialog', 'toggleVisibleDialog', 'onToggleVisibleDialog', false),
  withState('isNotificationsSilent', 'setNotificationsSilent', false),
  withState('isLoading', 'toggleLoading', false),
  withState('forceState', 'forceUpdate', false),

  withState('pickedcolor', 'setPickedcolor', chartPalette.blue500),
  withToggle('isColorPickerVisible', 'toggleColorPicker', 'onToggleColorPicker', false),
  withState('error', 'setError', null),
  withAlert(({ error, setError }) => ({
    isVisible: !!error,
    message: error,
    onChangeVisible: () => setError(null),
    delay: 4000
  })),

  withLoadingModal.stateProp('isLoading'),
  withHandlers({
    onChangeProfile: () => (index) => {
      if (theme.getIndex() === index) return;
      theme.changeTheme(index);
    },
    onOpenContacts: (props) => async () => {
      try {
        const res = await permissions.ask('contacts');

        if (res) {
          props.navigator.push(screens.InviteFriends);
        }
      } catch (e) {
        //
      }
    },
    onContactAdmins: () => () => {
      link.openEmailWithPhoneInfo();
    },
    onSuggestAFeature: () => () => {
      link.openEmailWithPhoneInfo();
    },
    onSelectColor: ({ setPickedcolor, toggleColorPicker }) => (colorLocal) => {
      toggleColorPicker(false);
      setPickedcolor(colorLocal);

      theme.changePrimaryColor(colorLocal);
    },
    showActionSheet: (props) => () => {
      if (props.actionSheetRef) {
        setTimeout(() => {
          props.actionSheetRef.show();
        });
      }
    },
    onToggleMessageNotifications: (props) => async () => {
      props.toggleIncomingMessagesBlock()
        .then(({ data: { toggleIncomingMessagesBlock: { isIncomingMessagesBlocked } = {} } = {} } = {}) => {
          if (isIncomingMessagesBlocked) {
            Alert.alert('Disabled', 'You disabled incoming messages for 24 hours.');
          } else {
            Alert.alert('Enabled', 'You enabled incoming messages.');
          }
        });
    },
    onToggleNotificationsSound: (props) => () => {
      notification.makeNotificationsSilent(!props.isNotificationsSilent)
        .then(() => props.setNotificationsSilent(!props.isNotificationsSilent))
        .catch((error) => console.log(`Cannot change push sound status: ${error}`));
    },
    changeLanguage: (props) => (lang) => {
      AsyncStorage.setItem(storageKeys.appLanguage, lang)
        .then(() => {
          I18n.locale = lang;
          // HACK: used just to re-render current screen with new locale
          props.forceUpdate(!props.forceState);
        });
    },
    goToScreen: (props) => (screen) => () => {
      props.navigator.push(screen);
    },
    goToCamera: (props) => async () => {
      props.navigator.push(screens.Camera);
    },
    onGoToMyAlbums: ({ currentProfile, navigator }) => () => {
      navigator.push(screens.AlbumsList, {
        passProps: {
          profileId: currentProfile.id
        }
      });
    },
    onResetAllTutorials: () => () => {
      tutorials.resetAllTutorials()
        .then(() => Alert.alert(I18n.t('other.tutorials_alert_title'), I18n.t('other.tutorials_alert_message')));
    },
    onGoToAddBusiness: (props) => (type) => () => {
      props.navigator.push(screens.AddBusiness, {
        passProps: { type }
      });
      props.toggleVisibleModal();
    }
  }),
  lifecycle({
    componentDidMount() {
      notification.isNotificationsSilent()
        .then((isSilent) => this.props.setNotificationsSilent(isSilent))
        .catch((error) => console.log(`cannot get notifications silent status: ${error}`));
    }
  }),
  withActionSheet(
    (props) => [{
      name: 'Cancel'
    }, {
      name: 'English',
      handler: () => props.changeLanguage('en')
    }, {
      name: 'French',
      handler: () => props.changeLanguage('fr')
    }],
    {
      cancelButtonIndex: 0
    },
    'onOpenChangeLanguage',
  ),
  withActionSheet(
    (props) => [{
      name: 'Cancel'
    }, {
      name: 'Color 1',
      handler: () => props.onChangeProfile(0)
    }, {
      name: 'Color 2',
      handler: () => props.onChangeProfile(1)
    }, {
      name: 'Color 3',
      handler: () => props.onChangeProfile(2)
    }],
    {
      cancelButtonIndex: 0
    },
    'onOpenChangeBackground',
  ),
  withState('listRef', 'setListRef', null),
  withCopilot(screens.Other, (props, { name }) => {
    const scroll = props.listRef.getNode();
    if (name === 'verify-profile') {
      scroll.scrollToOffset({ offset: 0, animated: false });
    }
    if (name === 'add-business') {
      scroll.scrollToOffset({ offset: 300, animated: false });
    }
  }),
);

export default hoistStatics(enhance)(Other);
