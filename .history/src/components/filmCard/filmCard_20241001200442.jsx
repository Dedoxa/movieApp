import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
        <div className="filmCard">
          <div className="image"></div>
          <div className="description">
            <div className="filmTilte">Card content</div>
            <div>Card content</div>
            <div>Card content</div>
          </div>
        </div>
    );
  }
}
