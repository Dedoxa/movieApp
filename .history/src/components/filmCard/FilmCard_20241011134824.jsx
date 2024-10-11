import React from 'react';
import { parseISO, format } from 'date-fns';
import { Rate } from 'antd';
import './FilmCard.css';

export default class FilmCard extends React.Component {
  reduceString(string, maxLength) {
    if (string.length > maxLength) {
      let reducedString = string.slice(0, maxLength);
      let spaceIndex = reducedString.lastIndexOf(' ');
      reducedString = `${string.slice(0, spaceIndex)} ...`;
      return reducedString;
    }
    return string;
  }

  render() {
    const { poster_path, title, release_date, overview } = this.props.data;
    let formattedDate;
    release_date ? (formattedDate = format(parseISO(release_date), 'LLLL d, yyyy')) : (formattedDate = '[Not found]');
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const finalOverview = this.reduceString(overview, 150);

    return (
      <div className="filmCard">
        <img className="image" src={posterPath} alt="movie cover"></img>
        <div className="filmInfo">
          <div className="filmAtributes">
            <div className="filmTags">
              <div className="filmTilte">{title}</div>
              <div className="filmDate">{formattedDate}</div>
              <div className="filmGenres">
                <span className="genre">Action</span>
                <span className="genre">Drama</span>
              </div>
            </div>
            <div className="filmRate">
              <span>6.6</span>
            </div>
          </div>
          <div className="filmDescription">{finalOverview}</div>
        </div>
      </div>
    );
  }
}
