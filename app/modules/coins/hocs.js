import { hoc } from '../../utils/helpers/graphQl';
import queries from './queries';

const queryGetMyCoins = hoc(queries.GET_MY_COINS, {
  name: 'myCoins'
});

const queryCoinsHistory = hoc(queries.GET_COINS_HISTORY, {
  name: 'coinsHistory'
});

export default {
  queryGetMyCoins,
  queryCoinsHistory
};
