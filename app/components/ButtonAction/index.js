import React from 'react';
import { findNodeHandle } from 'react-native';
import T from 'prop-types';
import Button from 'react-native-action-button';
import { BlurView } from 'react-native-blur';
import { colors, dimensions, scalingUtils } from '@styles';
import Icon from '../Icons';
import s from './styles';

const { scale } = scalingUtils;
const icons = {
  plus: {
    name: 'plus',
    color: colors.white,
    size: dimensions.verticalIndent * 2.5
  }
};

// eslint-disable-next-line
const Blur = ({ ...props }) => (
  <BlurView
    style={s.blur}
    blurType="light"
    blurAmount={10}
    blurRadius={10}
    {...props}
  />
);

const btns = [{
  title: 'Lorem',
  icon: icons.plus
}, {
  title: 'Lorem',
  icon: icons.plus
}, {
  title: 'Lorem',
  icon: icons.plus
}, {
  title: 'Lorem',
  icon: icons.plus
}, {
  title: 'Lorem',
  icon: icons.plus
}, {
  title: 'Lorem',
  icon: icons.plus
}];

const ButtonAction = ({
  buttons = btns,
  buttonColor = colors.activeSecondary,
  isBlur = true,
  onPress,
  onChangeBlur,
  viewRef = null,
  ...props
}) => {
  const blurProps = isBlur && !!viewRef ? {
    backdrop: <Blur viewRef={viewRef && findNodeHandle(viewRef)} />
  } : {};

  return (
    <Button
      buttonColor={buttonColor}
      zIndex={1000}
      elevation={10}
      shadowStyle={s.shadow}
      {...blurProps}
      onPress={onPress || onChangeBlur}
      size={scale(65)}
      spacing={scale(12)}
      offsetX={scale(15)}
      offsetY={scale(20)}
      buttonTextStyle={s.rootButtonTextStyle}
      fixNativeFeedbackRadius
      {...props}
    >
      {!onPress && buttons.map(({ icon, ...el }, index) => (
        <Button.Item
          fixNativeFeedbackRadius
          key={el.title}
          size={scale(50)}
          title="Don't have title"
          buttonColor={index > 2 ? buttonColor : colors.green}
          textStyle={s.textStyle}
          textContainerStyle={s.textContainerStyle}
          hideShadow
          {...el}
        >
          {icon && <Icon {...icon} /> }
        </Button.Item>
      ))}
    </Button>
  );
};

ButtonAction.propTypes = {
  buttonColor: T.string,
  buttons: T.arrayOf(T.object),
  isBlur: T.string,
  onChangeBlur: T.func,
  onPress: T.func,
  viewRef: T.object
};

export default ButtonAction;
