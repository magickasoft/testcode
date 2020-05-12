import React, { Fragment } from 'react';
import T from 'prop-types';
import { View, Animated } from 'react-native';

import Text from '../Text';
import s, { colors } from './styles';
import Icon from '../IconVector';
import Touchable from '../Touchable';

import { scalingUtils } from '../../styles';
import { translateY } from '../../utils/animation/transform';

const icons = {
  error: {
    type: 'EvilIcons',
    size: scalingUtils.verticalScale(24),
    name: 'close-o',
    color: colors.red
  },
  success: {
    type: 'EvilIcons',
    size: scalingUtils.verticalScale(24),
    name: 'check',
    color: colors.green
  },
  noNetwork: {
    type: 'MaterialIcons',
    size: scalingUtils.verticalScale(24),
    name: 'signal-cellular-connected-no-internet-4-bar',
    color: colors.yellow
  },
  close: {
    type: 'EvilIcons',
    name: 'close',
    size: scalingUtils.verticalScale(18)
  }
};

const types = {
  err: {
    containerStyle: s.errContainer,
    textStyle: s.errText,
    icon: icons.error
  },
  success: {
    containerStyle: s.successContainer,
    textStyle: s.successText,
    icon: icons.success
  },
  noNetwork: {
    containerStyle: s.noNetworkContainer,
    textStyle: s.noNetworkText,
    icon: icons.noNetwork
  }
};

const Alert = ({
  _transY,
  _onClose,
  message = 'ERROR network',
  type = 'err',
  isVisible
}) => {
  const { containerStyle, icon, textStyle } = types[type];

  return (
    <Fragment>
      {isVisible && (
        <Animated.View style={[s.root, translateY(_transY)]}>
          <View style={[s.container, containerStyle]}>
            <View style={s.icon}>
              <Icon {...icon} />
            </View>
            <Text style={[s.text, textStyle]}>{message}</Text>
            <View style={s.iconClose}>
              <Touchable style={s.close} onPress={_onClose}>
                <Icon {...icons.close} fill={icon.fill} />
              </Touchable>
            </View>
          </View>
        </Animated.View>
      )}
    </Fragment>
  );
};

Alert.propTypes = {
  _onClose: T.func,
  _transY: T.object,
  isVisible: T.bool,
  message: T.string,
  type: T.oneOf(['err', 'success', 'noNetwork'])
};

export default Alert;
