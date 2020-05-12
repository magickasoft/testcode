import React from 'react';
import T from 'prop-types';
import * as R from 'ramda';
import { View } from 'react-native';
import { Popover } from 'react-native-modal-popover';
import { pure } from 'recompose';

import { Avatar } from '../../containers';
import Touchable from '../Touchable';
import IconVector from '../IconVector';
import Separator from '../Separator';
import Text from '../Text';
import FlatList from '../FlatList';
import { scalingUtils } from '../../styles';

const icons = {
  plus: {
    name: 'plus-circle-outline',
    size: 30
  },
  settings: {
    type: 'SimpleLineIcons',
    name: 'settings',
    size: 30
  },
  inviteFriends: {
    type: 'Entypo',
    name: 'share-alternative',
    size: 30
  },
  arrowDown: {
    type: 'MaterialIcons',
    name: 'keyboard-arrow-down',
    size: 25
  },
  arrowUp: {
    type: 'MaterialIcons',
    name: 'keyboard-arrow-up',
    size: 25
  }
};

const ListItem = ({ s, onPress, icon, title}) => ( // eslint-disable-line
  <Touchable style={s.item} onPress={onPress}>
    <View style={s.containerIcon}>
      <IconVector
        {...icon}
      />
    </View>
    <View style={s.textContainer}>
      <Text style={s.text}>{title}</Text>
    </View>
  </Touchable>
);

const ListItemPure = pure(ListItem);

const ListItemAvatar = ({
  s,// eslint-disable-line
  uri,// eslint-disable-line
  title,// eslint-disable-line
  onPress,// eslint-disable-line
  titleStyle,// eslint-disable-line
  containerStyle,// eslint-disable-line
  containerStyleAvatar, // eslint-disable-line
}) => (
  <Touchable onPress={onPress} style={containerStyle}>
    <View style={s.item}>
      <View style={s.containerAvatar}>
        <Avatar
          containerStyle={containerStyleAvatar}
          defaultSource={require('../../assets/icons/user.png')}
          uri={uri}
        />
      </View>
      <View style={s.textContainer}>
        <Text style={[s.text, titleStyle]}>{title}</Text>
      </View>
    </View>
  </Touchable>
);

const ListItemAvatarPure = pure(ListItemAvatar);

const renderItem = (s, currentProfile, onPressProfile) => ({ item, itemHeight }) => { //eslint-disable-line
  const isSelectedProfile = item.id === currentProfile.id;
  return (
    <ListItemAvatarPure
      s={s}
      titleStyle={isSelectedProfile && s.selectedProfile}
      containerStyleAvatar={isSelectedProfile && s.selectedProfileAvatar}
      containerStyle={{ height: itemHeight }}
      el={item}
      uri={R.prop('photo', item)}
      title={R.prop('fullName', item)}
      onPress={() => onPressProfile(item)}
    />
  );
};

const ITEM_HEIGHT = scalingUtils.scale(55);

const ProfileSelector = ({
  title,
  currentProfile,
  profiles,
  titleStyle,
  isVisiblePopover,
  popoverAnchor,
  setButtonRef,
  setButton,
  toggleVisiblePopover,
  onPressProfile,
  canCreateProfile,
  onCreateProfile,
  onGoToSettings,
  theme: { s },
  ...props
}) => (
  <View>
    <Touchable
      refTouchable={setButtonRef}
      onLayout={setButton}
      onPress={toggleVisiblePopover}
      style={s.containerButton}
    >
      <Avatar
        defaultSource={require('../../assets/icons/user.png')}
        uri={R.prop('photo', currentProfile)}
        size="small"
      />
      <IconVector
        {...(isVisiblePopover ? icons.arrowUp : icons.arrowDown)}
      />
    </Touchable>
    <Popover
      contentStyle={s.content}
      arrowStyle={s.arrow}
      supportedOrientations={['portrait', 'landscape']}
      {...props}
      visible={isVisiblePopover}
      onClose={toggleVisiblePopover}
      fromRect={popoverAnchor}
    >
      <FlatList
        itemHeight={ITEM_HEIGHT}
        data={profiles}
        contentContainerStyle={s.contentContainerStyle}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <Separator marginLeft={60} marginVertical={5} />}
        renderItem={renderItem(s, currentProfile, onPressProfile)}
      />
      {!!canCreateProfile && (
        <ListItemPure
          s={s}
          onPress={onCreateProfile}
          title="Create Profile"
          icon={icons.plus}
        />
      )}
      <ListItemPure
        s={s}
        onPress={onGoToSettings}
        title="Settings"
        icon={icons.settings}
      />
    </Popover>
  </View>
);

ProfileSelector.propTypes = {
  canCreateProfile: T.bool,
  currentProfile: T.object,
  isVisiblePopover: T.bool,
  onCreateProfile: T.func,
  onGoToSettings: T.func,
  onPressProfile: T.func,
  popoverAnchor: T.object,
  profiles: T.array,
  setButton: T.func,
  setButtonRef: T.func,
  theme: T.object,
  title: T.string,
  titleStyle: Text.propTypes.style,
  toggleVisiblePopover: T.func,
  uri: T.string
};

export default ProfileSelector;
