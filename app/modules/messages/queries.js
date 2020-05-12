import gql from 'graphql-tag';
import { messageFull, lastMessage } from './fragments';

const GET_DIALOG = gql`
 query GetDialog($target_profile_id: Int!, $offset: Int!, $limit: Int!) {
    dialog(
      target_profile_id: $target_profile_id
      offset: $offset
      limit: $limit
    ) {
      totalCount
      offset
      limit
      messages {
        ...messageFull
      }
      interlocutor {
        id
        fullName
        photo
        lastonline_ts
        vipSettings
        vip_until
      }
    }
  }
${messageFull}
`;

const GET_DIALOGS = gql`
  query GetDialogs {
    dialogList {
      id
      lastMessage {
        ...lastMessage
      }
      interlocutor {
        fullName
        photo
        id
        lastonline_ts
        vipSettings
        vip_until
      }
      unreadMessages
    }
  }
  ${lastMessage}
`;

const GET_INCOMING_MESSAGES_BLOCK_STATUS = gql`
  query IncomingMessagesBlockStatus {
    incomingMessagesBlockStatus {
      id
      isIncomingMessagesBlocked
    }
  }
`;

export default {
  GET_DIALOG,
  GET_DIALOGS,
  GET_INCOMING_MESSAGES_BLOCK_STATUS,
};

