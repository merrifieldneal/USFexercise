import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.scss";
import UserContext from "./UserContext";

class Navigation extends Component {

  loggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={this.props.logout}>
            Log out
          </Link>
        </li>
      </ul>
    );
  }

  loggedOutNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <UserContext.Consumer>
        {currentUser => (
          <nav className="Navigation navbar navbar-expand-md">
            <Link className="navbar-brand" to="/">
              Jobly
            </Link>
            {currentUser ? this.loggedInNav() : this.loggedOutNav()}
          </nav>
        )}
      </UserContext.Consumer>
    );
  }
}

export default Navigation;
