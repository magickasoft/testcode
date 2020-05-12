import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  getContext,
  shouldUpdate,
} from 'recompose';
import R from 'ramda';
import T from 'prop-types';
import { connect } from 'react-redux';

import { screens } from '../../../../constants';
import { reviewsHocs, reviewsOperations } from '../../../../modules/reviews';
import MyReviews from './MyReviews';
import { withTheme } from '../../../../utils/enhancers';
import s from './style';

const enhance = compose(
  shouldUpdate((props, { tabIndex, currentTab }) => currentTab === tabIndex),
  getContext({ navigator: T.object }),
  connect(({ user: { idProfile } }) => ({ idProfile }), null),

  reviewsHocs.queryGetReviewsForIdProfile({
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  }),
  withProps(({ getReviewsForIdProfile }) => ({
    reviews: {
      data: R.pathOr([], ['reviews', 'reviews'], getReviewsForIdProfile),
      totalCount: R.pathOr(0, ['reviews', 'totalCount'], getReviewsForIdProfile),
      fetchMore: R.pathOr(null, ['fetchMore'], getReviewsForIdProfile),
      refetch: R.pathOr(null, ['refetch'], getReviewsForIdProfile),
    },
    isLoading: {
      review: R.pathOr(false, ['loading'], getReviewsForIdProfile),
      refetch: R.pathOr(-1, ['networkStatus'], getReviewsForIdProfile) === 4,
      fetchMore: R.pathOr(-1, ['networkStatus'], getReviewsForIdProfile) === 3,
    },
  })),
  withHandlers({
    onGoToReview: props => (id, loadToId) => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id, itemIndex: 0, loadToId },
      });
    },
    onEndReached: props => () => {
      const { reviews, isLoading } = props;
      const { totalCount, data } = reviews;

      const loadedCount = data.length;

      if (isLoading.review || isLoading.fetchMore || totalCount === loadedCount) return;
      reviewsOperations.fetchMoreReviews(props);
    },
    onRefresh: props => () => {
      props.reviews.refetch();
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(MyReviews);
