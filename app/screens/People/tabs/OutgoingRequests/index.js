import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { friendsHocs, friendsOperations } from '@modules/friends';
import { usersHocs, usersOperations } from '@modules/users';
import { withRootSpinner } from '@utils/enhancers';
import OutgoingRequests from './OutgoingRequests';

const enhancer = compose(
  friendsHocs.queryGetOutgoingFriendRequests({ fetchPolicy: 'network-only' }),
  friendsHocs.mutationCancelFriendRequest(),
  usersHocs.mutationBlockUser(),
  withProps(props => ({
    requests: R.pathOr([], ['getOutgoingFriendRequests', 'outgoingFriendRequests'], props),
    loading: R.path(['getOutgoingFriendRequests', 'loading'], props),
  })),
  withHandlers({
    onSwipeablePress: props => friend => index => {
      if (index === 0) {
        usersOperations.blockUser({
          mutate: props.blockUser,
          variables: {
            targetProfileId: friend.id,
          },
        });
      }
    },
    cancelFriendRequest: ({ cancelFriendRequest }) => friend => () => {
      friendsOperations.cancelFriendRequest({
        mutate: cancelFriendRequest,
        variables: {
          targetProfileId: friend.id,
        },
      });
    },
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'requests'),
  )),
  pure,
);

export default hoistStatics(enhancer)(OutgoingRequests);
