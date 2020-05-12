import R from 'ramda';

import { hoc } from '../../utils/helpers/graphQl';
import queries from './queries';
import mutations from './mutations';

const queryProfiles = hoc(queries.PROFILES, {
  name: 'profiles',
  options: props => ({
    variables: {
      search: R.pathOr(null, ['search'], props),
    },
  }),
});

const queryGetProfile = hoc(queries.GET_PROFILE, {
  name: 'profile',
  options: props => ({
    variables: {
      id: props.id || props.profileId,
    },
  }),
});

const mutationBlockUser = hoc(mutations.BLOCK_USER, {
  name: 'blockUser',
});

const mutationUnBlockUser = hoc(mutations.UNBLOCK_USER, {
  name: 'unblockUser',
});

export default {
  queryProfiles,
  queryGetProfile,
  mutationBlockUser,
  mutationUnBlockUser,
};
