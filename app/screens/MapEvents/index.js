import {
  branch,
  compose,
  hoistStatics,
  withProps,
  withHandlers,
  defaultProps
} from 'recompose';
import R from 'ramda';
import MapScreen from './MapScreen';
import { eventsHocs } from '../../modules/events';
import { withTheme, withCurrentLocation } from '../../utils/enhancers';
import { screens } from '../../constants';
import s from './style';

const defValues = {
  loading: false,
  error: undefined
};

const enhance = compose(
  defaultProps({ limit: 50 }),
  branch(R.prop('eventId'), eventsHocs.queryGetEvent({ fetchPolicy: 'network-only' })),
  withCurrentLocation,
  withProps(({ getEvent = defValues }) => ({
    initialLocation: R.pathOr(null, ['getEvent', 'place_location'], getEvent)
  })),
  eventsHocs.queryGetEventsList({ fetchPolicy: 'network-only' }),
  withProps(({ getEvent = defValues, getEventsList = defValues }) => ({
    isLoading: getEvent.loading || getEventsList.loading,
    error: getEvent.error || getEventsList.error,
    eventsLocations: R.pathOr([], ['getEventsList', 'events'], getEventsList)
  })),
  withHandlers({
    onGoToEvent: (props) => (eventId) => {
      if (eventId) {
        props.navigator.push(screens.Event, {
          passProps: { eventId }
        });
      }
    }
  }),
  withTheme(s),
  withProps(console.log),
);

export default hoistStatics(enhance)(MapScreen);
