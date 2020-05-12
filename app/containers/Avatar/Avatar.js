import React from 'react';
import { pure } from 'recompose';
import T from 'prop-types';
import { ViewPropTypes, View } from 'react-native';

import { profileHelpers } from '@utils/helpers';

import s from './styles';
import { moderateScale as scale } from '../../styles/scalingUtils';
import { isString } from '../../utils/helpers/checkTypes';
import { Image, Touchable } from '../../components';

const getSize = size => {
  const value = isString(size)
    ? ({
      large: 120,
      medium: 50,
      small: 30,
    }[size])
    : size;

  return ({ height: value, width: value });
};
const defaultUri = 'http://fuuse.net/wp-content/uploads/2016/02/avatar-placeholder.png';

const Avatar = props => {
  const {
    id,
    isRound = true,
    containerStyle,
    uri,
    size = 'medium',
    style,
    onPress,
    lastonline_ts,
    isOnline = true,
    ...imageProps
  } = props;

  const { height, width } = getSize(size);
  const Container = id ? Touchable : View;

  return (
    <Container onPress={onPress}>
      <Image
        containerStyle={[
          s.container,
          { height: scale(height), width: scale(width) },
          isRound && { borderRadius: height / 2 },
          containerStyle,
        ]}
        defaultUri={defaultUri}
        preloadPrefix="_preload"
        // prefix="_thumb"
        uri={uri}
        style={[s.img, style]}
        {...imageProps}
      />
      {isOnline && profileHelpers.getIsOnline(lastonline_ts) && (
        <View style={s.onlineIndicator} />
      )}
    </Container>
  );
};

Avatar.propTypes = {
  id: T.number,
  uri: T.string,
  height: T.number,
  width: T.number,
  defaultSource: T.number,
  opacity: T.object,
  onLoad: T.func,
  onError: T.func,
  containerStyle: ViewPropTypes.style,
  isRound: T.bool,
  style: ViewPropTypes.style,
  onPress: T.func,
  size: T.oneOfType([
    T.number,
    T.oneOf([
      'large',
      'medium',
      'small',
    ]),
  ]),
  isOnline: T.bool,
  lastonline_ts: T.any,
};

export default pure(Avatar);
