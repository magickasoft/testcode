/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { SwipeListView } from 'react-native-swipe-list-view';
import { RectButton } from 'react-native-gesture-handler';

import DialogPreview from './DialogPreview';
import { HeaderProfileSelector } from '../../containers';
import { Touchable, Text, Container, Icon, CopilotStep } from '../../components';
import { colors, dimensions } from '../../styles';
import { screens } from '../../constants';
import { createScreen } from '../../navigation';

const ITEM_HEIGHT = dimensions.indent * 8.5;

const getMessageTextFromObject = ({ lastMessage }, myProfileId) => {
  const isSent = lastMessage.mprofile.id === myProfileId;
  if (lastMessage.location) {
    return isSent ? I18n.t('messages.location_sent') : I18n.t('messages.location_received');
  }
  if (lastMessage.locationRequest) {
    return isSent ? I18n.t('messages.location_request_sent') : I18n.t('messages.location_request_received');
  }
  const prefix = isSent ? I18n.t('messages.sent_prefix') : '';
  if (lastMessage.photo) return `${prefix}${I18n.t('messages.photo_message')}`;
  return `${prefix}${lastMessage.message}`;
};

const renderDialogPreview = (myProfileId, toChat) => ({ item, index }) => (
  <DialogPreview
    key={index}
    itemHeight={ITEM_HEIGHT}
    onPress={toChat}
    profileId={item.interlocutor.id}
    message={getMessageTextFromObject(item, myProfileId)}
    photo={item.interlocutor.photo}
    fullName={item.interlocutor.fullName}
    created_ts={item.lastMessage.created_ts}
    lastonline_ts={item.interlocutor.lastonline_ts}
    isRead={!!item.lastMessage.is_read}
    vipSettings={item.interlocutor.vipSettings}
    vip_until={item.interlocutor.vip_until}
  />
);

const DialogsList = ({
  toUsersList,
  dialogs,
  myProfileId,
  toChat,
  theme: { s },
  displayCopilot,
  onItemPress
}) => {
  const actions = (data, rowMap) => [
    {
      text: I18n.t('swipeable.block'),
      color: colors.yellow,
      icon: {
        name: 'dots',
        color: '#fff',
        size: 30
      },
      onPress: onItemPress('block', data.item, rowMap)
    },
    {
      text: I18n.t('swipeable.delete'),
      color: '#dd2c00',
      icon: {
        name: 'dots',
        color: '#fff',
        size: 30
      },
      onPress: onItemPress('delete', data.item, rowMap)
    }
  ];

  const renderRightAction = ({
    text, color, icon, onPress
  }, index) => (
    <RectButton
      key={index}
      style={[s.rightAction, { backgroundColor: color }]}
      onPress={onPress}
    >
      {!!icon && <Icon {...icon} />}
      <Text style={s.actionText}>{text}</Text>
    </RectButton>
  );

  return (
    <Container style={s.root}>
      <HeaderProfileSelector
        profiles
        copilotProfile={displayCopilot && {
          text: I18n.t('copilot.profile_selector'),
          order: 1,
          name: 'profile'
        }}
      >
        <Touchable onPress={toUsersList}>
          <CopilotStep
            stepProps={displayCopilot && {
              text: I18n.t('copilot.users_list'),
              order: 2,
              name: 'users'
            }}
          >
            <Icon name="addFriend" color="#0e56e8" size={38} />
          </CopilotStep>
        </Touchable>
      </HeaderProfileSelector>
      <SwipeListView
        data={dialogs.map((obg, key) => ({ ...obg, key }))}
        renderItem={renderDialogPreview(myProfileId, toChat)}
        itemHeight={ITEM_HEIGHT}
        listEmptyText={I18n.t('messages.dialogs_empty')}
        ItemSeparatorComponent={null}
        initialNumToRender={10}
        renderHiddenItem={(data, rowMap) => (
          <View style={s.rowBack}>
            {actions(data, rowMap).map(renderRightAction)}
          </View>
        )}
        disableRightSwipe
        closeOnRowBeginSwipe
        closeOnRowPress={false}
        rightOpenValue={-160}
      />
    </Container>
  );
};

export default createScreen(DialogsList, screens.DialogsList);
