/* eslint-disable */
import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import T from 'prop-types';

const Touchable = ({
  children,
  onPress,
  refTouchable,
  ...props
}) => {
  const index = !onPress ? 0 : 1;

  const Root = [
    View,
    TouchableOpacity,
  ][index];

  return (
    <Root onPress={onPress} ref={refTouchable} {...props} >
      {children}
    </Root>
  );
};

Touchable.propTypes = {
  children: T.node,
  onPress: T.func,
  ref: T.object,
};

export default Touchable;
