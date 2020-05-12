import gql from 'graphql-tag';
import { LikeStatistic, Review } from './fragments';
import { mprofile } from '../myProfile/fragments';
import { PlaceMin } from '../place/fragments';

const GET_REVIEWS_FOR_PLACE = gql`
 query PlaceReview(
    $place_id: Int!,
    $offset: Int,
    $limit: Int,
    $loadToId: Int,
  ) {
    reviews(
      place_id: $place_id,
      offset: $offset,
      limit: $limit
      loadToId: $loadToId,
  ) {
    totalCount
    reviews {
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
}
${Review}
${mprofile}
${LikeStatistic}
${PlaceMin}
`;

const GET_REVIEWS_FOR_PROFILE = gql`
query (
 $mprofile_id: Int,
 $offset: Int,
 $limit: Int,
 $search: String,
 ) {
 reviews(
  mprofile_id: $mprofile_id,
  offset: $offset,
  limit: $limit,
  filter: {
    search: $search,
  }
) {
    totalCount
    reviews {
      ...Review
      place {
        ...PlaceMin
      }
      mprofile {
        ...mprofile
      }
    }
  }
}
${Review}
${mprofile}
${PlaceMin}
`;

export default {
  GET_REVIEWS_FOR_PLACE,
  GET_REVIEWS_FOR_PROFILE,
};
