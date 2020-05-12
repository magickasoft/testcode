import React from 'react';
import { RefreshControl } from 'react-native';
import T from 'prop-types';
import { FlatList } from '@components';
import { ListItemEvent } from '../../components';
import { ListItemLoader } from '../../../SpotsList/components';

const renderItem = (handlers) => (props) => (
  <React.Suspense fallback={<ListItemLoader {...props} />}>
    <ListItemEvent {...handlers} {...props} />
  </React.Suspense>
);

const Events = ({
  theme: { s },
  data,
  toEvent,
  toCreateEvent,
  loading,
  loadingRefetch,
  onEndReached,
  onRefresh,
  onScroll,
  onScrollEndDrag
}) => (
  <FlatList
    data={data}
    ListItemLoader={ListItemLoader}
    extraData={data}
    style={s.container}
    contentContainerStyle={s.content}
    renderItem={renderItem({ toEvent, toCreateEvent })}
    ItemSeparatorComponent={null}
    listEmptyText="No data"
    refreshing={loading}
    onRefresh={onRefresh}
    onEndReached={onEndReached}
    scrollEventThrottle={1}
    onScroll={onScroll}
    onScrollEndDrag={onScrollEndDrag}
    refreshControl={
      <RefreshControl
        refreshing={loadingRefetch}
        onRefresh={onRefresh}
      />
    }
  />
);

Events.propTypes = {
  theme: T.object,
  data: T.array,
  toEvent: T.func,
  toCreateEvent: T.func,
  loading: T.bool,
  loadingRefetch: T.bool,
  onEndReached: T.func,
  onRefresh: T.func,
  onScroll: T.oneOfType([T.func, T.object]),
  onScrollEndDrag: T.oneOfType([T.func, T.object]),
};

export default Events;
