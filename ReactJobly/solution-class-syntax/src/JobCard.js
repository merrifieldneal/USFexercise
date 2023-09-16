import React, { Component } from "react";

class JobCard extends Component {
  static defaultProps = {
    item: {}
  };

  render() {
    const { title, salary, equity } = this.props.item;

    return (
      <div className="Card card">
        <div className="card-body">
          <h6 className="card-title d-flex justify-content-between">
            <span className="text-capitalize">{title}</span>
          </h6>
          <div>Salary: {salary}</div>
          <div>Equity: {equity}</div>
          <button
            className="btn btn-danger font-weight-bold text-uppercase float-right"
            onClick={this.props.handleApply}
            disabled={this.props.item.state}
          >
            {this.props.item.state ? "Applied" : "Apply"}
          </button>
        </div>
      </div>
    );
  }
}

export default JobCard;
