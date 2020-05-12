import gql from 'graphql-tag';
import { FullPlace, placeFileFull, placeHistory } from './fragments';

const GET_PLACE_LIST = gql`
   query PlaceList(
    $category_id: [Int],
    $title: String,
    $maxDistance: Float,
    $sortBy: PlaceListSort,
    $offset: Int,
    $limit: Int,
    $currentLocation: LatLngInput
  ) {
    placeList(filter: {
      category_id: $category_id
      title: $title,
      maxDistance: $maxDistance
    },
      offset: $offset,
      limit: $limit,
      sortBy: $sortBy,
      currentLocation: $currentLocation,
    ) {
      totalCount
      places {
        ...FullPlace 
        files {
          ...placeFileFull
        }
        reviewsTotalCount,
      }
    }
  }
${FullPlace}
${placeFileFull}
`;

const GET_PLACE = gql`
 query Place($id: Int!) {
  place(id: $id) {
    ...FullPlace
    checkInsCount
    files {
       ...placeFileFull
    }
    mprofile {
      id
      photo
      lastonline_ts
    }
  }
}
${FullPlace}
${placeFileFull}
`;

const GET_PLACE_HISTORY = gql`
query placeVisitsHistory (
  $weeks: [String!]!
) {
  placeVisitsHistory(
    weeks: $weeks
) {
    ...placeHistory
  }
}
${placeHistory}
`;

const GET_PLACE_CHECK_INS = gql`
  query PlaceCheckIns($placeId: Int!) {
    placeCheckIns(placeId: $placeId) {
      id
      created_ts
      profile {
        id
        photo
        fullName
      }
    }
  }
`;

const GET_PLACE_BOOKMARKS = gql`
   query PlaceBookmarks {
    placeBookmarks {
      ...FullPlace
      files {
        ...placeFileFull
      }
      reviewsTotalCount
    }
  }
  ${FullPlace}
  ${placeFileFull}
`;

export default {
  GET_PLACE,
  GET_PLACE_LIST,
  GET_PLACE_HISTORY,
  GET_PLACE_BOOKMARKS,
  GET_PLACE_CHECK_INS
};
