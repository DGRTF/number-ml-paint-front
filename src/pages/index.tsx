import React from "react";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import store from '../store/store';
// import Home from "../components/Home/Home";

import Home from "../components/Home/Home";




const history = createBrowserHistory();

export default function Index() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.StrictMode>
          <div className='index'>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/about" component={About} /> */}
            </Switch>
            {/* <Home /> */}
          </div>
        </React.StrictMode>
      </Router>
    </Provider>
  );
}