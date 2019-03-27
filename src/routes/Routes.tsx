import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Feed from './Feed';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/feed" exact={true} component={Feed} />
  </Switch>
);

export default Routes;
