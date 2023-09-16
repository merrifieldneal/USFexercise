import React, { Component } from "react";
import "./Login.scss";
import Alert from "./Alert";
import JoblyApi from "./JoblyApi";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "login",
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
    this.toggleSignupView = this.toggleSignupView.bind(this);
  }

  toggleView(view) {
    this.setState({ activeView: view });
  }

  toggleLoginView() {
    this.toggleView("login");
  }

  toggleSignupView() {
    this.toggleView("signup");
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let data;
    let endpoint;

    if (this.state.activeView === "signup") {
      // these fields aren't req'd---pass undefined, not empty string
      data = {
        username: this.state.username,
        password: this.state.password,
        first_name: this.state.first_name || undefined,
        last_name: this.state.last_name || undefined,
        email: this.state.email || undefined,
      };
      endpoint = "register"
    } else {
      data = {
        username: this.state.username,
        password: this.state.password,
      };
      endpoint = "login";
    }

    let token;

    try {
      token = await JoblyApi[endpoint](data);
    } catch (errors) {
      return this.setState({ errors })
    }

    localStorage.setItem("jobly-token", token);
    await this.props.getCurrentUser();
    this.props.history.push("/jobs");
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let loginActive = this.state.activeView === "login";

    const signupFields = (
      <div>
        <div className="form-group">
          <label>First name</label>
          <input
            name="first_name"
            className="form-control"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            name="last_name"
            className="form-control"
            value={this.state.last_name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );

    return (
      <div className="Login">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="d-flex justify-content-end">
            <div className="btn-group">
              <button
                className={`btn btn-primary ${loginActive ? "active" : ""} `}
                onClick={this.toggleLoginView}
              >
                Login
              </button>
              <button
                className={`btn btn-primary ${loginActive ? "" : "active"} `}
                onClick={this.toggleSignupView}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                {loginActive ? "" : signupFields}
                {this.state.errors.length ? (
                  <Alert type="danger" messages={this.state.errors} />
                ) : null}

                <button
                  type="submit"
                  className="btn btn-primary float-right"
                  onSubmit={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
