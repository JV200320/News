import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/home';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  )

}
export default routes;