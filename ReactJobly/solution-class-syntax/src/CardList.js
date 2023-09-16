import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  static defaultProps = { cards: [] };

  render() {
    return this.props.cards.length ? (
      <div className="CardList">
        {this.props.cards.map((cardData, idx) => (
          <Card
            item={cardData}
            key={idx}
            idx={idx}
            apply={this.props.apply}
          />
        ))}
      </div>
    ) : (
      <p className="lead">Sorry, no results were found!</p>
    );
  }
}

export default CardList;
