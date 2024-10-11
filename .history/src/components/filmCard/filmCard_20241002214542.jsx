import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {

  render() {
    const { poster_path, title, release_date, description } = this.props.data;

    return (
      <div className="filmCard">
        <img className="image" src={poster_path} alt="someImg"></img>
        <div className="filmInfo">
          <div className="cardText">
            <div className="filmTilte">{title}</div>
            <div className="filmDate">{release_date}</div>
            <div className="filmGenres">
              <span className="genre">Action</span>
              <span className="genre">Drama</span>
            </div>
          </div>
          <div className="filmDescription">{description}</div>
        </div>
      </div>
    );
  }
}
