import React, { Component } from "react";
import CardList from "./CardList";
import Search from "./Search";
import JoblyApi from "./JoblyApi";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.search = this.search.bind(this);
    this.apply = this.apply.bind(this);
  }

  async search(search) {
    let jobs = await JoblyApi.getJobs(search);
    this.setState({ jobs });
  }

  async apply(idx) {
    let jobId = this.state.jobs[idx].id;
    let message = JoblyApi.applyToJob(jobId);
    this.setState(st => ({
      jobs: st.jobs.map(job =>
        job.id === jobId
          ? { ...job, state: message }
          : job)
    }));
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  render() {
    return (
      <div className="Jobs col-md-8 offset-md-2">
        <Search endpoint="jobs" searchFor={this.search} />
        <CardList cards={this.state.jobs} apply={this.apply} />
      </div>
    );
  }
}

export default Jobs;
