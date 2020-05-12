import React from 'react';
import { Platform, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { pure } from 'recompose';
import T from 'prop-types';
import { IconVector, Text } from '../index';
import { dimensions } from '../../styles';

const icon = Platform.select({
  ios: {
    type: 'Ionicons',
    name: 'ios-arrow-back',
    size: 24
  },
  android: {
    type: 'MaterialIcons',
    name: 'arrow-back',
    size: 24
  }
});

const BackButton = ({ onPress, s, rounded, ...props }) => ( // eslint-disable-line
  <TouchableOpacity
    style={[rounded && s.roundedIcon]}
    onPress={onPress}
  >
    <IconVector
      isAnimated
      {...icon}
      {...props}
    />
  </TouchableOpacity>
);

const Title = ({ title, s, ...props }) => ( // eslint-disable-line
  <Text
    isReanimated
    type="h1"
    numberOfLines={1}
    {...props}
  >
    {title}
  </Text>
);

const Header = ({
  title,
  titleStyle,
  colorTitle,
  statusBarColor,
  rightComponent,
  rightContainerStyle,
  containerStyle,
  children,
  leftContainerStyle,
  leftComponent,
  backButton = true,
  rounded = false,
  backgroundColor,
  color,
  shadow = true,
  absolute = false,
  contentContainerStyle,
  theme: { s, colors },
  _onGoBack
}) => (
  <Animated.View
    style={[
      s.root,
      shadow && s.shadow,
      absolute && s.absolute,
      backgroundColor ? { backgroundColor } : null
    ]}
  >
    <Animated.View
      style={{ height: dimensions.statusBarHeight, backgroundColor: statusBarColor }}
    />
    <Animated.View style={[s.content, contentContainerStyle]}>
      <View style={leftContainerStyle}>
        {leftComponent || (
          backButton && <BackButton
            rounded={rounded}
            s={s}
            style={{ color }}
            containerStyle={s.backButtonContainer}
            onPress={_onGoBack}
          />
        )}
      </View>
      <View
        style={[
          s.containerChildren,
          containerStyle,
          !leftComponent && s.backButton,
          !!title && !rightComponent && s.onlyTitle
        ]}
      >
        {children || (
        <Title
          style={titleStyle}
          color={colorTitle || color || colors.black}
          title={title}
          s={s}
        />
        )}
      </View>
      {!!rightComponent && (
      <View style={rightContainerStyle}>
        {rightComponent}
      </View>
      )}
    </Animated.View>
  </Animated.View>
);

Header.propTypes = {
  _onGoBack: T.func,
  absolute: T.bool,
  backButton: T.bool,
  backgroundColor: T.any,
  children: T.node,
  color: T.oneOfType([T.string, T.object]),
  colorTitle: T.any,
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  leftComponent: T.node,
  leftContainerStyle: ViewPropTypes.style,
  rightComponent: T.node,
  rightContainerStyle: ViewPropTypes.style,
  rounded: T.bool,
  shadow: T.bool,
  statusBarColor: T.any,
  theme: T.object,
  title: T.string,
  titleStyle: T.any
};

export default pure(Header);
