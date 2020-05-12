import gql from 'graphql-tag';

import { messageFull } from './fragments';

const SEND_MESSAGE = gql`
  mutation SendMessage(
    $toProfileId: Int!
    $message: String
    $location: LocationInput
    $requestLocation: Boolean
    $photo: String
  ) {
    sendMessage(
      toProfileId: $toProfileId
      message: $message
      location: $location
      requestLocation: $requestLocation
      photo: $photo
    ) {
      ...messageFull
    }
  }
${messageFull}
`;

const ANSWER_LOCATION_REQUEST = gql`
  mutation AnswerGeolocationRequest($messageId: Int!, $isAccepted: Boolean!) {
    answerGeolocationRequest(messageId: $messageId, isAccepted: $isAccepted) {
      ...messageFull
    }
  }
${messageFull}
`;

const REMOVE_DIALOG = gql`
  mutation RemoveDialog($withProfileId: Int!){
    removeDialog(withProfileId: $withProfileId) {
      dialogId
    }
  }
`;

const UPDATE_TYPING_INDICATOR = gql`
  mutation UpdateTypingIndicator($toProfileId: Int!) {
    updateTypingStatus(toProfileId: $toProfileId) {
      toProfileId
    }
  }
`;

const MARK_MESSAGE_AS_READ = gql`
  mutation MarkMessageAsRead($toProfileId: Int!, $messageId: Int!) {
    markMessageAsRead(toProfileId: $toProfileId, messageId: $messageId)
  }
`;

const TOGGLE_INCOMING_MESSAGES_BLOCK = gql`
  mutation ToggleIncomingMessagesBlock {
    toggleIncomingMessagesBlock {
      id
      isIncomingMessagesBlocked
    }
  }
`;

export default {
  SEND_MESSAGE,
  ANSWER_LOCATION_REQUEST,
  REMOVE_DIALOG,
  UPDATE_TYPING_INDICATOR,
  MARK_MESSAGE_AS_READ,
  TOGGLE_INCOMING_MESSAGES_BLOCK,
};
