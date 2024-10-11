import React from "react";
import "./FilmCard.css";

export default class FilmCard extends React.Component {
  render() {
    return (
        <div className="filmCard">
          <div className="image"></div>
          <div className="filmInfo">
          <div className="cardText">
            <div className="filmTilte">Title</div>
            <div className="filmDate">March 5, 2020</div>
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
