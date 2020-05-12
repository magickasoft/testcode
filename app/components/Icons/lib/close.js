import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Close({ color = '#F68C41', ...props }) {
  return (
    <Svg viewBox="0 0 33 33" {...props}>
      <Path
        d="M16.5 15.793l7.425-7.425.353-.353.707.707-.353.353-7.425 7.425 7.425 7.425.353.353-.707.707-.353-.353-7.425-7.425-7.425 7.425-.353.353-.707-.707.353-.353 7.425-7.425-7.425-7.425-.353-.353.707-.707.353.353 7.425 7.425z"
        stroke={color}
        fill={color}
        fillRule="evenodd"
        strokeLinecap="round"
      />
    </Svg>
  );
}
