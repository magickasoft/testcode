import R from 'ramda';
import { errors } from '@utils/helpers';
import queries from './queries';

const deleteEventFromMyEvents = errors.handleError((store, event) => {
  const eventsData = store.readQuery({ query: queries.GET_MY_EVENTS });
  const index = eventsData.myEvents.findIndex(R.propEq('id', event.id));
  if (index === -1) return;

  eventsData.myEvents.splice(index, 1);
  store.writeQuery({
    query: queries.GET_MY_EVENTS,
    data: eventsData
  });
}, 'Cannot remove event from my events');

const addEventToMyEvents = errors.handleError((store, event) => {
  const myEventsData = store.readQuery({ query: queries.GET_MY_EVENTS });
  myEventsData.myEvents.push(event);
  store.writeQuery({
    query: queries.GET_MY_EVENTS,
    data: myEventsData
  });
}, 'Cannot add to my events');

export { deleteEventFromMyEvents, addEventToMyEvents };
