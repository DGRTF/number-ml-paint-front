import React from "react";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.scss';
<<<<<<< HEAD

import store from '../store/store';
import Home from "./Home/Home";
=======
import Home from "../components/Home/Home";
>>>>>>> 8732a83001ddd044e1b29359dacf35c6f56d9bd8




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