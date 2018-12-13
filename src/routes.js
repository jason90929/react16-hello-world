import React from 'react';
import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Link as ALink,
} from 'react-router-dom';
import Home from './pages/Home/Home'
import AppComponent from './pages/AppComponent'
import Loading from './components/Loading'

const routes = (
  <Router>
    <AppComponent>
      <ul>
        <li><ALink to="/">首頁</ALink></li>
        <li><ALink to="/about">關於</ALink></li>
        <li><ALink to="/redux">測試 redux</ALink></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route
        path="/about"
        component={Loadable({
          loader: () => import('./pages/About/About'),
          loading: Loading,
        })}
      />
      <Route
        path="/redux"
        component={Loadable({
          loader: () => import('./pages/Redux/Redux'),
          loading: Loading,
        })}
      />
    </AppComponent>
  </Router>
);

export default routes;
