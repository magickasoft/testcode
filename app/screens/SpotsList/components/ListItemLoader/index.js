/* eslint-disable */
import React from 'react';
import { Rect } from 'react-native-svg';

import { dimensions, colors } from '../../../../styles';
import { Card, ContentLoader } from '../../../../components';

const IMAGE_HEIGHT = dimensions.indent * 16;

const ItemLoader = ({ itemHeight }) => (
  <Card
    style={{
      height: itemHeight,
      backgroundColor: colors.backgroundPrimary,
    }}
  >
    <ContentLoader height={itemHeight} width={dimensions.windowWidth}>
      <Rect fill={colors.lightestGrey} x="0" y="0" rx="4" ry="4" width={dimensions.windowWidth} height={IMAGE_HEIGHT} />
      <Rect fill={colors.lightestGrey} x="10" y={IMAGE_HEIGHT + 13} rx="4" ry="4" width="250" height="15" />
      <Rect fill={colors.lightestGrey} x="10" y={IMAGE_HEIGHT + 40} rx="4" ry="4" width="60" height="10" />
      <Rect fill={colors.lightestGrey} x="90" y={IMAGE_HEIGHT + 40} rx="4" ry="4" width="60" height="10" />
      <Rect fill={colors.lightestGrey} x="10" y={IMAGE_HEIGHT + 60} rx="4" ry="4" width="170" height="12" />
      <Rect fill={colors.lightestGrey} x="10" y={IMAGE_HEIGHT + 80} rx="4" ry="4" width="200" height="12" />
      <Rect fill={colors.lightestGrey} x="250" y={IMAGE_HEIGHT + 60} rx="4" ry="4" width="100" height="12" />
      <Rect fill={colors.lightestGrey} x="250" y={IMAGE_HEIGHT + 80} rx="4" ry="4" width="100" height="12" />
    </ContentLoader>
  </Card>
);

export default ItemLoader;
