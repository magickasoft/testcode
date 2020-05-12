import React from 'react';
import * as SVG from 'react-native-svg';

export default function Email({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 24 24" {...rest}>
      <SVG.Path fill={color || '#373737' } fillRule="nonzero" d="M22.5 21.517l-6.193-5.378 2.636-2.365L20 12.83v-.002l2.5-2.242v10.931zM2.719 22.5l6.141-5.333 1.301 1.176a2.75 2.75 0 0 0 3.68.007l1.341-1.202 6.163 5.352H2.719zM1.504 10.522L4 12.777v.007l2.447 2.204 1.292 1.167-6.198 5.383-.037-11.016zM4 7.235v3.52L1.847 8.81 4 7.235zM5.5 6.14v-1.14a.5.5 0 0 1 .5-.5h10.253l.012.009h1.767c.059 0 .114.014.167.033a.5.5 0 0 1 .301.458v7.159l-.555.498-4.938 4.419a1.502 1.502 0 0 1-2.005-.003l-3.55-3.199L5.5 12.111V6.139zM11.709 1.6a.471.471 0 0 1 .576-.004l1.918 1.403H9.795L11.709 1.6zM20 7.241l2.193 1.605L20 10.813V7.24zm3.173.463l-3.141-2.298v-.398c0-.97-.689-1.777-1.604-1.96a2.012 2.012 0 0 0-.428-.05h-1.257L13.177.39a1.973 1.973 0 0 0-2.353 0L7.302 2.964H6a2 2 0 0 0-2 2V5.378L.817 7.704A1.98 1.98 0 0 0 0 9.301l.047 14.033c0 .37.298.666.666.666h22.621a.664.664 0 0 0 .666-.666V9.32a2.017 2.017 0 0 0-.827-1.616zM8 8.75h8.033a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5m0 3h8.033a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5" />
    </SVG.Svg>
  );
}