import React from 'react';
import T from 'prop-types';
import { View, ViewPropTypes as RNViewPropTypes } from 'react-native';
import Animated from 'react-native-reanimated';
import Touchable from '../Touchable';
import styles from '../../styles';
import Text from '../Text';
import s from './styles';
import Icon from '../Icons';
import * as dimensions from '../../styles/dimensions';

const radius = dimensions.verticalIndent * 4;
const ViewPropTypes = RNViewPropTypes || View.propTypes;

const ButtonRound = ({
  backgroundColor,
  shadow = true,
  typeTitle = 'bottom',
  color,
  containerStyle,
  rootContainerStyle,
  icon,
  title,
  titleStyle,
  size = radius,
  reanimated = true,
  ...touchableProps
}) => {
  const RootComponent = reanimated ? Animated.View : View;
  return (
    <RootComponent style={rootContainerStyle}>
      <Touchable
        style={[
          s.container,
          { height: size * 2, width: size * 2, borderRadius: size },
          containerStyle,
          backgroundColor && { backgroundColor },
          shadow && styles.bigShadow
        ]}
        {...touchableProps}
      >
        {!!title && typeTitle === 'center' &&
        <Text
          style={[
            s.title,
            titleStyle,
            color && { color }
          ]}
        >
          {title}
        </Text>
        }
        {!!icon && <Icon {...icon} />}
      </Touchable>
      {!!title && typeTitle === 'bottom' &&
      <Text
        style={[
          s.title,
          titleStyle,
          color && { color }
        ]}
      >
        {title}
      </Text>
      }
    </RootComponent>
  );
};


ButtonRound.propTypes = {
  backgroundColor: T.string,
  color: T.string,
  containerStyle: ViewPropTypes.style,
  icon: T.object,
  reanimated: T.bool,
  rootContainerStyle: ViewPropTypes.style,
  shadow: T.oneOfType([T.bool, T.number]),
  size: T.number,
  title: T.string,
  titleStyle: Text.propTypes.style,
  typeTitle: T.oneOf(['bottom', 'center'])
};

export default ButtonRound;
