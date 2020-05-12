import React from 'react';
import * as SVG from 'react-native-svg';

export default function Lodging({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 21 16" {...rest}>
      <SVG.Path fill={color || '#373737' } fillRule="nonzero" d="M1.469 10.223h9.3v1.548h-9.3v4.126H0V0h1.469v10.223zm18.06 1.546H21V16h-1.47v-4.23zm-7.291-1.548h7.293V6.049c0-1.232-.946-2.23-2.114-2.23h-5.18v6.402zm-1.469-7.95h6.648C19.396 2.271 21 3.962 21 6.049v5.72H10.77V2.271zM5.923 8.723c-1.892 0-3.426-1.618-3.426-3.613 0-1.996 1.534-3.613 3.426-3.613 1.893 0 3.427 1.617 3.427 3.613 0 1.995-1.534 3.613-3.427 3.613zm0-1.549c1.081 0 1.958-.924 1.958-2.064 0-1.14-.877-2.065-1.958-2.065S3.965 3.97 3.965 5.11c0 1.14.877 2.064 1.958 2.064z" />
    </SVG.Svg>
  );
}