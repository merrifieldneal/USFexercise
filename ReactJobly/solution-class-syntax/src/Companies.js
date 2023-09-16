import React, { Component } from "react";
import CardList from "./CardList";
import Search from "./Search";
import JoblyApi from "./JoblyApi";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch(search) {
    let companies = await JoblyApi.getCompanies(search);
    this.setState({ companies });
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  render() {
    return (
      <div className="col-md-8 offset-md-2">
        <Search endpoint="companies" searchFor={this.handleSearch} />
        <CardList cards={this.state.companies} />
      </div>
    );
  }
}

export default Companies;
