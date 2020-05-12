import gql from 'graphql-tag';

const REPORT = gql`
mutation Report ( 
    $item_id: Int!
    $alert_type: Int!
    $item_type: Int!
    $note: String
 ) {
 report(
    item_id: $item_id,
    alert_type: $alert_type,
    item_type: $item_type,
    note: $note
  )
}
`;

const GDPR_DATA_REQUEST = gql`
  mutation {
    requestGDPRData
  }
`;

export default {
  REPORT,
  GDPR_DATA_REQUEST
};
