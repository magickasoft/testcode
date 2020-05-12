import React from 'react';
import T from 'prop-types';
import Switcher from 'react-native-switch-pro';
import { colors } from '../../styles';

import s from './style';

const Switch = ({
  backgroundActive = colors.activePrimary,
  backgroundInactive = colors.white,
  value,
  onValueChange,
  ...props
}) => (
  <Switcher
    backgroundActive={backgroundActive}
    backgroundInactive={backgroundInactive}
    onSyncPress={onValueChange}
    value={value}
    circleStyle={s.circleStyle}
    style={[
      s.containerStyle,
      { borderWidth: value ? 0 : 1 }, // eslint-disable-line
    ]}
    height={25}
    {...props}
  />
);

Switch.propTypes = {
  backgroundActive: T.string,
  backgroundInactive: T.string,
  onValueChange: T.func,
  value: T.bool
};

export default Switch;
