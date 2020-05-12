import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
} from 'recompose';
import R from 'ramda';

import Users from './Users';
import { withSetter, withTheme } from '../../utils/enhancers';
import { usersHocs, usersOperations } from '../../modules/users';
import { screens } from '../../constants';
import style from './styles';

const enhance = compose(
  withSetter('search'),
  usersHocs.queryProfiles({
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  }),
  withProps(({ profiles }) => ({
    users: R.pathOr([], ['profiles', 'profiles'], profiles),
    totalCount: R.pathOr([], ['profiles', 'totalCount'], profiles),
    isLoading: {
      users: R.pathOr(false, ['loading'], profiles),
      usersRefetch: profiles.networkStatus === 4,
    },
  })),
  withHandlers({
    onGoToChat: props => (id) => {
      props.navigator.push(screens.Dialog, {
        passProps: {
          interlocutorId: id,
        },
      });
    },
    onEndReached: props => () => {
      const { length } = props.users;
      if (
        props.isLoading.users
        || props.isLoading.usersRefetch
        || props.totalCount === length
      ) return;

      usersOperations.fetchMoreProfiles({
        fetchMore: props.profiles.fetchMore,
        profiles: props.users,
      });
    },
    onRefresh: props => () => {
      props.profiles.refetch();
    },
  }),
  withTheme(style),
);

export default hoistStatics(enhance)(Users);

