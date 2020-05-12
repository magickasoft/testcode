import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Path,
} from 'react-native-svg';

const CoinIcon = props => (
  <Svg width={29} height={31} {...props}>
    <Defs>
      <LinearGradient
        x1="0%"
        y1="8.506%"
        x2="91.388%"
        y2="67.787%"
        id="prefix__b"
      >
        <Stop stopColor="#FAD961" offset="0%" />
        <Stop stopColor="#FFAF81" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Ellipse
        fill="#D8D8D8"
        opacity={0.775}
        filter="url(#prefix__a)"
        cx={14.5}
        cy={29}
        rx={11.5}
        ry={1}
      />
      <Path
        d="M14.5 29C6.492 29 0 22.508 0 14.5S6.492 0 14.5 0 29 6.492 29 14.5 22.508 29 14.5 29zm0-1.5c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13zm0-1c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z" // eslint-disable-line
        fill="url(#prefix__b)"
      />
    </G>
  </Svg>
);

export default CoinIcon;
