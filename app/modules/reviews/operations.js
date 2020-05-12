import R from 'ramda';

import utils from './utils';
import queries from './queries';
import { createOptimisticReview } from './factory';

const fetchMoreReviews = ({ reviews }) => {
  reviews.fetchMore({
    variables: {
      offset: reviews.data.length,
      loadToId: null,
      limit: 10,
    },
    updateQuery: (prev, { fetchMoreResult }) => ({
      ...prev,
      ...fetchMoreResult,
      reviews: {
        ...prev,
        ...fetchMoreResult.reviews,
        reviews: [
          ...reviews.data,
          ...fetchMoreResult.reviews.reviews,
        ],
      },
    }),
  });
};


// TODO: NEED TO REFACTOR

const updateLikeForPlaceReview = ({
  mutate,
  variables,
  type,
  loadToId,
  review,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: queries.GET_REVIEWS_FOR_PLACE,
        variables: {
          place_id: R.pathOr(null, ['place', 'id'], review),
          limit: 5,
          loadToId,
        },
      };

      const data = store.readQuery(query);
      const updateReviewIndex = R.findIndex(
        R.propEq('id', variables.review_id),
        R.path(['reviews', 'reviews'], data)
      );

      store.writeQuery({
        ...query,
        data: R.set(
          R.lensPath(['reviews', 'reviews', updateReviewIndex]),
          R.path(['data', 'sendLike'], res),
          data,
        ),
      });
    },
    optimisticResponse: {
      sendLike: {
        ...review,
        like_statistic: {
          ...utils.getLikeCount({ type, ...R.path('like_statistic', review) }),
          your_value: variables.value,
          __typename: 'LikeStatistic',
        },
        __typename: 'PlaceReview',
      },
    },
  });

const sendPlaceReview = ({
  mutate,
  variables,
  optimistic,
  loadToId,
}) =>
  mutate({
    variables,
    update: (store, res) => {
      const query = {
        query: queries.GET_REVIEWS_FOR_PLACE,
        variables: {
          place_id: variables.place_id,
          limit: 5,
          loadToId,
        },
      };

      const data = store.readQuery(query);

      data.reviews.reviews.unshift({});

      store.writeQuery({
        ...query,
        data: R.compose(
          R.set(
            R.lensPath(['reviews', 'totalCount']),
            R.add(1, (R.path(['reviews', 'totalCount'], data))),
          ),
          R.set(
            R.lensPath(['reviews', 'reviews', 0]),
            R.path(['data', 'sendPlaceReview'], res),
          )
        )(data),
      });
    },
    optimisticResponse: createOptimisticReview({ variables, ...optimistic }),
  });

const editReview = ({
  mutate,
  variables,
  review,
}) =>
  mutate({
    variables,
    optimisticResponse: {
      editPlaceReview: {
        ...review,
        text: R.prop('text', variables),
      },
    },
  });

export default {
  fetchMoreReviews,
  updateLikeForPlaceReview,
  sendPlaceReview,
  editReview,
};
