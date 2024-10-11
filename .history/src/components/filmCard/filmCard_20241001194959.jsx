import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
        <div className="filmCard">
          <div className="image"></div>
          <div className="description">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </div>
        </div>
    );
  }
}
