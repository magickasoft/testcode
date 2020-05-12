import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import T from 'prop-types';
import { withTheme } from '@utils/enhancers';

const BookmarkButton = ({ fill = false, onPress, theme: { colors }, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 1H15V19.6667L8 14.9372L1 19.6667V7.81717V1Z"
        fill={fill ? colors.activePrimary : 'transparent'}
        stroke={fill ? colors.activePrimary : '#9A9B9D'}
      />
    </Svg>
  </TouchableOpacity>
);

BookmarkButton.propTypes = {
  fill: T.bool,
  onPress: T.func,
  style: T.any,
  theme: T.object
};

export default withTheme()(BookmarkButton);
