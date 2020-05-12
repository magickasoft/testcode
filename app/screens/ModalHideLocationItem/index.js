/* eslint-disable */
import {
  compose,
  withProps,
  withHandlers,
  hoistStatics,
} from 'recompose';
import R from 'ramda';

import ModalHideLocationItem from './ModalHideLocationItem';
import { screens, filter, ckeckIn } from '../../constants';
import { placeHocs, placeOperations } from '../../modules/place';

const enhance = compose(
  placeHocs.queryGetPlaceList(props => ({
    fetchPolicy: 'network-only',
    variables: {
      category_id: [1, 2, 3, 4, 5, 6, 7, 8],
      limit: 4,
      sortBy: filter.sortBy.CLOSEST,
      currentLocation: R.pick(['lat', 'lng'], props.item),
    },
  })),
  placeHocs.mutationReplaceStay(),
  placeHocs.mutationSetStayHistory(),

  withProps(({ getPlaceList }) => {
    const places = R.pathOr([], ['placeList', 'places'], getPlaceList);
    const newArray = [...places];
    newArray.shift();

    return ({ places: newArray });
  }),
  withHandlers({
    onGoToMorePlaces: props => async () => {
      await props.navigator.push(screens.PlacesNearList, {
        passProps: R.pick(['item'], props),
      });
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
    onRemoveFromTimeLine: ({ item, setStayHistory, navigator }) => () => {
      placeOperations.removeFromTimeLine({
        mutate: setStayHistory,
        variables: {
          id: R.prop('place_id', item),
          "date_visit": R.prop('date', item),
          value: ckeckIn.IS_REMOVED,
        },
        item,
      });
      navigator.dismissModal();
    },
    onDontCheckIn: ({ item, setStayHistory, navigator }) => () => {
      placeOperations.setStayHistory({
        mutate: setStayHistory,
        variables: {
          id: R.prop('place_id', item),
          "date_visit": R.prop('date', item),
          value: ckeckIn.I_WASNT_HERE,
        },
        item,
      });
      navigator.dismissModal();
    },
    onClose: props => () => {
      props.navigator.dismissModal();
    },
  }),
);

export default hoistStatics(enhance)(ModalHideLocationItem);
