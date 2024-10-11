import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  state = {
    image: this.props.poster_path,
    title: this.props.title,
    date: this.props.release_date,
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
