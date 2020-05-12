/* eslint-disable */
import React from 'react';
import {
  compose,
  hoistStatics,
  withHandlers, withProps,
} from 'recompose';
import R from 'ramda';

import PlacesNearList from './PlacesNearList';
import {
  withSetter,
  withTheme,
} from '../../utils/enhancers';
import s from './style';
import { placeHocs, placeOperations } from '../../modules/place';
import { screens, filter, ckeckIn } from '../../constants';

const enhance = compose(
  withSetter('search'),
  placeHocs.queryGetPlaceList(props => ({
    fetchPolicy: 'network-only',
    variables: {
      category_id: [1, 2, 3, 4, 5, 6, 7, 8],
      title: R.pathOr('', ['search'], props),
      limit: 15,
      sortBy: filter.sortBy.CLOSEST,
      currentLocation: R.pick(['lat', 'lng'], props.item),
    },
  })),
  placeHocs.mutationReplaceStay(),
  withProps(({ getPlaceList }) =>
    R.pick(
      ['placeList', 'loading', 'error', 'fetchMore', 'refetch', 'networkStatus'],
      getPlaceList)
  ),
  withProps(({ placeList, networkStatus }) => {
    const places = R.pathOr([], ['places'], placeList);
    const newArray = [...places];
    newArray.shift();

    return ({
      places: newArray,
      totalCount: R.pathOr([], ['totalCount'], placeList),
      loadingRefetch: networkStatus === 4,
    })
  }),
  withHandlers({
    onGoToReview: props => (id, itemIndex) => {
      props.navigator.push(screens.SpotReview, {
        passProps: { id, itemIndex }
      });
    },
    onEndReached: props => () => {
      const placesLength = props.places.length;
      if(props.loading || props.totalCount === placesLength) return;
      placeOperations.fetchMorePlaces(props);
    },
    onRefresh: props => () => {
      props.refetch();
    },
  }),

  withHandlers({
    onOpenFilter: props => () => {
      props.drawerRef && props.drawerRef.openDrawer();
    },
    onPressItem: props => newItem => {
      placeOperations.replaceStay({
        mutate: props.replaceStay,
        variables: {
          id: R.prop('id', newItem),
          replace_id: R.prop('place_id', props.item) ,
          "date_visit": R.prop('date', props.item),
          "first_ts": R.prop('first_ts', props.item),
          value: ckeckIn.I_WAS_HERE,
          lat: R.path(['location', 'latitude'], newItem),
          lng: R.path(['location', 'longitude'], newItem),
        },
        prevHistoryItem: props.item,
        placeItem: newItem,
      });
      props.navigator.dismissModal();
    },
  }),
  withTheme(s),
);

export default hoistStatics(enhance)(PlacesNearList);
