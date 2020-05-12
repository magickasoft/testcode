import gql from 'graphql-tag';
import { mprofile, mprofileFull } from './fragments';

const GET_PROFILE = gql`
query currentProfile ($id: Int!) {
  profile (id: $id){
    ...mprofileFull
  }
}
${mprofileFull}
`;

const GET_USERS = gql`
  query GetUsers {
    users {
      totalCount
      users {
        id
        mprofile {
          id
          photo
          fullName
          lastonline_ts
        }
      }
    }
  }
`;

const PROFILES = gql`
 query Profiles (
  $offset: Int = 0
  $limit: Int = 10
  $search: String
) {
    profiles(
      offset: $offset
      limit: $limit
      search: $search
    ) {
      totalCount
      profiles {
        ...mprofile
      }
    }
  }
${mprofile}
`;

export default {
  GET_PROFILE,
  GET_USERS,
  PROFILES,
};

