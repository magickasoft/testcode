import { Alert } from 'react-native';
import R from 'ramda';
import {
  deleteEventFromMyEvents,
  addEventToMyEvents
} from './storeOperations';

const fetchMoreEvents = ({ fetchMore, data, type }) => {
  fetchMore({
    variables: {
      offset: data.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      ...previousResult,
      ...fetchMoreResult,
      [type]: {
        ...previousResult,
        ...fetchMoreResult[type],
        events: [
          ...data,
          ...fetchMoreResult[type].events
        ]
      }
    })
  });
};

const deleteEvent = ({ mutate, variables, navigator }) => {
  const onPress = () => {
    mutate({
      variables,
      update: (store, response) => {
        const event = R.path(['data', 'deleteEvent'], response);
        if (!event) return;
        deleteEventFromMyEvents(store, event);
        navigator.pop();
      }
    });
  };
  Alert.alert('Delete Event', 'Are you sure you want to delete this event?', [
    { text: 'Yes', onPress },
    { text: 'Cancel' }
  ]);
};

const updateEvent = ({ mutate, variables }) => {
  mutate({ variables });
};

const createEvent = ({ mutate, variables }) => {
  mutate({
    variables,
    update: (store, response) => {
      const event = R.path(['data', 'createEvent'], response);
      if (!event) return;
      addEventToMyEvents(store, event);
    }
  });
};

const setEventImage = ({ mutate, variables }) => {
  mutate({ variables });
};

export default {
  fetchMoreEvents,
  deleteEvent,
  updateEvent,
  createEvent,
  setEventImage
};
