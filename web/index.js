import Debug from 'debug';
import WebFont from 'webfontloader';
import React from 'react';
import ReactDOM from 'react-dom';
import errorHandler from 'utils/error';
import { loadConfigAction } from 'modules/config/config-actions';
import { history } from 'modules/router';
import { createApplicationStore } from 'modules/store';

import configURL from '../public/config.json';
import App from './App';

import 'styles/index.scss';
import 'styles/index.less';

errorHandler.init();

Debug.enable('*,-sockjs-client:*');

const store = createApplicationStore();

store.dispatch(loadConfigAction(configURL));

WebFont.load({
  google: {
    families: ['Source Sans Pro:300,400,500,600,700', 'Material Icons']
  }
});

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'));
