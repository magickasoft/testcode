import React, { Fragment } from 'react';
import { ScrollView, View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';
import I18n from 'react-native-i18n';
import * as dateFns from 'date-fns';

import { profileHelpers } from '@utils/helpers';
import {
  Image,
  Text,
  Container,
  Button,
  HorizontalImagesList,
  CustomHeader,
  BackBtn,
  Icon
} from '@components';
import s from './style';
import { colors } from '../../styles';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';
import { BlockedProfile } from './components';

const getUserActionButtons = ({
  status,
  availableActions,
  onRemoveFriend,
  onAddFriend,
  cancelFriendRequest
}) => availableActions.map(R.cond([
  [R.equals(0), R.always(
    <Button
      key="cancel"
      title={I18n.t('profile.cancel_friend_request')}
      titleStyle={s.wideBtn}
      containerStyle={[s.wrapperWideBtn]}
      onPress={cancelFriendRequest}
    />
  )],
  [R.equals(3), R.always(
    <Button
      key="unfriend"
      title={I18n.t('profile.unfriend')}
      titleStyle={s.wideBtn}
      containerStyle={[s.wrapperWideBtn]}
      onPress={onRemoveFriend}
    />
  )],
  [R.equals(5), R.always(
    <Button
      key="add"
      title={['0:5', '1:5', '2:5', '3:5'].includes(status)
        ? I18n.t('profile.accept_friend_request')
        : I18n.t('profile.add_to_friends')
      }
      titleStyle={s.wideBtn}
      containerStyle={[s.wrapperWideBtn]}
      onPress={onAddFriend}
    />
  )]
]));

const getRightComponent = (onPress, colorIcon) => (
  <Icon
    name="dots"
    color={colorIcon}
    onPress={onPress}
    size={30}
  />
);

const getFrom = (profile, placeholder) => (name, placeHolder = placeholder) => R.pathOr(placeHolder, [name], profile);

const Profile = ({
  // onShare,
  onGoToChat,
  profile,
  openDialogOptions,
  onRemoveFriend,
  onAddFriend,
  cancelFriendRequest,
  onGoToAlbums,
  albumsPreview,
  totalPhotosCount,
  onGoToAlbum,
  friendsPreview,
  totalFriendsCount,
  onGoToProfile,
  onGoToFriends
}) => {
  const getFromProfile = getFrom(profile, I18n.t('profile.dont_show'));
  const isBlockedByUser = R.pathOr(null, ['relations', 'isBlockedByUser'], profile);

  const renderItem = ({ label = '', lastVisit = '', value = '' }) => {
    const hasLabel = label.toString().length > 0;
    const hasValue = value.toString().length > 0;
    const hasLastVisit = lastVisit.toString().length > 0;
    return (
      <View key={label}>
        {hasLabel && hasValue && (
          <View style={s.inLine}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              accessible
              style={s.label}
            >
              {label}
            </Text>
            {hasLastVisit && (
              <Text
                type="date"
                ellipsizeMode="tail"
                numberOfLines={1}
                accessible
                style={[s.value, s.sub]}
              >
                {lastVisit}
              </Text>
            )}
          </View>
        )}
        {hasValue && <Text style={s.value}>{value}</Text>}
      </View>
    );
  };

  renderItem.propTypes = {
    label: T.string,
    lastVisit: T.string,
    value: T.string
  };

  const mutualFriends = profile.mutualFriendsCount > 0 && totalFriendsCount > 0
    ? `${totalFriendsCount} (${profile.mutualFriendsCount} ${I18n.t('profile.mutual')})` : null;
  const cond = (!profile.mutualFriendsCount || profile.mutualFriendsCount === 0) && totalFriendsCount > 0;
  const title = `${I18n.t('profile.friends')}${cond ? ` (${totalFriendsCount})` : ''}`;
  const lastVisit = dateFns.isAfter(new Date(profile.vip_until * 1000), new Date()) &&
  profile.vipSettings && profile.vipSettings.v_invisible === '1'
    ? 'VIP'
    : profileHelpers.getTextOnlineStatus(profile.lastonline_ts);

  return (
    <Container>
      <CustomHeader
        backgroundColor={colors.white}
        leftComponent={<BackBtn color={colors.black} withoutLabel />}
        rightComponent={!isBlockedByUser ? getRightComponent(openDialogOptions, colors.black) : null}
      />
      {isBlockedByUser && <BlockedProfile />}
      {!isBlockedByUser && (
        <ScrollView contentContainerStyle={s.container}>
          <Image
            uri={getFromProfile('photo', null)}
            containerStyle={s.imageContainer}
          />
          <View style={s.content}>
            {renderItem({
              label: getFromProfile('fullName'),
              lastVisit,
              value: I18n.t('profile.age', { years: getFromProfile('age') })
            })}
          </View>
          <View style={s.buttonContainer}>
            <Button
              title={I18n.t('profile.message')}
              titleStyle={[s.wideBtn, s.wideBtn3]}
              containerStyle={[s.wrapperWideBtn, s.wrapperWideBtn3]}
              onPress={onGoToChat}
            />
            {getUserActionButtons({
              availableActions: R.pathOr([], ['relations', 'availableActions'], profile),
              status: R.pathOr('0:0', ['relations', 'status'], profile),
              onRemoveFriend,
              onAddFriend,
              cancelFriendRequest
            })}
          </View>
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
                onArrowPress={onGoToAlbums}
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
          {/* <View style={s.buttonContainer}> */}
          {/*  <Button */}
          {/*    title={I18n.t('profile.share_profile')} */}
          {/*    titleStyle={s.wideBtn} */}
          {/*    containerStyle={[s.wrapperWideBtn]} */}
          {/*    onPress={onShare} */}
          {/*  /> */}
          {/* </View> */}
        </ScrollView>
      )}
    </Container>
  );
};

Profile.propTypes = {
  onShare: T.func,
  onGoToChat: T.func,
  profile: T.object,
  openDialogOptions: T.func,
  onRemoveFriend: T.func,
  onAddFriend: T.func,
  cancelFriendRequest: T.func,
  onGoToAlbums: T.func,
  albumsPreview: T.array,
  totalPhotosCount: T.number,
  onGoToAlbum: T.func,
  friendsPreview: T.array,
  totalFriendsCount: T.number,
  onGoToProfile: T.func,
  onGoToFriends: T.func
};

export default createScreen(Profile, screens.Profile);
