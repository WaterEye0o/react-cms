import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import store from './redux';

ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
,
  document.getElementById('root')
);

serviceWorker.unregister();
