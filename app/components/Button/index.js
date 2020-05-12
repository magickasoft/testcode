import React from 'react';
import T from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { pure } from 'recompose';

import Touchable from '../Touchable';
import Text from '../Text';
import Icon from '../IconVector';
import style from './styles';
import { withTheme } from '../../utils/enhancers';

const getTypes = (s) => ({
  link: {
    titleStyle: s.titleLink,
    containerStyle: s.containerLink
  },
  filter: {
    titleStyle: s.titleButtonFilter,
    containerStyle: s.containerButtonFilter
  },
  button: {
    titleStyle: s.titleButton,
    containerStyle: s.containerButton
  },
  auth: {
    titleStyle: s.titleAuth,
    containerStyle: s.containerAuth
  }
});

const Button = ({
  backgroundColor,
  color,
  containerStyle,
  containerDisabled,
  icon,
  iconRight,
  title,
  titleStyle,
  type = 'button',
  size,
  theme: { s },
  ...touchableProps
}) => {
  const t = getTypes(s)[type];

  return (
    <Touchable
      style={[
        t.containerStyle,
        backgroundColor && { backgroundColor },
        !!icon && s.withIcon,
        containerStyle,
        touchableProps.disabled && (containerDisabled || s.disabled)
      ]}
      {...touchableProps}
    >
      {icon && <Icon {...icon} />}
      <Text
        style={[
          t.titleStyle,
          titleStyle,
          color && { color }
        ]}
      >
        {title}
        {iconRight && <Icon {...icon} />}
      </Text>
    </Touchable>
  );
};

Button.propTypes = {
  backgroundColor: T.string,
  color: T.string,
  containerDisabled: T.bool,
  containerStyle: ViewPropTypes.style,
  icon: T.object,
  iconRight: T.object,
  size: T.number,
  theme: T.object,
  title: T.string,
  titleStyle: Text.propTypes.style,
  type: T.oneOf(['link', 'filter', 'button', 'auth'])
};

export default withTheme(style)(pure(Button));
