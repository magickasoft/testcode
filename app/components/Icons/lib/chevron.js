import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Chevron({ color = '#bbbbbf', ...props }) {
  return (
    <Svg viewBox="0 0 10 14" {...props}>
      <Path fill={color} d="M6.305 7.03L.797 1.742 2.182.299l7.021 6.74-7.03 6.662-1.376-1.452z"/>
    </Svg>
  );
}
