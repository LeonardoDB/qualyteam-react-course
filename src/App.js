import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Navbar } from "./components/navbar";
const Main = lazy(() => import('./Main'));
const Register = lazy(() => import('./pages/register'));
const Access = lazy(() => import('./pages/access'));
const Login = lazy(() => import('./pages/login'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/access/:id" component={Access} />
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
