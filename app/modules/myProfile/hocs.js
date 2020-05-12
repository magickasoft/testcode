import { hoc } from '../../utils/helpers/graphQl';
import mutations from './mutations';
import queries from './queries';

const queryGetMyProfiles = hoc(queries.GET_MY_PROFILES, {
  name: 'getMyProfiles'
});

const queryCurrentProfile = hoc(queries.GET_MY_CURRENT_PROFILE, {
  name: 'currentProfile'
});

const queryGetMyProfileVisitorsHistory = hoc(
  queries.GET_MY_PROFILE_VISITORS_HISTORY, {
    name: 'profileVisitsHistory',
    options: () => ({
      variables: {
        limit: 10,
        offset: 0
      }
    })
  }
);

const mutationSetProfileImage = hoc(mutations.SET_PROFILE_IMAGE, {
  name: 'mutationSetProfileImage'
});

const mutationCreateProfile = hoc(mutations.CREATE_PROFILE, {
  name: 'mutationCreateProfile'
});
const mutationEditProfile = hoc(mutations.EDIT_PROFILE, {
  name: 'mutationEditProfile'
});

export default {
  queryCurrentProfile,
  queryGetMyProfiles,
  queryGetMyProfileVisitorsHistory,
  mutationSetProfileImage,
  mutationEditProfile,
  mutationCreateProfile
};
