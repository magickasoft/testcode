import gql from 'graphql-tag';
import { Event } from './fragments';

const CREATE_EVENT = gql`
  mutation CreateEvent ($input: createEventInput!) {
    createEvent(input: $input) {
      ...Event
    }
  }
  ${Event}
`;

const UPDATE_EVENT = gql`
  mutation UpdateEvent ($id: Int!, $input: updateEventInput!) {
    updateEvent(id: $id, input: $input) {
      ...Event
    }
  }
  ${Event}
`;

const DELETE_EVENT = gql`
  mutation DeleteEvent ($id: Int!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

const CHANGE_EVENT_GOING_STATUS = gql`
  mutation ChangeEventGoingStatus ($eventId: Int!, $status: Int!) {
    changeEventGoingStatus(eventId: $eventId, status: $status) {
      ...Event
    }
  }
  ${Event}
`;

const SET_EVENT_IMAGE = gql`
  mutation SetEventImage ($id: Int!, $url: String!) {
    setEventImage(id: $id, url: $url) {
      ...Event
    }
  }
  ${Event}
`;

export default {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  CHANGE_EVENT_GOING_STATUS,
  SET_EVENT_IMAGE
};
