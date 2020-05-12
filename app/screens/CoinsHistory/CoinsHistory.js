import React from 'react';
import I18n from 'react-native-i18n';
import T from 'prop-types';
import { Container, FlatList, Button, CustomHeader, BackBtn } from '@components';
import { screens } from '@constants';
import { createScreen } from '@navigation';
import CoinHistoryItem from './CoinHistoryItem';

// eslint-disable-next-line react/prop-types
const renderCoinHistoryItem = ({ item, index, itemHeight }) => (
  <CoinHistoryItem
    itemIndex={index}
    itemHeight={itemHeight}
    {...item}
  />
);

const CoinsHistory = ({
  coinsHistory,
  onInterPromoCode,
  theme: { s }
}) => (
  <Container>
    <CustomHeader
      leftComponent={<BackBtn />}
      centerComponent={{ text: I18n.t('coins.title') }}
    />
    <FlatList
      data={coinsHistory}
      renderItem={renderCoinHistoryItem}
      listEmptyText={I18n.t('coins.empty_list')}
      ItemSeparatorComponent={null}
      initialNumToRender={10}
      ListFooterComponent={(
        <Button
          title={I18n.t('coins.redeem_promo_code')}
          onPress={onInterPromoCode}
          titleStyle={s.wideBtn}
          containerStyle={s.wrapperWideBtn}
        />
      )}
    />
  </Container>
);

CoinsHistory.propTypes = {
  coinsHistory: T.array,
  onInterPromoCode: T.func,
  theme: T.object
};

export default createScreen(CoinsHistory, screens.CoinsHistory);
