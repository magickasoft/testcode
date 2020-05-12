import React from 'react';
import Svg, { Path } from 'react-native-svg';
import T from 'prop-types';

import { withTheme } from '@utils/enhancers';

const CheckInIcon = ({
  theme: { colors },
  color,
}) => (
  <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 9.13885 19.6384 8.30377 19.4288 7.50845L18.156 8.75035C18.2179 9.15787 18.25 9.57518 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C11.9968 1.75 13.828 2.45943 15.2552 3.64L16.3337 2.58716C14.6299 1.13 12.4177 0.25 10 0.25C4.61522 0.25 0.25 4.61522 0.25 10ZM4 9.31371L5.41421 7.89949L9.65685 12.1421L19.5563 2.24264L20.9706 3.65685L11.0711 13.5563L9.65685 14.9706L8.24264 13.5563L4 9.31371Z" // eslint-disable-line
      fill={color || colors.activePrimary}
    />
  </Svg>
);

CheckInIcon.propTypes = {
  theme: T.object,
  color: T.string,
};

export default withTheme()(CheckInIcon);
