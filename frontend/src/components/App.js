import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './Container';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Redirect to="/departments" />
        </Route>
        <Route path="/departments" component={Container} />
        <Route path="/departments/create" component={Container} />
        <Route path="/departments/:id/members" component={Container} />
        <Route path="/departments/:id/members/create" component={Container} />
      </Switch>
    </div>
  );
}

export default App;
