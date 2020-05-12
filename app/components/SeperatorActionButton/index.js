/* eslint-disable */
import React from 'react';
import T from 'prop-types';
import {
  Svg,
  G,
  Rect,
  ClipPath,
  Ellipse
} from 'react-native-svg';
import { colors } from '../../styles';
import s from './styles';

const WIDTH = 29;
const HEIGHT = 51;

const SeperatorActionButton = ({ size = 1 }) => (
    <Svg
      width={WIDTH * size}
      height={HEIGHT * size}
      viewBox={`0 0 36 51`}
      style={s.seperator}
    >
      <ClipPath id="clip">
        <G>
          <Ellipse cx="-18" cy="25" rx="30" ry="26"/>
          <Ellipse cx="54" cy="25" rx="30" ry="26"/>
          <Rect
            x="0"
            y="0"
            height="51"
            width="50"
          />
        </G>
      </ClipPath>
      <Rect
        x="0"
        y="0"
        fill={colors.white}
        height="51"
        width="36"
        clipRule="evenodd"
        clipPath="url(#clip)"
      />
    </Svg>
  );

SeperatorActionButton.propTypes = {
  size: T.number,
};

export default SeperatorActionButton;
