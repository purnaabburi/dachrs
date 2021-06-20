import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Components/Registration/Login";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/homepage" component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
