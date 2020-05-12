import gql from 'graphql-tag';
import { mprofile, mprofileFull } from './fragments';

const GET_MY_CURRENT_PROFILE = gql`
query currentProfile {
  currentProfile {
    ...mprofileFull
  }
}
${mprofileFull}
`;

const GET_MY_PROFILES = gql`
query MyProfiles{
  myProfiles {
    ...mprofileFull
  }
}
${mprofileFull}
`;

const GET_MY_PROFILE_VISITORS_HISTORY = gql`
query profileVisitsHistory($limit:  Int, $offset:  Int ) {
  profileVisitsHistory(limit: $limit, offset: $offset) {
    visits {
      visitor {
        ...mprofile
      }
      timestamp
    }
    totalCount
  }
}
${mprofile}
`;

export default {
  GET_MY_CURRENT_PROFILE,
  GET_MY_PROFILE_VISITORS_HISTORY,
  GET_MY_PROFILES
};
