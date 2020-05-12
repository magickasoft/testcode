import React from 'react';
import { connect, Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import RNcodePush from 'react-native-code-push';
import { compose, hoistStatics } from 'recompose';
import R from 'ramda';

import { errorsList } from '../../constants';
import { errOperations } from '../../store/error';
import withAlert from './withAlert';
import withSetTheme from './withSetTheme';
import { codePush } from '../../services';
import { withNavigationHelper } from '../../navigation';
import { appOperations } from '../../store/app';

const mapStateToProps = ({ error, app }) => ({
  error: error.user || error.auth || error.graphql || error.spot,
  network: error.network,
  message: app.message
});

const enhancer = compose(
  RNcodePush(codePush.defaultConfig),
  connect(mapStateToProps, { ...errOperations, ...appOperations }),
  withSetTheme,
  withNavigationHelper,
  withAlert(({
    message, appSetSuccessMessage
  }) => ({
    isVisible: !!message,
    message,
    onChangeVisible: appSetSuccessMessage,
    delay: 3000,
    type: 'success'
  })),
  withAlert(({ network, errResetAll }) => ({
    isVisible: !!network,
    message: 'No internet conection',
    onChangeVisible: errResetAll,
    delay: null,
    type: 'noNetwork'
  })),
  withAlert(({ error, errResetAll, navigator }) => {
    console.log('withAlert:: ', error, navigator.isCurrentScreen);
    return ({
      isVisible: !!error && !errorsList[R.pathOr(null, ['message'], error)],
      message: error && error.toString(),
      onChangeVisible: errResetAll,
      delay: 3000,
      type: 'err'
    });
  }),
);

export default (Screen, client, store, bugsnag) => {
  const WrappedComponent = hoistStatics(enhancer)(Screen);

  const withProviders = Component => props => ( // eslint-disable-line
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component
          bugsnag={bugsnag}
          {...props}
        />
      </ApolloProvider>
    </Provider>
  );

  return hoistStatics(withProviders)(WrappedComponent);
};
