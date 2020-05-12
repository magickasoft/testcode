import Config from 'react-native-config';
import { ApolloClient } from 'apollo-client';
import { from, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { AsyncStorage } from 'react-native';
import { persistCache } from 'apollo-cache-persist';
import R from 'ramda';

import { tokens } from '../services';
import { errOperations } from '../store/error';
import { getHeaders } from '../utils/headers';
import { GraphQLError } from '../utils/error';
import { store } from '../store';

// const GRAPHQL_URI_HTTP = 'http://192.168.31.181:5000/graphql';
// const GRAPHQL_URI_HTTP = 'http://localhost:5000/graphql';
const GRAPHQL_URI_HTTP = Config.BASE_URL + Config.END_POINT_GRAPHQL;
const GRAPHQL_URI_WS = GRAPHQL_URI_HTTP.replace('http', 'ws');

Object.setPrototypeOf =
  Object.setPrototypeOf ||
  function (obj, proto) { // eslint-disable-line
    obj.__proto__ = proto; // eslint-disable-line
    return obj;
  };

const httpLink = new HttpLink({
  uri: GRAPHQL_URI_HTTP,
  // credentials: 'same-origin',
});

const authLink = new setContext(async () => { // eslint-disable-line
  const [
    AUTH_TOKEN,
    ID_PROFILE,
  ] = await tokens.getAll();

  const config = {};

  config.headers = getHeaders({ AUTH_TOKEN, ID_PROFILE });

  return config;
});

const dispatchError = err => store.dispatch(errOperations.errSetGraphql(err));

const errorLink = onError(({
  operation, networkError, graphQLErrors,
}) => {
  if (networkError && networkError.statusCode === 401) {
    // store.dispatch(authOperations.onSignOut());
    dispatchError(new GraphQLError(graphQLErrors[0]));
  } else if (R.prop('name', networkError) && !graphQLErrors) {
    console.log(`[Network error]: ${networkError}, operation ${operation.operationName}`);
    store.dispatch(errOperations.errSetNetwork(networkError));
  } else if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
    dispatchError(new GraphQLError(graphQLErrors[0]));
  }
});

const regularLink = from([authLink, errorLink, httpLink]);

const client = new SubscriptionClient(GRAPHQL_URI_WS, {
  reconnect: true,
  connectionParams: async () => {
    const [
      AUTH_TOKEN,
      ID_PROFILE,
    ] = await tokens.getAll();

    return {
      Authorization: AUTH_TOKEN,
      profileId: ID_PROFILE,
    };
  },
});

const wsLink = new WebSocketLink(client);

client.onReconnected(() => {
  store.dispatch(errOperations.errSetNetwork(null));
});
client.onConnected(() => {
  store.dispatch(errOperations.errSetNetwork(null));
});

const isSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(({ kind, operation }) =>
    kind === 'OperationDefinition' && operation === 'subscription');

const link = split(
  isSubscriptionOperation,
  wsLink,
  regularLink,
);

// TODO: detail learn
const cache = new InMemoryCache();

persistCache({
  cache,
  storage: AsyncStorage,
});

export const closeWsConnection = () => {
  // it will close connection, and because of params (false, false) will create it again with new params
  // https://github.com/apollographql/subscriptions-transport-ws/blob/master/src/client.ts#L152
  // https://github.com/apollographql/subscriptions-transport-ws/issues/171
  wsLink.subscriptionClient.close(false, false);
};

// TODO: detail learn
export default new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
  dataIdFromObject: object => object.id,
  // queryDeduplication: true,
});
