import React from 'react';
import * as SVG from 'react-native-svg';

export default function ReasonTaxi({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 24 13" {...rest}>
      <SVG.Path fill={color || '#373737' } fillRule="nonzero" d="M5.039 1.45c-1.18 0-2.196.813-2.427 1.943L1.533 8.659a2.362 2.362 0 0 0-.048.474c0 1.335 1.108 2.417 2.475 2.417h16.08c.162 0 .325-.016.485-.047 1.34-.262 2.21-1.535 1.941-2.844l-1.079-5.266c-.231-1.13-1.247-1.943-2.427-1.943H5.04zm0-1.45H18.96c1.888 0 3.513 1.301 3.884 3.108l1.078 5.267c.43 2.094-.962 4.131-3.106 4.55-.256.05-.516.075-.777.075H3.96C1.773 13 0 11.269 0 9.133c0-.254.026-.508.077-.758l1.079-5.267C1.526 1.301 3.15 0 5.039 0zm-.874 8.95h1.468V7.517H4.165V8.95zM3.67 6.067h2.458c.547 0 .99.432.99.966v2.4a.979.979 0 0 1-.99.967H3.67a.979.979 0 0 1-.99-.967v-2.4c0-.534.443-.966.99-.966zm4.045-.584h1.468V4.05H7.715v1.433zM7.22 2.6h2.458c.547 0 .99.433.99.967v2.4a.979.979 0 0 1-.99.966H7.22a.979.979 0 0 1-.99-.966v-2.4c0-.534.444-.967.99-.967zm4.046 6.35h1.468V7.517h-1.468V8.95zm-.495-2.883h2.458c.546 0 .99.432.99.966v2.4a.979.979 0 0 1-.99.967H10.77a.979.979 0 0 1-.99-.967v-2.4c0-.534.443-.966.99-.966zm4.045-.584h1.468V4.05h-1.468v1.433zM14.321 2.6h2.458c.547 0 .99.433.99.967v2.4a.979.979 0 0 1-.99.966H14.32a.979.979 0 0 1-.99-.966v-2.4c0-.534.443-.967.99-.967zm4.045 6.35h1.468V7.517h-1.468V8.95zm-.495-2.883h2.458c.547 0 .99.432.99.966v2.4a.979.979 0 0 1-.99.967h-2.458a.979.979 0 0 1-.99-.967v-2.4c0-.534.444-.966.99-.966z" />
    </SVG.Svg>
  );
}
