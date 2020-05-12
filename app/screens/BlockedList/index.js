import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { friendsHocs } from '@modules/friends';
import { usersHocs, usersOperations } from '@modules/users';
import { withRootSpinner } from '@utils/enhancers';
import BlockedList from './BlockedList';

const enhancer = compose(
  friendsHocs.queryGetBlockedUsers({ fetchPolicy: 'cache-and-network' }),
  usersHocs.mutationUnBlockUser(),
  withProps(props => ({
    blockedUsers: R.pathOr([], ['getGetBlockedUsers', 'blockedUsers'], props),
    loading: R.path(['getGetBlockedUsers', 'loading'], props),
  })),
  withHandlers({
    onSwipeablePress: props => friend => index => {
      if (index === 0) {
        usersOperations.unblockUser({
          mutate: props.unblockUser,
          variables: {
            targetProfileId: friend.id,
          },
        });
      }
    },
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'blockedUsers'),
  )),
  pure,
);

export default hoistStatics(enhancer)(BlockedList);
