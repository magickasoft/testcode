import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { friendsHocs, friendsOperations } from '@modules/friends';
import { usersHocs, usersOperations } from '@modules/users';
import { withRootSpinner } from '@utils/enhancers';
import IncomingRequests from './IncomingRequests';

const enhancer = compose(
  friendsHocs.queryGetIncomingFriendRequests({ fetchPolicy: 'network-only' }),
  friendsHocs.mutationBlockFriendRequest(),
  friendsHocs.mutationSendAcceptFriendRequest(),
  usersHocs.mutationBlockUser(),
  withProps(props => ({
    requests: R.pathOr([], ['getIncomingFriendRequests', 'incomingFriendRequests'], props),
    loading: R.path(['getIncomingFriendRequests', 'loading'], props),
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
    onAddFriend: ({ sendAcceptFriendRequest }) => friend => () => {
      friendsOperations.sendAcceptFriendRequest({
        mutate: sendAcceptFriendRequest,
        friendName: friend.fullName,
        variables: {
          targetProfileId: friend.id,
        },
      });
    },
    blockFriendRequest: ({ blockFriendRequest }) => friend => () => {
      friendsOperations.blockFriendRequest({
        mutate: blockFriendRequest,
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

export default hoistStatics(enhancer)(IncomingRequests);
