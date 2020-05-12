import gql from 'graphql-tag';

const Review = gql`
  fragment Review on PlaceReview {
    id
    created_ts
    lvl1
    text
    overflow_lvl
    isFirst
    sticker
  }
`;

const LikeStatistic = gql`
    fragment LikeStatistic on LikeStatistic {
      like_count
      dislike_count
      your_value
    }
`;

export { Review, LikeStatistic };
