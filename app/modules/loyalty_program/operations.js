import { Alert } from 'react-native';
import R from 'ramda';
// import {
//   addRequestToMyLoyaltyRequests
// } from './storeOperations';

export const fetchMoreRequestForLoyaltyProgram = ({ fetchMore, data, type }) => {
  fetchMore({
    variables: {
      offset: data.length
    },
    updateQuery: (previousResult, { fetchMoreResult }) => ({
      ...previousResult,
      ...fetchMoreResult,
      [type]: {
        ...previousResult,
        ...fetchMoreResult[type],
        requests: [
          ...data,
          ...fetchMoreResult[type].requests
        ]
      }
    })
  });
};

export const requestLoyaltyPointsViaReceipt = ({ mutate, variables }) => {
  mutate({
    variables,
    update: (store, response) => {
      const request = R.path(['data', 'requestLoyaltyPointsViaReceipt'], response);
      if (!request) return;
      Alert.alert('', 'Code is activated');
      // addRequestToMyLoyaltyRequests(store, request);
    }
  });
};

export const giveLoyaltyPointsViaReceipt = ({ mutate, variables }) => {
  mutate({
    variables,
    update: (store, response) => {
      const request = R.path(['data', 'giveLoyaltyPointsViaReceipt'], response);
      if (!request) return;
      Alert.alert('', 'Activation Complete!');
    }
  });
};
