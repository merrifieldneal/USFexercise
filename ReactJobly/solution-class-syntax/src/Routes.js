import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Company from "./Company";
import Login from "./Login";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

class Routes extends Component {
  render() {
    const { getCurrentUser } = this.props;

    return (
      <div className="pt-5">
        <Switch>

          <Route
            exact
            path="/"
            render={() => <Home />} />

          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                getCurrentUser={getCurrentUser}
              />
            )}
          />

          <PrivateRoute
            exact
            render={() => <Companies />}
            path="/companies" />}
          />

          <PrivateRoute
            exact
            path="/jobs"
            render={() => <Jobs />}
          />

          <PrivateRoute
            path="/companies/:handle"
            render={props => <Company {...props} />}
          />

          <PrivateRoute
            path="/profile"
            render={props => <Profile {...props} />}
          />

        </Switch>
      </div>
    );
  }
}

export default Routes;
