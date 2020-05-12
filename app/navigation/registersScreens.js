import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import apolloAndReduxHoc from '../utils/enhancers/_apolloAndRedux';
import { registerComponents } from './utils';

import { screens as screenName } from '../constants';
import * as screens from '../screens';

const routes = [
  [screenName.AddBusiness, screens.AddBusiness],
  [screenName.AllowLocation, screens.AllowLocation],
  [screenName.Welcome, screens.Welcome],
  [screenName.Connects, screens.Connects],
  [screenName.Drawer, screens.Drawer],
  [screenName.InviteFriends, screens.InviteFriends],
  [screenName.LocationSettings, screens.LocationSettings],
  [screenName.EditReview, screens.EditReview],
  [screenName.SpotReview, screens.SpotReview],
  [screenName.SpotsList, screens.SpotsList],
  [screenName.SpotsPoll, screens.SpotsPoll],
  [screenName.Map, screens.Map],
  [screenName.MapEvents, screens.MapEvents],
  [screenName.Camera, screens.Camera],
  [screenName.CameraValidate, screens.CameraValidate],
  [screenName.ModalHideLocationItem, screens.ModalHideLocationItem],
  [screenName.Other, screens.Other],
  [screenName.PlacesNearList, screens.PlacesNearList],
  [screenName.Profile, screens.Profile],
  [screenName.ProfileVerification, screens.ProfileVerification],
  [screenName.MyProfile, screens.MyProfile],
  [screenName.MyProfileEdit, screens.MyProfileEdit],
  [screenName.OnBoarding, screens.OnBoarding],
  // [screenName._ProfileEdit, screens.ProfileEdit],
  [screenName.Event, screens.Event],
  [screenName.EventsList, screens.EventsList],
  [screenName.CreateEditEvent, screens.CreateEditEvent],
  [screenName.Gallery, screens.Gallery],
  [screenName.SignInWithEmail, screens.SignInWithEmail],
  [screenName.AppInformation, screens.AppInformation],
  [screenName.SelectLegalAgreement, screens.SelectLegalAgreement],
  [screenName.TakingABreak, screens.TakingABreak],
  [screenName.AlbumAccess, screens.AlbumAccess],
  [screenName.PlaceBookmarks, screens.PlaceBookmarks],
  [screenName.PlaceCheckInList, screens.PlaceCheckInList],
  [screenName.CoinsHistory, screens.CoinsHistory],
  [screenName.SignUp, screens.SignUp],
  [screenName.ForgotPassword, screens.ForgotPassword],
  [screenName.RootLoading, screens.RootLoading],
  [screenName.RegisterUser, screens.RegisterUser],
  [screenName.RoomsList, screens.RoomsList],
  [screenName.SpotsPollSubmitted, screens.SpotsPollSubmitted],
  [screenName.SpotsNotification, screens.SpotsNotification],
  [screenName.Users, screens.Users],
  [screenName.VerificationCode, screens.VerificationCode],
  [screenName.Update, screens.Update],
  [screenName.SettingGeolocations, screens.SettingGeolocations],

  [screenName.DialogsList, screens.DialogsList],
  [screenName.Dialog, screens.Dialog],

  [screenName.People, screens.People],
  [screenName.BlockedList, screens.BlockedList],
  [screenName.FriendsList, screens.FriendsList],

  [screenName.PromoCode, screens.PromoCode],
  [screenName.Album, screens.Album],
  [screenName.AlbumsList, screens.AlbumsList],
  [screenName.CreateEditAlbum, screens.CreateEditAlbum]
];

const registerScreens = (apolloClient, reduxStore, bugsnag) => {
  const wrap = (Component) => gestureHandlerRootHOC(
    apolloAndReduxHoc(
      Component,
      apolloClient,
      reduxStore,
      bugsnag,
    )
  );

  registerComponents(routes, { wrapper: wrap });
};

export default registerScreens;
