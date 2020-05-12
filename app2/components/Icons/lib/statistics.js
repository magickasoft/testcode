import React from 'react';
import * as SVG from 'react-native-svg';

export default function Statistics({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 24 22" {...rest}>
      <SVG.Path fill={color || '#373737' } fillRule="nonzero" d="M.75 20.483h22.5a.75.75 0 0 1 .75.75v.017a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75v-.017a.75.75 0 0 1 .75-.75zm2-7.84v7.587h2.5v-7.586h-2.5zM2 11.127h4c.414 0 .75.34.75.76v9.103a.754.754 0 0 1-.75.758H2a.754.754 0 0 1-.75-.758v-9.104c0-.419.336-.759.75-.759zm8.75-9.609V20.23h2.5V1.517h-2.5zM10 0h4c.414 0 .75.34.75.759v20.23a.754.754 0 0 1-.75.758h-4a.754.754 0 0 1-.75-.758V.759C9.25.339 9.586 0 10 0zm8.25 7.586V20.23h2.5V7.586h-2.5zM17.5 6.07h4c.414 0 .75.34.75.759v14.16a.754.754 0 0 1-.75.76h-4a.754.754 0 0 1-.75-.76V6.829c0-.42.336-.759.75-.759z" />
    </SVG.Svg>
  );
}
