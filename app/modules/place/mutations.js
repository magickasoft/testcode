import gql from 'graphql-tag';
import { FullPlace, placeFileFull, placeHistory } from './fragments';

const ATTACH_FILE_TO_PLACE = gql`
  mutation ( 
   $fileId: Int!
   $placeId: Int!
 ) {
  attachFileToPlace(
    fileId: $fileId,
    placeId: $placeId,
  ) {
    ...FullPlace
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

const PLACE_CHANGE_BOOKMARK_STATUS = gql`
  mutation PlaceChangeBookmarkStatus($placeId: Int!, $value: Int!) {
    placeChangeBookmarkStatus(placeId: $placeId, value: $value) {
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

const SET_STAY = gql`
  mutation ( 
    $id: Int
    $lat: Float
    $lng: Float
    $stars: Int
    $date_visit: String
    $review: String
    $value: Int
 ) {
  setStayCheckIn(data: {
     id: $id,
     lat: $lat
     lng: $lng
     stars: $stars
     date_visit: $date_visit
     review: $review
     value: $value
  }) {
    id,
    place_id,
    created_ts,
    value,
  }
}
`;
// eslint-disable-next-line
const SET_STAY_HISTORY = gql` 
  mutation ( 
    $id: Int
    $value: Int
    $date_visit: String
 ) {
  setStayCheckIn(data: {
     id: $id,
     value: $value,
     date_visit: $date_visit
  }) {
    id,
    place_id,
    created_ts,
    value,
  }
}
`;

const REPLACE_STAY = gql`
mutation ReplaceStayCheckIn (
  $id: Int
  $replace_id: Int
  $lat: Float
  $lng: Float
  $date_visit: String
  $value: Int
  $first_ts: Int
) {
  replaceStayCheckIn(data: {
    id: $id
    replace_id: $replace_id
    lat: $lat
    lng: $lng
    date_visit: $date_visit
    value: $value,
    first_ts: $first_ts
  }) {
    ...placeHistory
  }
}
${placeHistory}
`;

const SEND_PLACE_IMAGE_LIKE = gql`
 mutation sendPlaceImageLike (
  $fileId: Int!
  $value: Int!
) {
  sendPlaceImageLike(
    fileId: $fileId
    value: $value
) {
    ...placeFileFull
  }
}
${placeFileFull}
`;


export default {
  ATTACH_FILE_TO_PLACE,
  SEND_PLACE_IMAGE_LIKE,
  SET_STAY,
  SET_STAY_HISTORY,
  REPLACE_STAY,
  PLACE_CHANGE_BOOKMARK_STATUS,
};
