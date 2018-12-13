import React from 'react';
// import Loadable from 'react-loadable';
import {
  BrowserRouter as Router,
  Route,
  Link as ALink,
} from 'react-router-dom';
import Home from './pages/Home'
import AppComponent from './pages/AppComponent'

const routes = (
  <Router>
    <AppComponent>
      <ul>
        <li><ALink to="/">首頁</ALink></li>
        <li><ALink to="/about">關於</ALink></li>
        <li><ALink to="/topics">論題</ALink></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      {/*<Route*/}
        {/*path="/about"*/}
        {/*component={Loadable({*/}
          {/*loader: () => import('./components/AboutComponent'),*/}
          {/*loading: LoadingComponent,*/}
        {/*})}*/}
      {/*/>*/}
    </AppComponent>
  </Router>
);

export default routes;
