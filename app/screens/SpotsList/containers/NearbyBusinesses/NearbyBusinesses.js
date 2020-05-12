import React from 'react';
import T from 'prop-types';
import { pure } from 'recompose';
import { RefreshControl } from 'react-native';

import { FlatList, Container } from '../../../../components';
import { ListItemPlace, ListItemLoader } from '../../components';
import styles, { dimensions } from '../../../../styles';
import { NAV_BAR_HEIGHT } from '../../constants';

// eslint-disable-next-line
const _renderItem = (onGoToReview, currentLocation, changeBookmarkStatus) => ({ item, index, itemHeight }) => (
  <React.Suspense fallback={<ListItemLoader itemHeight={itemHeight} />}>
    <ListItemPlace
      onPress={onGoToReview}
      currentLocation={currentLocation}
      itemIndex={index}
      itemHeight={itemHeight}
      changeBookmarkStatus={changeBookmarkStatus}
      {...item}
    />
  </React.Suspense>
);

const ITEM_HEIGHT = dimensions.indent * 29;

const NearbyBusinesses = ({
  places,
  onEndReached,
  loading,
  loadingRefetch,
  onGoToReview,
  onScroll,
  onScrollEndDrag,
  currentLocation,
  onRefresh,
  changeBookmarkStatus,
  theme: { s }
}) => (
  <Container style={s.container}>
    <FlatList
      data={places}
      ListItemLoader={ListItemLoader}
      extraData={currentLocation}
      itemHeight={ITEM_HEIGHT}
      style={[styles.fillAll, s.flatList]}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem(onGoToReview, currentLocation, changeBookmarkStatus)}
      ItemSeparatorComponent={null}
      listEmptyText="No data"
      refreshing={loading}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      scrollEventThrottle={1}
      onScroll={onScroll}
      onScrollEndDrag={onScrollEndDrag}
      contentInset={{ top: NAV_BAR_HEIGHT }} // for ios
      contentOffset={{ y: -NAV_BAR_HEIGHT }} // for ios
      refreshControl={
        <RefreshControl
          refreshing={loadingRefetch}
          onRefresh={onRefresh}
          progressViewOffset={NAV_BAR_HEIGHT} // for android
        />
      }
    />
  </Container>
);

NearbyBusinesses.propTypes = {
  onGoToReview: T.func,
  onEndReached: T.func,
  loading: T.bool,
  loadingRefetch: T.bool,
  places: T.array,
  onScroll: T.oneOfType([T.func, T.object]),
  onScrollEndDrag: T.oneOfType([T.func, T.object]),
  currentLocation: T.object,
  theme: T.object,
  onRefresh: T.func,
  changeBookmarkStatus: T.func,
};

export default pure(NearbyBusinesses);
