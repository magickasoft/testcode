/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import { Svg, G, Polygon } from 'react-native-svg';

const viewBox = "0 0 48 37";

const AnswersRate = ({ width = 48, height = 37 }) => (
  <Svg
    width={width}
    height={height}
    viewBox={viewBox}
  >
    <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G transform="translate(-293.000000, -208.000000)" fill="url(#grad)">
        <G transform="translate(317.000000, 226.500000) scale(-1, 1) translate(-317.000000, -226.500000) translate(293.000000, 208.000000)">
          <Polygon fill="#B6DA86" points="46.3845114 15.9833683 48 16.424397 48 37 42 37 42 15" />
          <Polygon fill="#B6DA86" points="35 12.7088966 38 13.4961922 38 36 32 36 32 12" />
          <Polygon fill="#B6DA86" points="25.4068377 9.96820469 28 10.7517337 28 36 22 36 22 9" />
          <Polygon fill="#B6DA86" points="14 6.09689278 17 7.01862973 17 36 11 36 11 5" />
          <Polygon fill="#B6DA86" points="3.32724355 1.38519468 6 2.37902524 6 36 0 36 0 0" />
        </G>
      </G>
    </G>
  </Svg>
);

AnswersRate.propTypes = {
  width: T.number,
  height: T.number,
};

export default AnswersRate;
