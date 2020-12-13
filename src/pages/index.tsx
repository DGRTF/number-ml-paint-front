import React from "react";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import store from '../store/store';
import Home from "./Home/Home";




const history = createBrowserHistory();

export default function Index() {
  return (
    <Router history={history}>
      <React.StrictMode>
        <Provider store={store}>
          <div className='index'>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
          </Switch>
            <Home />
          </div>
        </Provider>
      </React.StrictMode>
    </Router>
  );
}