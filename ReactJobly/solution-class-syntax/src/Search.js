import React, { Component } from "react";
import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.searchFor(this.state.search);
  }

  handleChange(evt) {
    this.setState({ search: evt.target.value });
  }

  render() {
    return (
      <div className="Search mb-4">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control form-control-lg flex-grow-1"
                 name="search"
                 placeholder="Enter search term.."
                 value={this.state.search}
                 onChange={this.handleChange} />
          <button type="submit" className="btn btn-lg btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
