import React, { Component } from "react";
import "./Card.scss";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";

class Card extends Component {
  static defaultProps = {
    item: {},
    apply: () => {}
  };

  constructor(props) {
    super(props);
    this.handleApply = this.handleApply.bind(this);
  }

  handleApply() {
    this.props.apply(this.props.idx);
  }

  render() {
    if (this.props.item.handle) {
      return <CompanyCard item={this.props.item} />;
    } else {
      return (
        <JobCard item={this.props.item} handleApply={this.props.handleApply} />
      );
    }
  }
}

export default Card;
