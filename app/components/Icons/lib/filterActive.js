import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function FilterActive({ color = '#F68C41', ...props }) {
  return (
    <Svg viewBox="0 0 25 23" {...props}>
      <Path
        d="M24.928.434a.755.755 0 0 1-.101.803l-9.029 10.93-.01 7.568c0 .288-.163.55-.42.677l-5.073 2.51a.76.76 0 0 1-1.094-.678V12.166L.173 1.237A.755.755 0 0 1 .758 0h23.484c.294 0 .56.169.686.434z"
        fill={color}
        fillRule="nonzero"
      />
    </Svg>
  );
}
