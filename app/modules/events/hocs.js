import R from 'ramda';
import { hoc } from '../../utils/helpers/graphQl';
import mutations from './mutations';
import queries from './queries';
import { EVENTS_LIMIT } from './constants';

const queryGetEventsList = hoc(queries.GET_EVENTS_LIST, {
  name: 'getEventsList',
  options: (props) => ({
    variables: {
      limit: R.pathOr(EVENTS_LIMIT, ['limit'], props),
      offset: 0,
      categoryId: props.categoryId,
      dateStart: props.dateStart,
      dateEnd: props.dateEnd
    }
  })
});

const queryGetEvent = hoc(queries.GET_EVENT, {
  name: 'getEvent',
  options: (props) => ({
    variables: {
      id: props.eventId
    }
  })
});

const queryGetMyEvents = hoc(queries.GET_MY_EVENTS, {
  name: 'myEvents',
  options: (props) => ({
    variables: {
      limit: R.pathOr(EVENTS_LIMIT, ['limit'], props),
      offset: 0
    }
  })
});

const queryGetDraftEvent = hoc(queries.GET_DRAFT_EVENT, {
  name: 'getDraftEvent'
});

const mutationCreateEvent = hoc(mutations.CREATE_EVENT, {
  name: 'createEvent'
});

const mutationUpdateEvent = hoc(mutations.UPDATE_EVENT, {
  name: 'updateEvent'
});

const mutationDeleteEvent = hoc(mutations.DELETE_EVENT, {
  name: 'deleteEvent'
});

const mutationChangeEventGoingStatus = hoc(mutations.CHANGE_EVENT_GOING_STATUS, {
  name: 'changeEventGoingStatus'
});

const mutationSetEventImage = hoc(mutations.SET_EVENT_IMAGE, {
  name: 'setEventImage'
});

export default {
  queryGetEventsList,
  queryGetEvent,
  queryGetMyEvents,
  queryGetDraftEvent,
  mutationCreateEvent,
  mutationUpdateEvent,
  mutationDeleteEvent,
  mutationChangeEventGoingStatus,
  mutationSetEventImage
};
