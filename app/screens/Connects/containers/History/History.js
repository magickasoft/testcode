import React from 'react';
import { RefreshControl } from 'react-native';
import T from 'prop-types';

import { withTheme } from '../../../../utils/enhancers';
import { Container, FlatList } from '../../../../components';
import { HistoryListItem, HistorySeparator } from '../../components';
import styles, { dimensions } from '../../../../styles';
import style from './style';

const ITEM_HEIGHT = dimensions.indent * 8;

const _renderItem = handlers => ({ item, itemHeight }) => ( // eslint-disable-line
  <HistoryListItem
    itemHeight={itemHeight}
    item={item}
    {...handlers}
  />
);

const History = ({
  history,
  onRefresh,
  onCheckIn,
  onHideItem,
  // onEndReached,
  isLoading,
  theme: { s, colors }
}) => (
  <Container style={s.container}>
    <FlatList
      data={history}
      itemHeight={ITEM_HEIGHT}
      style={styles.fillAll}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem({ onCheckIn, onHideItem })}
      ItemSeparatorComponent={(props) => (
        <HistorySeparator
          {...props}
          colors={colors}
          history={history}
        />
      )}
      listEmptyText="You don't have history of places visited for last four weeks."
      refreshing={isLoading.history}
      // onEndReached={onEndReached}
      initialNumToRender={7}
      refreshControl={
        <RefreshControl
          refreshing={isLoading.historyRefetch || isLoading.history}
          onRefresh={onRefresh}
        />
      }
    />
  </Container>
);


History.propTypes = {
  history: T.array,
  isLoading: T.shape({
    history: T.bool,
    historyRefetch: T.bool
  }),
  onCheckIn: T.func,
  onHideItem: T.func,
  onRefresh: T.func,
  // onEndReached: T.func,
  theme: T.object
};

export default withTheme(style)(History);
