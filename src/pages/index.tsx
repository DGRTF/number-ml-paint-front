import React, { Suspense } from "react";
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import './index.scss';

import store from '../store/store';

const Home = React.lazy(() => import('./Home/Home'));
const PersonalAccount = React.lazy(() => import('./PersonalAccount/PersonalAccount'));




const history = createBrowserHistory();

export default function Index() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <React.StrictMode>
          <div className='index'>
            <Switch>
              <Suspense fallback={''}>
              <Route exact path="/" component={Home} />
              <Route path="/personal" component={PersonalAccount} />
              </Suspense>
            </Switch>
          </div>
        </React.StrictMode>
      </Router>
    </Provider>
  );
}
