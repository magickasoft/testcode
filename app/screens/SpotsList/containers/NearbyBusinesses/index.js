import {
  compose,
  hoistStatics,
  withHandlers,
  withProps,
  getContext,
  shouldUpdate,
} from 'recompose';
import R from 'ramda';
import T from 'prop-types';

import { screens } from '../../../../constants';
import { placeHocs, placeOperations } from '../../../../modules/place';
import { withTheme, withCurrentLocation } from '../../../../utils/enhancers';
import s from './style';
import NearbyBusinesses from './NearbyBusinesses';

const enhance = compose(
  shouldUpdate((props, { tabIndex, currentTab }) => currentTab === tabIndex),
  getContext({ navigator: T.object }),
  withCurrentLocation,

  placeHocs.mutationPlaceChangeBookmarkStatus(),
  placeHocs.queryGetPlaceList({ fetchPolicy: 'network-only' }),
  withProps(({ getPlaceList }) =>
    R.pick(
      ['placeList', 'loading', 'error', 'fetchMore', 'refetch', 'networkStatus'],
      getPlaceList)
  ),
  withProps(({ placeList, networkStatus }) => ({
    places: R.pathOr([], ['places'], placeList),
    totalCount: R.pathOr([], ['totalCount'], placeList),
    loadingRefetch: networkStatus === 4,
  })),
  withHandlers({
    onGoToReview: props => (id, itemIndex) => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id, itemIndex },
        // options: {
        //   customTransition: {
        //     animations: [
        //       { type: 'sharedElement', fromId: 'placeitem1', toId: 'placeitem2',
        //         startDelay: 2000, springVelocity: 0.2, duration: 0.5 }
        //     ],
        //     duration: 0.8
        //   }
        // }
      });
    },
    onEndReached: props => () => {
      const placesLength = props.places.length;
      if (props.loading || props.totalCount === placesLength) return;
      placeOperations.fetchMorePlaces(props);
    },
    onRefresh: props => () => {
      props.refetch();
    },
    changeBookmarkStatus: props => (id, value) => {
      placeOperations.placeChangeBookmarkStatus({
        mutate: props.placeChangeBookmarkStatus,
        variables: {
          placeId: id,
          value,
        },
      });
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(NearbyBusinesses);
