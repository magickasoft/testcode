import React from 'react';
import * as SVG from 'react-native-svg';

export default function Sms({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 22 24" {...rest}>
      <SVG.Path fill={color || '#373737' } fillRule="nonzero" d="M16 12v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5v1.498H2.3a.8.8 0 0 0-.8.8V21.7a.8.8 0 0 0 .8.8h11.4a.8.8 0 0 0 .8-.8V12H16zm-8.25 8h.5a.75.75 0 1 1 0 1.5h-.5a.75.75 0 1 1 0-1.5zm4.93-9.245l2.544-2.545h4.939c.211 0 .493-.282.493-.493V1.892c0-.328-.165-.493-.493-.493h-9.32c-.212 0-.493.282-.493.493v5.825c0 .211.281.493.493.493h1.837v2.545zm-1.345-1.2h-.492c-.954 0-1.838-.884-1.838-1.838V1.892c0-.954.884-1.837 1.838-1.837h9.32C21.233.055 22 .822 22 1.892v5.825c0 .954-.883 1.837-1.837 1.837H15.78L11.335 14V9.554z" />
    </SVG.Svg>
  );
}
