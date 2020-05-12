import { compose, hoistStatics, withHandlers, withProps, branch, lifecycle, withState } from 'recompose';
import R from 'ramda';
import { Alert, Keyboard } from 'react-native';
import CalendarEvents from 'react-native-calendar-events';
import { connect } from 'react-redux';
import {
  withSetter,
  checkReadyForSubmit,
  withRefs,
  withTheme,
  withToggle,
  withCurrentLocation,
  withUploadPhoto,
  withPhotoSourceSelect,
  withCopilot
} from '@utils/enhancers';
import { date } from '@utils/helpers';
import { eventCategories, screens } from '@constants';
import CreateEditEvent from './CreateEditEvent';
import { isEmpty } from '../../utils/helpers/stringValidator';
import { eventsHocs, eventsOperations } from '../../modules/events';
import { persistOperations } from '../../store/persist';
import { placeHocs } from '../../modules/place';
import styles from './style';

const mapStateToProps = ({ persist }) => ({
  filters: persist.filters.spotList
});

const enhance = compose(
  connect(mapStateToProps, persistOperations),
  withCurrentLocation,
  placeHocs.queryGetPlaceList({ fetchPolicy: 'cache-and-network' }),
  eventsHocs.mutationSetEventImage(),
  eventsHocs.mutationUpdateEvent(),
  eventsHocs.mutationDeleteEvent(),
  withProps(({ getPlaceList }) => R.pick(
    ['placeList', 'loading', 'error', 'fetchMore', 'refetch', 'networkStatus'],
    getPlaceList
  )),
  withProps((props) => ({
    predefinePlaces: R.pathOr([], ['places'], props.placeList),
    isEdit: !!props.eventId
  })),
  branch(
    R.prop('isEdit'),
    compose(
      eventsHocs.queryGetEvent({ fetchPolicy: 'cache-and-network' }),
      withProps((props) => ({
        data: R.path(['getEvent', 'getEvent'], props),
        loading: R.path(['getEvent', 'loading'], props)
      })),
    ),
    compose(
      eventsHocs.queryGetDraftEvent({ fetchPolicy: 'network-only' }),
      withProps((props) => ({
        data: R.path(['getDraftEvent', 'getDraftEvent'], props),
        loading: R.path(['getDraftEvent', 'loading'], props)
      })),
    ),
  ),
  withState('calendars', 'setCalendars', []),
  withToggle('isOptionsModalVisible', 'setVisibleOptionsModal', 'toggleVisibleOptionsModal', false),
  withSetter('image', R.pathOr(null, ['data', 'image']), (el) => !!el),
  withUploadPhoto((props, data) => {
    const url = R.path(['file', 'filename'], data);
    eventsOperations.setEventImage({
      mutate: props.setEventImage,
      variables: {
        url,
        id: props.eventId || props.data.id
      }
    });
    props.onChangeImage(url);
  }, 'uploadPhoto'),
  withPhotoSourceSelect({ photoUploaderPropName: 'uploadPhoto' }),
  withSetter('selectedImage', null),
  withSetter('location', R.pathOr({ lng: 0.1, lat: 0.1 }, ['data', 'place_location'])),
  withSetter('utcOffset', R.pathOr(null, ['data', 'utc_offset'])),
  withSetter('eventStart', R.pathOr(null, ['data', 'event_start']), (el) => !!el),
  withSetter('address', R.pathOr('', ['data', 'address']), isEmpty),
  withSetter('title', R.pathOr('', ['data', 'title']), isEmpty),
  withSetter('description', R.pathOr('', ['data', 'description']), isEmpty),
  withSetter('category', R.pathOr(eventCategories[0].value, ['data', 'category_id']), R.is(Number)),
  withSetter('eventDate', R.pathOr('', ['data', 'event_date']), isEmpty),
  withSetter('eventTime', R.pathOr('', ['data', 'event_time']), isEmpty),
  withSetter('search', ''),

  withToggle('isVisibleTimePicker', 'setVisibleTimePicker', 'toggleVisibleTimePicker', false),
  withToggle('isVisibleAddressModal', 'setVisibleAddressModal', 'toggleVisibleAddressModal', false),

  checkReadyForSubmit(['title', 'description', 'category', 'eventTime', 'eventDate', 'address', 'image']),
  withRefs(),
  withHandlers({
    saveEvent: ({ title, address, description, eventDate, eventTime, utcOffset }) => () => {
      const timezoneOffsetOfEvent = date.timezoneOffsetOfEvent({ date: eventDate, time: eventTime, utcOffset });

      CalendarEvents.saveEvent(title, {
        title,
        startDate: timezoneOffsetOfEvent,
        endDate: timezoneOffsetOfEvent,
        notes: description,
        description,
        location: address
      });
    }
  }),
  withHandlers({
    onDeleteEvent: (props) => () => {
      eventsOperations.deleteEvent({
        mutate: props.deleteEvent,
        variables: {
          id: props.data.id
        },
        navigator: props.navigator
      });
    }
  }),
  lifecycle({
    componentDidUpdate(prevProps) {
      const { loading, data } = this.props;
      if (prevProps.loading !== loading && !loading) {
        this.props.setAddress(R.pathOr('', ['address'], data));
        this.props.setLocation(R.pathOr({ lng: 0.1, lat: 0.1 }, ['place_location'], data));
        this.props.setTitle(R.pathOr('', ['title'], data));
        this.props.setDescription(R.pathOr('', ['description'], data));
        this.props.setCategory(R.pathOr(eventCategories[0].value, ['category_id'], data));
        this.props.setEventDate(R.pathOr('', ['event_date'], data));
        this.props.setEventTime(R.pathOr('', ['event_time'], data));
        this.props.setImage(R.pathOr(null, ['image'], data));
        this.props.setUtcOffset(R.pathOr(null, ['utc_offset'], data));
        this.props.setEventStart(R.pathOr(null, ['event_start'], data));
      }
    }
  }),
  withTheme(styles),
  withCopilot(screens.CreateEditEvent)
);

export default hoistStatics(enhance)(CreateEditEvent);
