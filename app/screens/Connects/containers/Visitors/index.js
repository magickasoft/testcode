import {
  compose, getContext,
  hoistStatics,
  withHandlers,
  withProps,
} from 'recompose';
import R from 'ramda';
import T from 'prop-types';

import Visitors from './Visitors';
import { myProfileHocs, myProfileOperations } from '../../../../modules/myProfile';
import { screens } from '../../../../constants';
import { withTheme } from '../../../../utils/enhancers';
import style from './style';

const enhance = compose(
  getContext({ navigator: T.object }),
  myProfileHocs.queryGetMyProfileVisitorsHistory({
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  }),
  withProps(({ profileVisitsHistory }) => ({
    visitorsWithProfiles: R.pipe(
      R.pathOr([], ['profileVisitsHistory', 'visits']),
      R.filter(R.prop('visitor')),
    )(profileVisitsHistory),
    visitors: R.pathOr([], ['profileVisitsHistory', 'visits'], profileVisitsHistory),
    totalCount: R.pathOr(0, ['profileVisitsHistory', 'totalCount'], profileVisitsHistory),
    isLoading: {
      visitors: R.pathOr(false, ['loading'], profileVisitsHistory),
      visitorsRefetch: profileVisitsHistory.networkStatus === 4,
    },
  })),
  withHandlers({
    onEndReached: props => () => {
      const { length } = props.visitors;
      if (
        props.isLoading.visitors
        || props.isLoading.visitorsRefetch
        || props.totalCount === length
      ) return;

      myProfileOperations.fetchMoreProfilesVisitors({
        fetchMore: props.profileVisitsHistory.fetchMore,
        visitors: props.visitors,
      });
    },
    onRefresh: props => () => {
      props.profileVisitsHistory.refetch();
    },
    onGoToProfile: props => id => {
      props.navigator.push(screens.Profile, { passProps: { id } });
    },
  }),
  withTheme(style),
);

export default hoistStatics(enhance)(Visitors);

