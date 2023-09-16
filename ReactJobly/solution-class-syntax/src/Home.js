import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "./UserContext";

class Home extends Component {
  
  static contextType = UserContext;

  render() {
    const currentUser = this.context;
    return (
      <div className="Home">
        <div className="container text-center">
          <h1 className="mb-4 font-weight-bold">Jobly</h1>
          <p className="lead">All the jobs in one, convenient place.</p>
          {currentUser ? (
            <h2>Welcome Back {currentUser.first_name}!</h2>
          ) : (
            <Link className="btn btn-primary font-weight-bold" to="/login">
              Log in
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
