import React from 'react';
import T from 'prop-types';
import { compose, pure } from 'recompose';
import { View } from 'react-native';
import { withTheme, withLocale } from '@utils/enhancers';
import { Icon, AnimatedTitle } from '@components';
import style from './style';

const Line = ({
  isLoading = false,
  theme: { s, colors },
  label = '',
  name
}) => (
  <View style={s.container}>
    {name && <Icon style={s.icon} type="Feather" name={name} color={colors.lightGrey} size={28} />}
    {label.length > 0 && (
      <AnimatedTitle
        isAbsolute={false}
        isLoading={isLoading}
        title={label}
        titleStyle={{ ...s.label }}
      />
    )}
  </View>
);

Line.propTypes = {
  isLoading: T.bool,
  label: T.string,
  name: T.string,
  theme: T.object
};

export default compose(
  withLocale(),
  pure,
  withTheme(style),
)(Line);
