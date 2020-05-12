import gql from 'graphql-tag';

const Location = gql`
    fragment CommonLocation on Location {
      latitude
      longitude
    }
`;

export { Location };
