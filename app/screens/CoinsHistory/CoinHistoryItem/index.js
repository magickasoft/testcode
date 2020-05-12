import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import R from 'ramda';

import { Text } from '@components';
import { coins as coinsConstants } from '@constants';

import s from './styles';

const getCoinActionText = R.propOr('No category', R.__, coinsConstants.coinActionNames);

const CoinHistoryItem = ({ type_action, coins }) => (
  <View style={s.container}>
    <Text>{getCoinActionText(type_action)}</Text>
    <Text>{`${coins}`}</Text>
  </View>
);

CoinHistoryItem.propTypes = {
  coins: T.number,
  type_action: T.number
};

export default CoinHistoryItem;
