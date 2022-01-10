import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route patch="/" component={Login} />
      <Route patch="/wallet" component={Wallet} />
    </Switch>
  );
}

export default App;
