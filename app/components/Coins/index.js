import React from 'react';
import T from 'prop-types';
import { pure, compose, withHandlers, getContext } from 'recompose';
import { TouchableOpacity } from 'react-native';

import { screens } from '@constants';
import { Text } from '@components';

import { CoinIcon } from '../../assets/svgs';
import s from './styles';

const Coins = ({ balance = 0, openCoinsHistory }) => (
  <TouchableOpacity
    style={s.container}
    onPress={openCoinsHistory}
  >
    <CoinIcon />
    <Text style={s.coinBalance}>{`${balance}`}</Text>
  </TouchableOpacity>
);

Coins.propTypes = {
  balance: T.number,
  openCoinsHistory: T.func
};

export default compose(
  getContext({ navigator: T.object }),
  withHandlers({
    openCoinsHistory: ({ navigator }) => () => {
      navigator.push(screens.CoinsHistory);
    }
  }),
  pure,
)(Coins);
