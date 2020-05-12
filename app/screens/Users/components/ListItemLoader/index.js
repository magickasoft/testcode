/* eslint-disable */
import React from 'react';
import { Rect, Circle } from 'react-native-svg';

import { dimensions, colors } from '../../../../styles';
import { ContentLoader } from '../../../../components';

const ItemLoader = ({ itemHeight }) => (
    <ContentLoader height={itemHeight} width={dimensions.windowWidth}>
      <Rect fill={colors.lightestGrey} x={itemHeight * 1.4} y={itemHeight - 40} rx="4" ry="4" width={dimensions.windowWidth * 0.7} height="10" />
      <Rect fill={colors.lightestGrey} x={itemHeight * 1.4} y={itemHeight - 20} rx="4" ry="4" width={dimensions.windowWidth * 0.7} height="10" />
      <Circle
        cx={itemHeight / 1.5}
        cy={itemHeight / 2}
        r={itemHeight / 2.5}
        fill={colors.lightestGrey}
      />
    </ContentLoader>
);

export default ItemLoader;
