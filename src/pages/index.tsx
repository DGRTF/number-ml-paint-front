import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import './index.scss';
import { stateType } from '../store/store';

const Home = React.lazy(() => import('./Home/Home'));
const PersonalAccount = React.lazy(() => import('./PersonalAccount/PersonalAccount'));

const history = createBrowserHistory();

export default function Index() {
  const isAuthorized = useSelector<stateType>((state) => state.authorize.isAuthorized);

  return (
    <Router history={history}>
      <div className="index">
        <Switch>
          <Suspense fallback="">
            {!isAuthorized ? <Redirect to="/" /> : null}
            <Route exact path="/" component={Home} />
            <Route path="/personal" component={PersonalAccount} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}
