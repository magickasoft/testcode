import React from 'react';
import * as SVG from 'react-native-svg';

export default function InactiveLocation({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 19 20" {...rest}>
      <SVG.G fill="none" fillRule="nonzero">
        <SVG.Path fill={color || '#373737' } d="M8.856 19.974c-.283-.108-.497-.337-.53-.674l-.983-6.72-6.417-.792c-.377-.045-.674-.358-.73-.754-.057-.396.13-.824.481-1.013l5.295-3.095 6.856 6.68-2.859 5.897a.893.893 0 0 1-.948.497m.479-3l2.216-4.477-4.63-4.52-4.225 2.487 5.83.734L9.5 17zM8.413 5.499L17.56.153c.351-.19.777-.151 1.042.125.264.277.324.724.162 1.086l-4.725 9.748m0 0L12.918 10l3.661-7.53L9.5 6.583 8.413 5.5" />
        <SVG.Path fill="#FF3636" d="M2.242 1.345l16.07 16.07a.736.736 0 0 1-1.041 1.041L1.2 2.387a.736.736 0 0 1 1.041-1.041z" />
      </SVG.G>
    </SVG.Svg>
  );
}
