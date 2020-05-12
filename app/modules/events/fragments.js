import gql from 'graphql-tag';
import { mprofileFull } from '../myProfile/fragments';
import { Location } from '../commonFragments';

const EventGoingStatus = gql`
  fragment EventGoingStatus on EventGoingStatus {
    id
    mprofile_id
    profile {
      ...mprofileFull
    }
    events_id
    value
    created_ts
    updated_ts
  }
  ${mprofileFull}
`;

const Event = gql`
  fragment Event on Event {
    id
    mprofile_id
    profile {
      ...mprofileFull
    }
    title
    category_id
    description
    city_title
    address
    status
    place_location {
      ...CommonLocation,
    }
    utc_offset
    event_date
    event_time
    image
    is_warning
    created_ts
    updated_ts
    geohash
    people {
      ...EventGoingStatus
    }
    myVisitStatus
  }
  ${mprofileFull}
  ${Location}
  ${EventGoingStatus}
`;

export { Event, EventGoingStatus };
