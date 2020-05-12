import React from 'react';
import * as SVG from 'react-native-svg';

export default function Windy({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 33 33" {...rest}>
      <SVG.Path fill={color || '#D8D8D8'} fillRule="nonzero" d="M9.45 10.778c-.443-.031-.78-.03-.867-.019-2.726.353-4.833 2.96-4.833 6.1 0 .509.055 1.008.162 1.49l-1.464.326a8.373 8.373 0 0 1-.198-1.815c0-3.834 2.59-7.075 6.043-7.575.669-3.476 3.887-6.035 7.666-6.035 4.164 0 7.58 3.09 7.782 6.997l.273.003c3.72 0 6.736 3.022 6.736 6.75a6.751 6.751 0 0 1-4.01 6.174l-.609-1.37A5.251 5.251 0 0 0 29.25 17c0-2.9-2.345-5.25-5.236-5.25-.107 0-.197-.001-.324-.004a3.2 3.2 0 0 0-.357.002c-.104.009-.22.038-.447.12l-.206.083c-.32-.79-.43-1.102-.43-1.34 0-3.226-2.807-5.861-6.291-5.861-3.125 0-5.753 2.134-6.219 4.965-.033.203-.077.565-.13 1.08l-.16-.017zM3 21.75a.75.75 0 1 1 0-1.5l19.03.005c1.58-.177 2.22-.728 2.22-1.737 0-1.043-.542-1.587-1.864-1.776a.75.75 0 1 1 .212-1.484c2.022.288 3.152 1.423 3.152 3.26 0 1.87-1.284 2.973-3.637 3.232H3zm3 2.5a.75.75 0 1 1 0-1.5h16a.75.75 0 1 1 0 1.5H6zm5 2.503a.75.75 0 0 1 0-1.5h11.203c2.292-.085 3.547 1.273 3.547 3.747a.75.75 0 1 1-1.5 0c0-1.66-.59-2.3-2.019-2.247H11z" />
    </SVG.Svg>
  );
}
