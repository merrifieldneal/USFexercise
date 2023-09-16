import React, { Component } from "react";
import { decode } from "jsonwebtoken"
import { ClipLoader } from "react-spinners";
import "./App.scss";
import Navigation from "./Navigation";
import Routes from "./Routes";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      infoLoaded: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async componentDidMount() {
    await this.getCurrentUser();
  }

  async getCurrentUser() {
    const token = localStorage.getItem("jobly-token");

    try {
      let { username } = decode(token);
      let currentUser = await JoblyApi.getCurrentUser(username);
      this.setState({ currentUser, infoLoaded: true });
    } catch (err) {
      this.setState({ currentUser: null, infoLoaded: true });
    }
  }

  handleLogOut() {
    localStorage.removeItem("jobly-token");
    this.setState({ currentUser: null });
  }

  render() {
    if (!this.state.infoLoaded) {
      return <ClipLoader size={150} color="#123abc" />;
    }

    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div className="App">
          <Navigation logout={this.handleLogOut} />
          <Routes getCurrentUser={this.getCurrentUser} />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
