/* eslint-disable */
import React from 'react';
import { Rect } from 'react-native-svg';
import { View } from 'react-native';

import { dimensions, colors } from '../../../../styles';
import { ContentLoader } from '../../../../components';

const ItemLoader = ({ itemHeight }) => (
  <View
    style={{
      height: itemHeight,
      backgroundColor: colors.backgroundPrimary,
    }}
  >
    <ContentLoader height={itemHeight} width={dimensions.windowWidth}>
      <Rect
        fill={colors.lightestGrey}
        x="0"
        y="0"
        width={dimensions.windowWidth}
        height={itemHeight} />
    </ContentLoader>
  </View>
);

export default ItemLoader;
