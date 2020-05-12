import React from 'react';
import Svg, { G, Circle, Path } from 'react-native-svg';

export default function Carey({ color, ...rest }) {
  return (
    <Svg viewBox="0 0 34 34" {...rest}>
      <G fill="none" fillRule="evenodd" transform="translate(2 2)" {...rest}>
        <Circle cx="15" cy="15" r="16" fill="#00447B" stroke="#FFF" strokeWidth="2"/>
        <G fill="#FFF">
          <Path d="M5.596 12c2.406 0 2.42 2.213 2.42 2.213l-1.565.006s-.078-.806-.861-.806c-.698 0-.966.701-.966 1.37 0 .768.175 1.617.966 1.617.791 0 .853-.916.853-.916l1.59-.004c0 .66-.394 2.333-2.443 2.333-2.38 0-2.59-2.51-2.59-2.997C3 14.329 3.253 12 5.596 12M27.441 12.173c-.201 0-.364.18-.364.404 0 .224.163.405.364.405.2 0 .363-.181.363-.405 0-.223-.162-.404-.363-.404m0 .7c-.155 0-.247-.103-.247-.295 0-.193.092-.297.247-.297s.247.104.247.297c0 .192-.092.295-.247.295"/>
          <Path d="M27.501 12.596c.028-.003.067-.026.067-.093 0-.087-.058-.113-.151-.113h-.112v.346h.082v-.13h.029l.07.13h.09l-.075-.14zm-.07-.058h-.044v-.08h.043c.033 0 .051.013.051.038 0 .028-.018.042-.05.042zM23.365 12.166l.854 1.988.921-1.992 1.757.004.004.011c.009.045-1.883 3.5-1.883 3.5v2.01h-1.61v-2.03l-1.09-2.075h-2.626v.672h2.474l-.004 1.333h-2.47v.66l2.796-.016-.009 1.455h-4.39l.007-5.524 5.269.004zM16.13 12.154c.021-.004 1.738-.081 1.738 1.602 0 1.027-.691 1.324-.708 1.354.433.23.718.981.718 1.616 0 .821.153.806.153.96h-1.592c-.24-.798-.032-1.92-.811-1.92-.216 0-.896.007-.896.007l-.021 1.913h-1.617l.004-5.535s2.904.004 3.032.003m-1.387 1.325c0 .338-.01.735-.01 1.081.84 0 1.523.084 1.523-.531 0-.616-.574-.55-1.513-.55M11.131 12.154l1.9 5.532h-1.665l-.225-.767-1.656.002-.224.765H7.634l1.932-5.537 1.565.005zm-.781 1.917l-.476 1.602h.922l-.446-1.602z"/>
        </G>
      </G>
    </Svg>
  );
}