import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Index from './pages/index';
import store from './store/store';
import './App.scss';
import './fonts/Montserrat/material-icons.scss';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('root'),
);
