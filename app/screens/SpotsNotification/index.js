/* eslint-disable */
import {
  compose,
  hoistStatics,
  withState,
  withHandlers,
  withProps,
} from 'recompose';
import R from 'ramda';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { withSetter, withLoadingModal, withCurrentLocation, withTheme } from '@utils/enhancers';
import { placeHocs } from '@modules/place';
import { date } from '@utils/helpers'

import { isEmpty } from '../../utils/helpers/stringValidator';
import { spotOperations } from '../../store/spot';
import style from './style';
import SpotsNotification from './SpotsNotification';

const enhance = compose(
  connect(
    ({ spot: { isLoading } }) => ({ isLoading }),
    spotOperations,
  ),

  placeHocs.queryGetPlace(['place']),

  withState('rating', 'setRating', 0),
  withSetter('comment', ''),
  withSetter('location', {}, isEmpty),

  withLoadingModal.stateProp('isLoading'),

  withProps(({ getPlace }) =>
    R.pick(['place', 'loading', 'error', 'fetchMore'], getPlace)),

  withCurrentLocation,
  withHandlers({
    onAnswer: ({ setTabsState, answers }) => answer => {
      setTabsState([...answers, answer]);
    },
    onSubmit: ({
       currentLocation,
       rating,
       place,
       comment,
       setStay,
     }) => async () => {

      Keyboard.dismiss();

      setStay({
          id: +R.pathOr(0, ['id'], place),
          review: comment,
          stars: rating,
          value: 1,
          "date_visit": date.toFormat(new Date(), "yyyy-MM-dd"),
          lat: R.pathOr(null, ['latitude'], currentLocation),
          lng: R.pathOr(null, ['longitude'], currentLocation),
      });

    },
    onChangeRating: ({ setRating }) => rating => {
      setRating(rating);
    },
  }),
  withTheme(style),
);

export default hoistStatics(enhance)(SpotsNotification);
