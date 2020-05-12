import gql from 'graphql-tag';
import { LikeStatistic, Review } from './fragments';
import { mprofile } from '../myProfile/fragments';
import { PlaceMin } from '../place/fragments';

const EDIT_PLACE_REVIEW = gql`
 mutation editPlaceReview ( 
    $reviewId: Int!
    $text: String!
 ) {
  editPlaceReview(
    reviewId: $reviewId,
    data: {
     text: $text,
  }) {
   ...Review
   place {
     ...PlaceMin
   }
   mprofile {
     ...mprofile
   }
   like_statistic {
     ...LikeStatistic
   }
  }
}
${Review}
${mprofile}
${LikeStatistic}
${PlaceMin}
`;

const SEND_PLACE_REVIEW = gql`
 mutation (
   $place_id: Int!,
   $text: String!,
   $overflow_lvl: Int,
   $lvl1: Int,
   $lvl2: Int,
   $lvl3: Int,
   $lvl4: Int,
   $lvl5: Int
 ) {
  sendPlaceReview(
    data: {
     place_id: $place_id,
     text: $text,
     overflow_lvl: $overflow_lvl,
     lvl1: $lvl1,
     lvl2: $lvl2,
     lvl3: $lvl3,
     lvl4: $lvl4,
     lvl5: $lvl5
    }) {
        ...Review
        place {
          ...PlaceMin
        }
        mprofile {
          ...mprofile
        }
        like_statistic {
          ...LikeStatistic
        }
    }
}
${Review}
${mprofile}
${LikeStatistic}
${PlaceMin}
`;

const UPDATE_LIKE_FOR_PLACE_REVIEW = gql`
  mutation ( 
   $review_id: Int!,
   $value: Int!,
 ) {
  sendLike(
    review_id: $review_id,
    value: $value,
  ) {
    ...Review
    place {
      ...PlaceMin
    }
    mprofile {
      ...mprofile
    }
    like_statistic {
      ...LikeStatistic
    }
  }
}
${Review}
${mprofile}
${LikeStatistic}
${PlaceMin}
`;

export default {
  SEND_PLACE_REVIEW,
  EDIT_PLACE_REVIEW,
  UPDATE_LIKE_FOR_PLACE_REVIEW,
};
