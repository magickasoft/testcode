import gql from 'graphql-tag';

export const profileRelation = gql`
  fragment profileRelation on ProfileRelation {
    status
    blockStatus
    isFriends
    isBlockedByUser
    isUserBlocked
    availableActions
  }
`;
