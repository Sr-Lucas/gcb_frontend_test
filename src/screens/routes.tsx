import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Register from './register';
import AddressInfo from './register/address-info';
import UserInfo from './register/user-info';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/register" exact component={Register} />
      <Route path="/register/user-info" exact component={UserInfo} />
      <Route path="/register/address-info" exact component={AddressInfo} />
    </Switch>
  );
};

export default Routes;
