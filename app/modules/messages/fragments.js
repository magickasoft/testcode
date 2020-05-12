import gql from 'graphql-tag';

export const messageFull = gql`
  fragment messageFull on message {
    id
    message
    mprofile_id_from
    mprofile_id_to
    created_ts
    mprofile {
      id
      fullName
      photo
      lastonline_ts
    }
    location {
      latitude
      longitude
    }
    locationRequest {
      responded
      isAccepted
    }
    photo
    is_read
    albumAccess
  }
`;

export const lastMessage = gql`
  fragment lastMessage on message {
    id
    mprofile_id_to
    mprofile_id_from
    message
    location {
      latitude
    }
    locationRequest {
      responded
    }
    photo
    created_ts
    mprofile {
      fullName
      photo
      id
      lastonline_ts
    }
    is_read
    albumAccess
  }
`;
