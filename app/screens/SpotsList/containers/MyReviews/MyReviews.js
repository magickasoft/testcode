import React from 'react';
import T from 'prop-types';
import { pure } from 'recompose';
import { RefreshControl } from 'react-native';
import I18n from 'react-native-i18n';

import { FlatList, Container } from '../../../../components';
import { ListItemReview, ListItemLoader } from '../../components';
import styles, { dimensions } from '../../../../styles';
import { NAV_BAR_HEIGHT } from '../../constants';

// eslint-disable-next-line
const _renderItem = (onGoToReview) => ({ item, index, itemHeight }) => (
  <React.Suspense fallback={<ListItemLoader itemHeight={itemHeight} />}>
    <ListItemReview
      onPress={onGoToReview}
      itemIndex={index}
      itemHeight={itemHeight}
      {...item}
    />
  </React.Suspense>
);

const ITEM_HEIGHT = dimensions.indent * 20;

const MyReviews = ({
  reviews: {
    data,
  },
  isLoading,
  onEndReached,
  onGoToReview,
  onScroll,
  onScrollEndDrag,
  onRefresh,
  theme: {
    s,
  },
}) => (
  <Container style={s.container}>
    <FlatList
      data={data}
      ListItemLoader={ListItemLoader}
      itemHeight={ITEM_HEIGHT}
      style={[styles.fillAll, s.flatList]}
      contentContainerStyle={s.contentContainerStyle}
      renderItem={_renderItem(onGoToReview)}
      ItemSeparatorComponent={null}
      listEmptyText={I18n.t('spots.my_reviews_empty')}
      refreshing={isLoading.review || isLoading.fetchMore}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      scrollEventThrottle={1}
      onScroll={onScroll}
      onScrollEndDrag={onScrollEndDrag}
      contentInset={{ top: NAV_BAR_HEIGHT }} // for ios
      contentOffset={{ y: -NAV_BAR_HEIGHT }} // for ios
      refreshControl={
        <RefreshControl
          refreshing={isLoading.refetch}
          onRefresh={onRefresh}
          progressViewOffset={NAV_BAR_HEIGHT} // for android
        />
      }
    />
  </Container>
);

MyReviews.propTypes = {
  onGoToReview: T.func,
  onEndReached: T.func,
  reviews: T.shape({
    data: T.array,
  }),
  isLoading: T.shape({
    review: T.bool,
    refetch: T.bool,
    fetchMore: T.bool,
  }),
  onScroll: T.oneOfType([T.func, T.object]),
  onScrollEndDrag: T.oneOfType([T.func, T.object]),
  theme: T.object,
  onRefresh: T.func,
};

export default pure(MyReviews);
