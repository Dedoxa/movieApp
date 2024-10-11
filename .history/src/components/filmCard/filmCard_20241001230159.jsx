import React from "react";
import "./FilmCard.css";

import TMDBService from "../TMDBService/TMDBService";

export default class FilmCard extends React.Component {
  TMDB = new TMDBService();

  getMovies() {
    return this.TMDB.getResource('https://api.themoviedb.org/3/search/movie?query=ginger%20snaps&include_adult=false&language=en-US&page=1')
    .then((res) => {})
  }

  state = {
    image: "",
    title: "Title",
    date: "05 March",
    // genres: [4, 18],
    description: "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...",
  }

  render() {
    const { image, title, date, description } = this.state;

    return (
        <div className="filmCard">
          <img className="image" src={image} alt="someImg"></img>
          <div className="filmInfo">
          <div className="cardText">
            <div className="filmTilte">{title}</div>
            <div className="filmDate">{date}</div>
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
