import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Send({ color = '#000', ...props }) {
  return (
    <Svg viewBox="0 0 99 100" {...props}>
      <Path
        d="M71.5 28.64C52.085 50.538 42.575 61.867 42.968 62.63L61.5 98.62c1.029 2 3.955 1.778 4.673-.352L98.143 3.36c.676-2.008-1.255-3.915-3.255-3.212L1.701 32.889c-2.08.731-2.31 3.583-.371 4.636l36.712 19.953c.702.381 11.854-9.231 33.458-28.837z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
}
