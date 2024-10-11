import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {

  reduceString (string) {
    if (string.length > 205) {
      let reducedString = $string.slice(0, 100);
      let reducedString.lastIndexOf()
      return reducedString;
    };
    return string
  }

  render() {
    const { poster_path, title, release_date, overview } = this.props.data;
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const finalOverview = this.reduceString(overview);

    return (
      <div className="filmCard">
        <img className="image" src={posterPath} alt="someImg"></img>
        <div className="filmInfo">
          <div className="cardText">
            <div className="filmTilte">{title}</div>
            <div className="filmDate">{release_date}</div>
            <div className="filmGenres">
              <span className="genre">Action</span>
              <span className="genre">Drama</span>
            </div>
          </div>
          <div className="filmDescription">{finalOverview}</div>
        </div>
      </div>
    );
  }
}
