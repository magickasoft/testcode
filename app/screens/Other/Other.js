import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import I18n from 'react-native-i18n';
import R from 'ramda';
import {
  Separator,
  Touchable,
  Text,
  FingerprintPopup,
  FlatList,
  Dialog,
  ActionButtons,
  ColorPicker,
  CopilotStep,
  IconVector,
  CustomHeader,
  AddBusinessModal
} from '@components';
import { screens, platform } from '@constants';
import { createScreen } from '@navigation';
import { colors } from '@styles';
import { Avatar } from '@containers';

const Arrow = () => (
  <IconVector
    type="Ionicons"
    name="ios-arrow-forward"
    size={24}
    color="#C8C7CC"
  />
);

const renderItem = (s, displayCopilot) => ({ item: { title, onPress, copilot, section } }) => ( // eslint-disable-line
  title ? (
    <CopilotStep
      stepProps={displayCopilot && copilot}
    >
      <Touchable
        key={title}
        onPress={onPress}
        style={section ? s.itemSection : s.itemContainer}
      >
        <Text
          type="label"
          style={section && s.sectionText}
        >
          {title}
        </Text>
        {!section && (
          <Arrow />
        )}
      </Touchable>
    </CopilotStep>
  ) : (
    <View style={s.separator} />
  )
);


