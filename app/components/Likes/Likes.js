import React, { Fragment } from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import Touchable from '../Touchable';
import IconVector from '../IconVector';
import { likeValues } from '../../constants/like';
import colors from '../../styles/colors';
import Text from '../Text';
import ResonPanel from './ReasonPanel/ReasonPanel';
import s from './styles';

const icons = {
  arrowUp: {
    type: 'MaterialCommunityIcons',
    name: 'thumb-up',
    size: 15
  },
  arrowDown: {
    type: 'MaterialCommunityIcons',
    name: 'thumb-down',
    size: 15
  },
  close: {
    type: 'MaterialCommunityIcons',
    name: 'close',
    size: 23,
    color: colors.white
  }
};

const Likes = ({
  type,
  isLiked,
  likeCount,
  dislikeCount,
  translateY,
  isTextReasonVisible,
  isReasonButtonsVisible,
  onChangeLike,
  onChangeDislike,
  onClickReason,
  onCloseReason,
  children
}) => (
  <Fragment>
    <View style={s.likeButtonsContainer}>
      <Touchable onPress={onChangeLike}>
        <View style={[s.likeButton, s.marginRight]}>
          <IconVector
            containerStyle={s.iconStyle}
            {...icons.arrowUp}
            color={
              isLiked === likeValues.like
                ? colors.black
                : colors.lightGrey
            }
          />
          {!!likeCount && (
            <Text>{likeCount}</Text>
          )}
        </View>
      </Touchable>
      <Touchable onPress={onChangeDislike}>
        <View style={s.likeButton}>
          <IconVector
            containerStyle={s.iconStyle}
            {...icons.arrowDown}
            color={(
              isLiked === likeValues.dislike
                ? colors.black
                : colors.lightGrey
            )}
          />
          {!!dislikeCount && (
            <Text>{dislikeCount}</Text>
          )}
        </View>
      </Touchable>
      {children}
    </View>
    <ResonPanel
      translateY={translateY}
      onClick={onClickReason}
      onClose={onCloseReason}
      isVisible={!!type}
      isButtonsVisible={isReasonButtonsVisible}
      isTextVisible={isTextReasonVisible}
      type={type}
    />
  </Fragment>
);

Likes.propTypes = {
  children: T.node,
  dislikeCount: T.number,
  isLiked: T.number,
  isReasonButtonsVisible: T.bool,
  isTextReasonVisible: T.bool,
  likeCount: T.number,
  onChangeDislike: T.func,
  onChangeLike: T.func,
  onClickReason: T.func,
  onCloseReason: T.func,
  translateY: T.object,
  type: T.string
};

export default Likes;
