import gql from 'graphql-tag';

import { messageFull, lastMessage } from './fragments';

const SUBSCRIBE_MESSAGE_CHANGED = gql`
  subscription MessageChanged($fromProfileId: Int!) {
    messageChanged(fromProfileId: $fromProfileId) {
      eventType
      message {
        ...messageFull
      }
    }
  }
${messageFull}
`;

const SUBSCRIBE_DIALOG_UPDATED = gql`
  subscription DialogUpdated {
    dialogUpdated {
      id
      lastMessage {
        ...lastMessage
      }
      interlocutor {
        fullName
        photo
        id
        lastonline_ts
      }
      unreadMessages
    }
  }
  ${lastMessage}
`;

const SUBSCRIBE_TYPING_STATUS_UPDATED = gql`
  subscription TypingStatusUpdated($fromProfileId: Int!) {
    typingStatusUpdated(fromProfileId: $fromProfileId) {
      fromProfileId
      toProfileId
    }
  }
`;

const SUBSCRIBE_MESSAGES_HAVE_BEEN_READ = gql`
  subscription MessagesHaveBeenRead($fromProfileId: Int!) {
    messagesHaveBeenRead(fromProfileId: $fromProfileId) {
      fromProfileId
      toMessageId
    }
  }
`;

export default {
  SUBSCRIBE_MESSAGE_CHANGED,
  SUBSCRIBE_DIALOG_UPDATED,
  SUBSCRIBE_TYPING_STATUS_UPDATED,
  SUBSCRIBE_MESSAGES_HAVE_BEEN_READ,
};