const Other = ({
  onOpenChangeBackground,
  // onOpenContacts,
  isVisibleFinger,
  onChangeVisibleFinger,
  onToggleVisibleDialog,
  onToggleMessageNotifications,
  isVisibleDialog,
  onToggleColorPicker,
  isColorPickerVisible,
  onSelectColor,
  pickedcolor,
  onContactAdmins,
  onSuggestAFeature,
  isIncomingMessagesBlocked,
  isNotificationsSilent,
  onToggleNotificationsSound,
  onOpenChangeLanguage,
  theme: { s },
  displayCopilot,
  setListRef,
  goToScreen,
  onGoToMyAlbums,
  onResetAllTutorials,
  currentProfile,
  isVisibleModal,
  toggleVisibleModal,
  onGoToAddBusiness
}) => {
  const listItems = [{
    title: ''
  },
  {
    title: I18n.t('other.my_friends'),
    onPress: goToScreen(screens.People)
  },
  {
    title: I18n.t('other.my_albums'),
    onPress: onGoToMyAlbums
  },
  // =============== [ verifications ] ===============
  {
    title: I18n.t('other.section_verifications'),
    section: true
  },
  {
    title: I18n.t('other.profile_verification'),
    onPress: goToScreen(screens.ProfileVerification),
    copilot: {
      text: I18n.t('copilot.verify_profile'),
      order: 2,
      name: 'verify-profile'
    }
  },
  // =============== [ Spread the word ] ===============
  // {
  //   title: I18n.t('other.spread_word'),
  //   section: true
  // },
  // {
  //   title: I18n.t('other.invite_friends'),
  //   onPress: onOpenContacts
  // },
  // =============== [ businesses ] ===============
  {
    title: I18n.t('other.section_businesses'),
    section: true
  },
  // {
  //   title: 'Verification phone number',
  //   onPress: goToScreen(screens.VerificationCode),
  // }, {
  //   title: 'Dialog',
  //   onPress: onToggleVisibleDialog,
  // },
  {
    title: I18n.t('other.bookmarks'),
    onPress: goToScreen(screens.PlaceBookmarks)
  },
  {
    title: I18n.t('other.add_a_business'),
    onPress: toggleVisibleModal,
    copilot: {
      text: I18n.t('copilot.add_business'),
      order: 3,
      name: 'add-business'
    }
  },
  // =============== [ customizations ] ===============
  {
    title: I18n.t('other.section_customizations'),
    section: true
  },
  {
    title: I18n.t('other.change_language'),
    onPress: onOpenChangeLanguage
  },
  {
    title: I18n.t('other.background_color'),
    onPress: onOpenChangeBackground
  },
  {
    title: I18n.t('other.change_color'),
    onPress: onToggleColorPicker
  },
  {
    title: I18n.t('other.reset_tutorials'),
    onPress: onResetAllTutorials
  },
  // =============== [ contact us ] ===============
  {
    title: I18n.t('other.section_contact_us'),
    section: true
  },
  {
    title: I18n.t('other.suggest_a_feature'),
    onPress: onSuggestAFeature
  },
  {
    title: I18n.t('other.contact_admins'),
    onPress: onContactAdmins
  },
  // =============== [ privacy ] ===============
  {
    title: I18n.t('other.section_privacy'),
    section: true
  },
  {
    title: isIncomingMessagesBlocked
      ? I18n.t('other.enable_messages')
      : I18n.t('other.disable_messages'),
    onPress: onToggleMessageNotifications
  },
  {
    title: isNotificationsSilent
      ? I18n.t('other.enable_push_sound')
      : I18n.t('other.disable_push_sound'),
    onPress: onToggleNotificationsSound
  },
  {
    title: I18n.t('other.blocked_users'),
    onPress: goToScreen(screens.BlockedList)
  },
  {
    title: I18n.t('other.taking_a_break'),
    onPress: goToScreen(screens.TakingABreak)
  },
  // =============== [ other ] ===============
  {
    title: I18n.t('other.section_other'),
    section: true
  },
  {
    title: I18n.t('other.FAQ'),
    onPress: () => {}
  },
  {
    title: I18n.t('other.legal'),
    onPress: goToScreen(screens.SelectLegalAgreement)
  },
  {
    title: I18n.t('other.redeem_code'),
    onPress: goToScreen(screens.PromoCode)
  },
  {
    title: I18n.t('other.touch_id'),
    onPress: onChangeVisibleFinger
  },
  {
    title: I18n.t('other.albums_access'),
    onPress: goToScreen(screens.AlbumAccess)
  }
  ];
  if ([1, 4, 907].includes(R.prop('id', currentProfile))) {
    listItems.push({
      title: I18n.t('other.settings_geolocation'),
      onPress: goToScreen(screens.SettingGeolocations)
    });
  }

  if (platform.ios) {
    listItems.push({
      title: I18n.t('other.rewardsLens'),
      onPress: goToScreen(screens.Camera)
    });
    listItems.push({
      title: I18n.t('other.validate'),
      onPress: goToScreen(screens.CameraValidate)
    });
  }

  return (
    <View style={s.root}>
      <CustomHeader
        backgroundColor={colors.activePrimary}
        centerComponent={{
          style: { color: colors.white },
          text: I18n.t('other.title')
        }}
      />
      <AddBusinessModal
        isVisible={isVisibleModal}
        onClose={toggleVisibleModal}
        onPress={onGoToAddBusiness}
      />
      <ActionButtons />
      <Separator />
      <View style={s.body}>
        <FlatList
          flatListRef={setListRef}
          data={listItems}
          contentContainerStyle={s.content}
          renderItem={renderItem(s, displayCopilot)}
          ListHeaderComponent={() => (
            <Touchable onPress={goToScreen(screens.MyProfile)}>
              <View style={s.itemContainer}>
                <View style={s.profileContainer}>
                  <Avatar
                    uri={R.prop('photo', currentProfile)}
                    size={60}
                    containerStyle={s.avatarStyle}
                  />
                  <Text style={s.profileName}>
                    {R.pathOr('No name', ['fullName'], currentProfile)}
                  </Text>
                </View>
                <Arrow />
              </View>
            </Touchable>
          )}
          ItemSeparatorComponent={null}
          keyExtractor={(_, i) => i.toString()}
          listEmptyText="No data"
          initialNumToRender={20}
        />
      </View>
      {isVisibleFinger && (
        <FingerprintPopup
          // style={s.popup}
          handlePopupDismissed={onChangeVisibleFinger}
        />
      )}
      <Dialog
        isVisible={isVisibleDialog}
        onSubmit={onToggleVisibleDialog}
        submitTitle="Do it now"
        message="Do it get better matches and increase your
         changes of success complete it right now"
      />
      <ColorPicker
        isVisible={isColorPickerVisible}
        color={pickedcolor}
        onSelectColor={onSelectColor}
        onBackdropPress={onToggleColorPicker}
      />
    </View>
  );
};

Other.propTypes = {
  onOpenChangeBackground: T.func,
  onOpenContacts: T.func,
  isVisibleFinger: T.bool,
  onChangeVisibleFinger: T.func,
  onToggleVisibleDialog: T.func,
  isVisibleDialog: T.bool,
  theme: T.object,
  onToggleColorPicker: T.func,
  isColorPickerVisible: T.bool,
  onSelectColor: T.func,
  pickedcolor: T.string,
  onContactAdmins: T.func,
  onSuggestAFeature: T.func,
  onToggleMessageNotifications: T.func,
  isIncomingMessagesBlocked: T.bool,
  isNotificationsSilent: T.bool,
  onToggleNotificationsSound: T.func,
  onOpenChangeLanguage: T.func,
  displayCopilot: T.bool,
  setListRef: T.func,
  goToScreen: T.func,
  onGoToMyAlbums: T.func,
  onResetAllTutorials: T.func,
  currentProfile: T.object,
  isVisibleModal: T.bool,
  toggleVisibleModal: T.func,
  onGoToAddBusiness: T.func,
};

export default createScreen(Other, screens.Other);
