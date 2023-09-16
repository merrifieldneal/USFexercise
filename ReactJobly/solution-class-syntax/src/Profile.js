import React, { Component } from "react";
import Alert from "./Alert";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext"

const MESSAGE_SHOW_PERIOD_IN_MSEC = 3000;

class Profile extends Component {
  static contextType = UserContext;
  // if you want context in the constructor, pass it

  constructor(props, context) {
    super(props, context);
    let u = context;
    
    this.state = {
      first_name: u.first_name || "",
      last_name: u.last_name || "",
      email: u.email || "",
      photo_url: u.photo_url || "",
      username: u.username,
      password: "",
      errors: [],
      saveConfirmed: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();

    try {
      let profileData = {
        first_name: this.state.first_name || undefined,
        last_name: this.state.last_name || undefined,
        email: this.state.email || undefined,
        photo_url: this.state.photo_url || undefined,
        password: this.state.password,
      };

      let username = this.state.username;

      await JoblyApi.saveProfile(username, profileData);

      this.setState(
        {
          errors: [],
          saveConfirmed: true,
          password: "",
        }, () => {
          // after a short period, remove status message
          setTimeout(
            () => this.setState({ saveConfirmed: false }),
            MESSAGE_SHOW_PERIOD_IN_MSEC);
        });
    } catch (errors) {
      this.setState({ errors });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [],
    });
  }

  render() {
    return (
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>Profile</h3>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Username</label>
                <p className="form-control-plaintext">{this.state.username}</p>
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="first_name"
                  className="form-control"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
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
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Photo URL</label>
                <input
                  name="photo_url"
                  className="form-control"
                  value={this.state.photo_url}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Update password (leave empty to keep current)</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              {this.state.errors.length ? (
                <Alert type="danger" messages={this.state.errors} />
              ) : null}

              {this.state.saveConfirmed ? (
                <Alert type="success"
                       messages={["User updated successfully."]} />
              ) : null}

              <button
                className="btn btn-primary btn-block mt-4"
                onClick={this.handleSubmit}
                disabled={!this.state.password}>
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
