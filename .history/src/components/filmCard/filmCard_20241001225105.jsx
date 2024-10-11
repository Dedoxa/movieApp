import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
    defaultProps = {

    }


  state = {
    image: "",
    title: "",
    date: "",
    genres: "",
    description: "",
  }

  render() {
    const { image, title, date, genres, description } = this.state;

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
          <div className="filmDescription">A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...</div>
          </div>
        </div>
    );
  }
}
