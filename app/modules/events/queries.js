import gql from 'graphql-tag';
import { Event } from './fragments';

const GET_EVENT = gql`
  query GetEvent ($id: Int!) {
    getEvent (id: $id){
      ...Event
    }
  }
  ${Event}
`;

const GET_MY_EVENTS = gql`
  query MyEvents($limit: Int, $offset: Int ) {
    myEvents(
      limit: $limit,
      offset: $offset,
    ) {
      events {
        ...Event
      }
      totalCount
    }
  }
  ${Event}
`;

const GET_EVENTS_LIST = gql`
  query GetEventsList($limit: Int, $offset: Int, $categoryId: Int, $dateStart: Date, $dateEnd: Date ) {
    getEventsList(
      limit: $limit,
      offset: $offset,
      categoryId: $categoryId,
      dateStart: $dateStart,
      dateEnd: $dateEnd
    ) {
      events {
        ...Event
      }
      totalCount
    }
  }
  ${Event}
`;

const GET_DRAFT_EVENT = gql`
  query GetDraftEvent {
    getDraftEvent {
      ...Event
    }
  }
  ${Event}
`;

export default {
  GET_EVENT,
  GET_MY_EVENTS,
  GET_EVENTS_LIST,
  GET_DRAFT_EVENT
};
