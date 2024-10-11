import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {

  getMovies() {
    this.TMDB.getResource(
      "https://api.themoviedb.org/3/search/movie?query=ginger%20snaps&include_adult=false&language=en-US&page=1",
    ).then((res) => {
      this.setState({
        image: res.results.poster_path,
        title: res.results.title,
        date: "???",
        // date: res.results.release_date,
        // genres: [4, 18],
        description: res.results.overview,
      });
    });
  }

  state = {
    image: this.props.poster_path,
    title: this.props.title,
    date: "???",
    // genres: [4, 18],
    description: this.props.description,
  };

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
