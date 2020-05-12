import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';
import I18n from 'react-native-i18n';

import {
  Image,
  Text,
  Button,
  Container,
  CopilotStep,
  HorizontalImagesList,
  CustomHeader,
  BackBtn,
  Icon,
} from '../../components';
import s from './style';
import { colors } from '../../styles';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';
// import sex from '../../constants/sex';

const getRightComponent = ({ openPhotoUploader, displayCopilot }, colorIcon) => (
  <CopilotStep
    stepProps={displayCopilot && {
      text: I18n.t('copilot.change_profile_picture'),
      order: 1,
      name: 'photo-upload',
    }}
    Component={View}
  >
    <Icon
      name="edit"
      color={colorIcon}
      onPress={openPhotoUploader}
    />
  </CopilotStep>
);
getRightComponent.propTypes = {
  openPhotoUploader: T.func,
  displayCopilot: T.bool,
};

const getFrom = (profile, placeholder = '') => name => R.pathOr(placeholder, [name], profile);

const MyProfile = ({
  onShare,
  openPhotoUploader,
  onEditProfile,
  currentProfile,
  onGoToFriends,
  onGoToMyAlbums,
  displayCopilot,
  setScrollRef,
  albumsPreview,
  totalPhotosCount,
  friendsPreview,
  totalFriendsCount,
  onGoToAlbum,
  onGoToProfile,
}) => {
  const getFromProfile = getFrom(currentProfile, I18n.t('profile.dont_show'));

  const renderItem = ({ label = '', value = '' }) => {
    const hasLabel = label.toString().length > 0;
    const hasValue = value.toString().length > 0;
    return (
      <View key={label}>
        {hasLabel && hasValue && <Text style={s.label}>{label}</Text>}
        {hasValue && <Text style={s.value}>{value}</Text>}
      </View>
    );
  };

  renderItem.propTypes = {
    label: T.string,
    value: T.string,
  };
  const mutualFriends = currentProfile.mutualFriendsCount > 0 && totalFriendsCount > 0
    ? `${totalFriendsCount} (${currentProfile.mutualFriendsCount} ${I18n.t('profile.mutual')})` : null;
  const cond = (!currentProfile.mutualFriendsCount || currentProfile.mutualFriendsCount === 0)
    && totalFriendsCount > 0;
  const title = `${I18n.t('profile.friends')}${cond ? ` (${totalFriendsCount})` : ''}`;
  return (
    <Container>
      <CustomHeader
        backgroundColor={colors.white}
        leftComponent={<BackBtn color={colors.black} withoutLabel />}
        rightComponent={getRightComponent({ displayCopilot, openPhotoUploader }, colors.black)}
      />
      <ScrollView
        contentContainerStyle={s.container}
        ref={setScrollRef}
      >
        <Image
          uri={getFromProfile('photo', null)}
          containerStyle={s.imageContainer}
        />
        <View style={s.content}>
          {renderItem({
            label: getFromProfile('fullName'),
            value: I18n.t('profile.age', { years: getFromProfile('age') }),
          })}
        </View>
        <CopilotStep
          stepProps={displayCopilot && {
            text: I18n.t('copilot.edit_profile'),
            order: 2,
            name: 'profile-edit',
          }}
          style={s.copilotContainerButton}
        >
          <Button
            title={I18n.t('profile.edit_profile')}
            titleStyle={s.wideBtn}
            containerStyle={[s.wrapperWideBtn]}
            onPress={onEditProfile}
          />
        </CopilotStep>
        <View style={s.separator} />
        {getFromProfile('about_me') ? (
          <Fragment>
            <View style={s.content}>
              {renderItem({ label: I18n.t('profile.about_me'), value: getFromProfile('about_me') })}
            </View>
            <View style={s.separator} />
          </Fragment>
        ) : null}
        {/* <View style={s.content}> */}
        {/*  <View style={s.details}> */}
        {/*    {renderItem({ label: I18n.t('profile.gender'), value: getFromProfile('sex') })} */}
        {/*    {renderItem({ label: I18n.t('profile.pronoun'), value: getFromProfile('sex') })} */}
        {/*    {renderItem({ label: I18n.t('profile.orientation'), value: getFromProfile('sex') })} */}
        {/*  </View> */}
        {/* </View> */}
        {/* <View style={s.separator} /> */}
        <View style={s.content}>
          {!R.isEmpty(albumsPreview) && (
            <HorizontalImagesList
              titleStyle={s.label}
              title={`${I18n.t('profile.photos')} (${totalPhotosCount})`}
              buttonTitle={I18n.t('profile.my_albums')}
              data={albumsPreview}
              onArrowPress={onGoToMyAlbums}
              onItemPress={onGoToAlbum}
            />
          )}
          {!R.isEmpty(friendsPreview) && (
            <HorizontalImagesList
              titleStyle={s.label}
              title={title}
              subTitle={mutualFriends}
              buttonTitle={I18n.t('profile.my_friends')}
              data={friendsPreview}
              onArrowPress={onGoToFriends}
              onItemPress={onGoToProfile}
            />
          )}
        </View>
        <Button
          title={I18n.t('profile.share_profile')}
          titleStyle={s.wideBtn}
          containerStyle={[s.wrapperWideBtn]}
          onPress={onShare}
        />
      </ScrollView>
    </Container>
  );
};

MyProfile.propTypes = {
  onShare: T.func,
  openPhotoUploader: T.func,
  onEditProfile: T.func,
  currentProfile: T.object,
  onGoToFriends: T.func,
  onGoToMyAlbums: T.func,
  onGoToAlbum: T.func,
  displayCopilot: T.bool,
  setScrollRef: T.func,
  onGoToProfile: T.func,
  albumsPreview: T.array,
  totalPhotosCount: T.number,
  friendsPreview: T.array,
  totalFriendsCount: T.number,
};

export default createScreen(MyProfile, screens.MyProfile);
