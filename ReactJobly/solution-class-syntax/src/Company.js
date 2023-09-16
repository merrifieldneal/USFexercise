import React, { Component } from "react";
import JoblyApi from './JoblyApi';
import CardList from "./CardList";
import UserContext from "./UserContext"

class Company extends Component {
  static contextType = UserContext;
  static defaultProps = {
    match: { params: {} },
  };

  constructor(props) {
    super(props);
    this.state = {
      company: null
    };
    this.handleApply = this.handleApply.bind(this);
  }

  async componentDidMount() {
    const { jobs } = this.context;
    const { handle } = this.props.match.params;

    const company = await JoblyApi.getCompany(handle);

    // grab a set of IDs of jobs applied to
    const jobsIDsAppliedTo = new Set(jobs.map(job => job.job_id));

    // add key for each job in company if it is applied to ---
    // this let us handle the "apply/applied" button
    company.jobs.map(job => ({ ...job, status:  jobsIDsAppliedTo.has(job.id)}));

    this.setState({ company });
  }

  handleApply() {
    alert("TODO"); // TODO
  }

  render() {
    if (!this.state.company) {
      return <div>Loading...</div>;
    }

    return (
      <div className="col-md-8 offset-md-2">
        <h5 className="text-capitalize">{this.state.company.name}</h5>
        <p>{this.state.company.description}</p>
        <CardList cards={this.state.company.jobs}
                  handleApply={this.handleApply} />
      </div>
    );
  }
}

export default Company;
