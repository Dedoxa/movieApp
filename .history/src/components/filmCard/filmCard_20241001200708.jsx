import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
        <div className="filmCard">
          <div className="image"></div>
          <div className="cardText">
            <div className="filmTilte">Title</div>
            <div className="filmDate">Card content</div>
            <div className="filmGenres">Card content</div>
            <div className="filmDescription">Card content</div>
          </div>
        </div>
    );
  }
}
