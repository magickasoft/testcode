import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { screens } from '../../../../constants';
import { friendsHocs, friendsOperations } from '../../../../modules/friends';
import { usersHocs, usersOperations } from '../../../../modules/users';
import { withRootSpinner } from '../../../../utils/enhancers';
import FriendsList from './FriendsList';

const enhancer = compose(
  friendsHocs.queryGetMyFriends({ fetchPolicy: 'network-only' }),
  friendsHocs.mutationRemoveFriend(),
  usersHocs.mutationBlockUser(),
  withProps(props => ({
    friends: R.pathOr([], ['getMyFriends', 'myFriendsList'], props),
    loading: R.path(['getMyFriends', 'loading'], props),
  })),
  withHandlers({
    toProfile: props => (id) => () => {
      props.navigator.push(screens.Profile, {
        passProps: { id },
      });
    },
    onSwipeablePress: props => friend => index => {
      if (index === 0) {
        usersOperations.blockUser({
          mutate: props.blockUser,
          variables: {
            targetProfileId: friend.id,
          },
        });
      } else if (index === 1) {
        friendsOperations.removeFriend({
          mutate: props.removeFriend,
          friendName: friend.fullName,
          variables: {
            targetProfileId: friend.id,
          },
        });
      }
    },
  }),
  withRootSpinner(R.both(
    R.prop('loading'),
    R.propSatisfies(R.isEmpty, 'friends'),
  )),
  pure,
);

export default hoistStatics(enhancer)(FriendsList);
