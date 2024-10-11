import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
        <div className="filmCard">
          <div className="image"></div>
          <div className="cardText">
            <div className="filmTilte">Title</div>
            <div className="filmDate">March 5, 2020</div>
            <div className="filmGenres">
                <span className="genre">Action</span>
                <span className="genre">Drama</span>
            </div>
            <div className="filmDescription">Card content</div>
          </div>
        </div>
    );
  }
}
