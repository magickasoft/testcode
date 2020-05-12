import R from 'ramda';
import { screens } from '../constants';
import { fontSizes } from '../styles';
import theme from '../services/theme';

const colors = theme.get();

const defaultConfig = {
  // statusBarColor: colors.transparent,
  topBar: {
    visible: false,
    drawBehind: true
  },
  statusBar: {
    visible: true,
    style: 'dark',
    backgroundColor: colors.transparent,
    drawBehind: true
  }
};

const bottomTabsHidden = {
  visible: false,
  drawBehind: true
};

const statusBarLight = {
  style: 'light'
};

const config = { // eslint-disable-line
  [screens.AddBusiness]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.AllowLocation]: {
    screen: screens.AllowLocation,
    bottomTabs: bottomTabsHidden,
    navBarTextFontSize: fontSizes.larger,
    navBarTextColor: colors.black,
    navBarButtonColor: colors.black
  },
  [screens.Welcome]: {
    screen: screens.Welcome,
    bottomTabs: bottomTabsHidden,
    navBarTextFontSize: fontSizes.larger,
    navBarTextColor: colors.black,
    navBarButtonColor: colors.black
  },
  [screens.InviteFriends]: {
    navBarButtonColor: colors.black
  },
  [screens.Connects]: {},
  [screens.EditReview]: {},
  [screens.Other]: {
    statusBar: statusBarLight
  },
  [screens.PlacesNearList]: {},
  [screens.Profile]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.ProfileVerification]: {
    bottomTabs: bottomTabsHidden,
    statusBar: statusBarLight
  },
  [screens._ProfileEdit]: {
    screenBackgroundColor: colors.backgroundSecondary
  },
  [screens.RegisterUser]: {
    statusBar: statusBarLight
  },
  [screens.Event]: {},
  [screens.EventsList]: {},
  [screens.CreateEditEvent]: {},
  [screens.Gallery]: {
    statusBar: statusBarLight
  },
  [screens.ModalHideLocationItem]: {
    layout: {
      backgroundColor: colors.opacityBlack
    },
    screenBackgroundColor: 'transparent',
    modalPresentationStyle: 'overCurrentContext'
  },
  [screens.SignInWithEmail]: {
    statusBar: statusBarLight,
    backgroundColor: colors.backgroundPrimary
  },
  [screens.AppInformation]: {
    statusBar: statusBarLight,
    backgroundColor: colors.backgroundPrimary
  },
  [screens.SelectLegalAgreement]: {
    statusBar: statusBarLight,
    backgroundColor: colors.backgroundPrimary
  },
  [screens.TakingABreak]: {
    statusBar: statusBarLight,
    backgroundColor: colors.backgroundPrimary
  },
  [screens.AlbumAccess]: {
    statusBar: statusBarLight,
    backgroundColor: colors.backgroundPrimary
  },
  [screens.SignUp]: {
    statusBar: statusBarLight
  },
  [screens.ForgotPassword]: {
    statusBar: statusBarLight
  },
  [screens.LocationSettings]: {
    statusBar: statusBarLight
  },
  [screens.SpotsPoll]: {
    bottomTabs: bottomTabsHidden,
    navBarTextFontSize: fontSizes.larger,
    navBarTextColor: colors.black,
    navBarButtonColor: colors.black,
    screenBackgroundColor: colors.backgroundSecondary
  },
  [screens.SpotsNotification]: {
    bottomTabs: bottomTabsHidden,
    navBarTextFontSize: fontSizes.larger,
    navBarTextColor: colors.black,
    navBarButtonColor: colors.black,
    screenBackgroundColor: colors.backgroundSecondary
  },
  [screens.SpotsPollSubmitted]: {
    bottomTabs: bottomTabsHidden,
    navBarTextFontSize: fontSizes.larger,
    navBarTextColor: colors.black,
    navBarButtonColor: colors.black,
    screenBackgroundColor: colors.backgroundSecondary
  },
  [screens.SpotReview]: {
    backgroundColor: colors.backgroundPrimary,
    statusBar: {
      style: 'light',
      backgroundColor: colors.transparent,
      drawBehind: true
    },
    bottomTabs: bottomTabsHidden
  },
  [screens.SpotsList]: {
    screenBackgroundColor: colors.backgroundSecondary
  },
  [screens.VerificationCode]: {
    title: '',
    bottomTabs: bottomTabsHidden,
    backgroundColor: colors.backgroundPrimary,
    navBarButtonColor: colors.black
  },
  [screens.Map]: {
    bottomTabs: bottomTabsHidden,
    navBarButtonColor: colors.black
  },
  [screens.MapEvents]: {
    bottomTabs: bottomTabsHidden,
    navBarButtonColor: colors.black
  },
  [screens.Camera]: {
    bottomTabs: bottomTabsHidden,
    navBarButtonColor: colors.black
  },
  [screens.MyProfile]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.MyProfileEdit]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.OnBoarding]: {
    statusBar: {
      visible: true,
      style: 'light',
      backgroundColor: colors.transparent,
      drawBehind: true
    }
  },
  [screens.PlaceBookmarks]: {},
  [screens.PlaceCheckInList]: {},
  [screens.CoinsHistory]: {},
  [screens.People]: {},
  [screens.BlockedList]: {},
  [screens.PromoCode]: {},
  [screens.FriendsList]: {},
  [screens.Album]: {},
  [screens.AlbumsList]: {},
  [screens.CreateEditAlbum]: {},
  [screens.DialogsList]: {},
  [screens.Dialog]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.RoomsList]: {},
  [screens.RootLoading]: {},
  [screens.Update]: {},
  [screens.Users]: {
    bottomTabs: bottomTabsHidden
  },
  [screens.SettingGeolocations]: {
    navBarButtonColor: colors.black
  },
  [screens.Drawer]: {
    width: 100,
    height: 100,
    visible: false,
    enabled: true
  }
};

const newConfig = R.map((el) => ({ ...defaultConfig, ...el }), config);

export default newConfig;
