import gql from 'graphql-tag';
import { Location } from '../commonFragments';

const FullPlace = gql`
  fragment FullPlace on Place {
    id
    title
    category_id
    description
    utc_offset
    address
    rating
    website
    phone
    email
    location {
      ...CommonLocation,
    }
    price_category
    isAddedToBookmark
    short_message
    tags
  }
 ${Location}
`;

const PlaceMin = gql`
  fragment PlaceMin on Place {
    id
    title
    files {
      id
      filename
      type
    }
  }
`;

const placeFileFull = gql`
  fragment placeFileFull on PlaceFile {
    id
    filename
    previewUrl
    type
    ts
    likes
    isLiked
    mprofile {
      id
      lastname
      name
      photo
      lastonline_ts
    }
  }
`;

const placeHistory = gql`
  fragment placeHistory on PlaceHistory {
    id
    place_id
    title
    date
    week
    isVisited
    short_geohash
    lng
    lat
    first_ts
  }
`;

export {
  FullPlace,
  PlaceMin,
  placeHistory,
  placeFileFull,
};
