/* eslint-disable max-len */
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import T from 'prop-types';

const HeartSingle = ({ fill, size = 18, marginRight = 2.2 }) => (
  <Svg
    viewBox="0 0 18 18"
    style={{ marginRight }}
    width={size}
    height={size}
    fill="none"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.994 14h.012a.23.23 0 0 0 .14-.047c.133-.1 3.29-2.484 4.453-4.495A3.063 3.063 0 0 0 14 7.936C14 6.317 12.756 5 11.227 5 10.34 5 9.519 5.445 9 6.185 8.481 5.445 7.659 5 6.773 5 5.244 5 4 6.317 4 7.936c0 .535.137 1.058.397 1.514l.004.008c1.163 2.01 4.32 4.394 4.453 4.495a.23.23 0 0 0 .14.047z"
      fill={fill || '#D8D8D8'}
    />
  </Svg>
);

HeartSingle.propTypes = {
  fill: T.string,
  marginRight: T.number,
  size: T.number
};

export default HeartSingle;
