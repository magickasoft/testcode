import R from 'ramda';

const createLike = (like_count = 0, dislike_count = 0, your_value = 0) => ({
  like_count,
  dislike_count,
  your_value,
  __typename: 'LikeStatistic',
});

const createOptimisticReview = ({ place, currentProfile, variables }) => ({
  sendPlaceReview: {
    id: -1,
    created_ts: Date.now().valueOf() / 1000,
    ...R.pick([
      'lvl1',
      'text',
      'overflow_lvl',
    ], variables),
    place: R.pick([
      'id',
      'title',
      'files',
      '__typename',
    ], place),
    mprofile: R.pick([
      'id',
      'nickname',
      'lastname',
      'fullName',
      'name',
      'photo',
      '__typename',
    ], currentProfile),
    like_statistic: createLike(),
    __typename: 'PlaceReview',
  },
});

export {
  createLike,
  createOptimisticReview,
};
