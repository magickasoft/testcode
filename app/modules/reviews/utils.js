import R from 'ramda';
import { likeTypes, likeValues } from '../../constants/like';
import { createLike } from './factory';

const isLike = R.propEq('type', likeTypes.like);
const isDislike = R.propEq('type', likeTypes.dislike);
const oldValueEquals = value => R.propEq('your_value', value);


// TODO: NEED TO FIX

const getLikeCount = ({ type, your_value, like_count, dislike_count }) => R.cond([ // eslint-disable-line
  ...R.map(
    el => ([
      R.both(el[0], oldValueEquals(el[1])),
      R.always(createLike(el[2], el[3])),
    ]), [
      [isLike, likeValues.none, like_count + 1, dislike_count], // eslint-disable-line
      [isLike, likeValues.like, like_count - 1, dislike_count], // eslint-disable-line
      [isLike, likeValues.dislike, like_count + 1, dislike_count - 1], // eslint-disable-line
      [isDislike, likeValues.none, like_count, dislike_count + 1], // eslint-disable-line
      [isDislike, likeValues.like, like_count + 1, dislike_count - 1], // eslint-disable-line
      [isDislike, likeValues.dislike, like_count, dislike_count - 1], // eslint-disable-line
    ]
  ), [
    R.T,
    R.always(createLike(like_count, dislike_count)),
  ],
])({
  type,
  your_value,
  like_count,
  dislike_count,
});

export default { getLikeCount, createLike };
