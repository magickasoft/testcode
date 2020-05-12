import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

export default function Point({ color = '#F68C41', ...props }) {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <G fill="none" fillRule="nonzero">
        <Circle cx="8" cy="8" r="6" fill="#fff" />
        <Path fill={color} d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </G>
    </Svg>
  );
}
