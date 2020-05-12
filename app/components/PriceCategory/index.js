import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Icon } from '@components';
import { colors } from '@styles';
import s from './styles';

const maxPrice = 5;

const PriceCategory = ({
  priceCategory = 1,
  activeColor = colors.activePrimary,
  style
}) => {
  const active = Array.from(new Array(priceCategory));
  const diff = Array.from(new Array(maxPrice - priceCategory));

  const renderIcon = (props, i) => <Icon key={i} style={style} name="currencyUSD" width={8} height={12} {...props} />;

  return (
    <View style={s.container}>
      {active.map((_, i) => renderIcon({ color: activeColor }, i))}
      {diff.map((_, i) => renderIcon({ color: colors.lightestGrey }, i))}
    </View>
  );
};

PriceCategory.propTypes = {
  activeColor: T.string,
  priceCategory: T.number,
  style: T.object
};

export default PriceCategory;
