import gql from 'graphql-tag';

const GET_MY_COINS = gql`
  query MyCoins {
    myCoins
  }
`;

const GET_COINS_HISTORY = gql`
  query CoinsHistory {
    coinsHistory {
      id
      coins
      type_action
    }
  }
`;

export default {
  GET_MY_COINS,
  GET_COINS_HISTORY
};
