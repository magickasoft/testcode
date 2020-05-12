import R from 'ramda';

import queries from './queries';
import mutations from './mutations';
import { hoc } from '../../utils/helpers/graphQl';

const queryGetReviewsForPlace = hoc(queries.GET_REVIEWS_FOR_PLACE, {
  name: 'getReviewsForPlace',
  options: props => ({
    variables: {
      place_id: R.pathOr(null, ['id'], props),
      limit: 5,
      loadToId: R.pathOr(null, ['loadToId'], props),
    },
  }),
});

const queryGetReviewsForIdProfile = hoc(queries.GET_REVIEWS_FOR_PROFILE, {
  name: 'getReviewsForIdProfile',
  options: props => ({
    variables: {
      mprofile_id: R.pathOr(null, ['idProfile'], props),
      search: R.pathOr(null, ['search'], props),
      limit: 5,
    },
  }),
});

const mutationSendPlaceReview = hoc(mutations.SEND_PLACE_REVIEW, {
  name: 'sendPlaceReview',
});

const mutationUpdateLikeForPlaceReview = hoc(mutations.UPDATE_LIKE_FOR_PLACE_REVIEW, {
  name: 'updateLikeForPlaceReview',
});

const mutationEditPlaceReview = hoc(mutations.EDIT_PLACE_REVIEW, {
  name: 'editPlaceReview',
});

export default {
  queryGetReviewsForPlace,
  queryGetReviewsForIdProfile,
  mutationSendPlaceReview,
  mutationUpdateLikeForPlaceReview,
  mutationEditPlaceReview,
};
