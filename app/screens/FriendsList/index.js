import { compose, hoistStatics, withHandlers, withProps, pure } from 'recompose';
import R from 'ramda';

import { screens } from '@constants';
import { withRootSpinner, withTheme } from '@utils/enhancers';
import { friendsHocs } from '../../modules/friends';
import { usersHocs } from '../../modules/users';
import FriendsList from './FriendsList';
import style from './style';


const enhancer = compose(
  friendsHocs.queryGetFriendsList({ fetchPolicy: 'cache-and-network' }),
  usersHocs.queryGetProfile({ fetchPolicy: 'cache-and-network' }),
  withProps(props => ({
    friends: R.pathOr([], ['getFriendsList', 'friendsList'], props),
    profile: R.path(['profile', 'profile'], props),
    loading: {
      friends: R.path(['getFriendsList', 'loading'], props),
      profile: R.path(['profile', 'loading'], props),
    },
  })),
  withHandlers({
    toProfile: props => (id) => () => {
      props.navigator.push(screens.Profile, {
        passProps: { id },
      });
    },
  }),
  withRootSpinner(R.either(
    R.both(R.path(['loading', 'friends']), R.propSatisfies(R.isEmpty, 'friends')),
    R.both(R.path(['loading', 'profile']), R.propSatisfies(R.isNil, 'profile')),
  )),
  pure,
  withTheme(style),
);

export default hoistStatics(enhancer)(FriendsList);
