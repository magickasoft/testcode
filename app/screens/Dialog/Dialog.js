/* eslint-disable no-underscore-dangle */
import React from 'react';
import { GiftedChat, Time } from 'react-native-gifted-chat';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';
import { BackBtn, CustomHeader, Icon, IconVector } from '@components';
import globalStyles from '@styles';
import {
  MapView,
  ActionView,
  ImageView,
  ImageViewerModal,
  LeftHeader,
  ChatFooter,
  RightHeader,
  ActionButtons,
  AlbumAccess
} from './components';
import { createScreen } from '../../navigation';
import { screens } from '../../constants';
import { styles } from './styles';
import isIPhoneX from '../../utils/isIPhoneX';

const isProfileBot = ({ id }) => id < 0;

const renderFooter = (isTyping, interlocutor) => () => {
  if (!isTyping) return null;
  return <ChatFooter interlocutor={interlocutor} />;
};

const renderSend = ({ text, onSend }) => {
  if (!text.trim().length) return null;
  return (
    <Icon
      onPress={() => {
        onSend({ text: text.trim() }, true);
      }}
      name="send"
      size={20}
      style={styles.icon}
    />
  );
};
renderSend.propTypes = {
  onSend: PropTypes.string,
  text: PropTypes.string
};

const renderCustomView = ({ currentMessage, onSend, user, onAnswerLocationRequest }) => {
  const isSentMessage = user._id === currentMessage.user._id;
  if (currentMessage.location) {
    return <MapView {...{ currentMessage }} />;
  }
  if (currentMessage.locationRequest) {
    return (
      <ActionView
        {...{
          currentMessage,
          onSend,
          isSentMessage,
          onAnswerLocationRequest
        }}
      />
    );
  }
  if (currentMessage.albumAccess) {
    return <AlbumAccess isSentMessage={isSentMessage} albumId={currentMessage.albumAccess} />;
  }
  return null;
};
renderCustomView.propTypes = {
  currentMessage: PropTypes.object,
  onAnswerLocationRequest: PropTypes.func,
  onSend: PropTypes.func,
  user: PropTypes.object
};

const renderTime = (props) => {
  // eslint-disable-next-line react/prop-types
  const displayRead = props.user._id === props.currentMessage.user._id && props.currentMessage.isRead;
  return (
    <React.Fragment>
      <Time {...props} containerStyle={{ right: { marginRight: displayRead ? 5 : 10 } }} />
      {displayRead && (
        <IconVector type="MaterialCommunityIcons" name="check" size={12} style={styles.readIcon} />
      )}
    </React.Fragment>
  );
};

const Dialog = ({
  messages,
  myProfileId,
  sendMessage,
  onEndReached,
  onPressAvatar,
  answerLocationRequest,
  uploadPhoto,
  viewImageIndex,
  images,
  showImage,
  hideImage,
  interlocutor,
  inputTextChanged,
  isTyping,
  openDialogOptions,
  displayCopilot
}) => {
  const isBot = isProfileBot(interlocutor);
  return (
    <View style={[globalStyles.fillAll, styles.screenContainer]}>
      <CustomHeader
        placement="left"
        leftComponent={<BackBtn />}
        centerComponent={
          <LeftHeader isBot={isBot} interlocutor={interlocutor} onPressAvatar={onPressAvatar} />
        }
        rightComponent={isBot ? null : <RightHeader onPress={openDialogOptions} />}
      />
      <ImageViewerModal {...{ viewImageIndex, images, hideImage }} />
      <GiftedChat
        messages={messages}
        onSend={sendMessage}
        user={{
          _id: myProfileId
        }}
        listViewProps={{
          onEndReached,
          onEndReachedThreshold: 100
        }}
        renderMessageImage={ImageView}
        onPressAvatar={isBot ? null : onPressAvatar}
        renderCustomView={renderCustomView}
        onAnswerLocationRequest={answerLocationRequest}
        onUploadPhoto={uploadPhoto}
        onShowImage={showImage}
        onInputTextChanged={inputTextChanged}
        renderFooter={renderFooter(isTyping, interlocutor)}
        containerStyle={styles.container}
        primaryStyle={styles.primary}
        renderSend={renderSend}
        renderAccessory={(props) => <ActionButtons displayCopilot={displayCopilot} {...props} />}
        renderTime={renderTime}
        accessoryStyle={styles.accessory}
        minInputToolbarHeight={22}
        bottomOffset={isIPhoneX ? 34 : 0}
        placeholder={I18n.t('messages.input_placeholder')}
      />
    </View>
  );
};

Dialog.propTypes = {
  answerLocationRequest: PropTypes.func,
  displayCopilot: PropTypes.bool,
  hideImage: PropTypes.func,
  images: PropTypes.array,
  inputTextChanged: PropTypes.func,
  interlocutor: PropTypes.object,
  isTyping: PropTypes.bool,
  messages: PropTypes.array,
  myProfileId: PropTypes.number,
  navigator: PropTypes.object,
  onEndReached: PropTypes.func,
  onPressAvatar: PropTypes.func,
  openDialogOptions: PropTypes.func,
  openPressItemMenu: PropTypes.func,
  sendMessage: PropTypes.func,
  setActionSheetRef: PropTypes.func,
  showImage: PropTypes.func,
  uploadPhoto: PropTypes.func,
  viewImageIndex: PropTypes.number
};

export default createScreen(Dialog, screens.Dialog);
