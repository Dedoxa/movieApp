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
    const { poster_path, title, release_date, overview, vote_average } = this.props.data;
    const FormattedRate = vote_average === 10 || vote_average === 0 ? vote_average : vote_average.toFixed(1);
    let formattedDate;
    release_date ? (formattedDate = format(parseISO(release_date), 'LLLL d, yyyy')) : (formattedDate = '[Not found]');
    const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;
    const finalOverview = this.reduceString(overview, 150);
    let filmRateClass;
    if (FormattedRate <= 3) {
      filmRateClass = 'badFilmRate';
    }
    if (FormattedRate > 3 && FormattedRate <= 5) {
      filmRateClass = 'lowFilmRate';
    }
    if (FormattedRate > 5 && FormattedRate <= 7) {
      filmRateClass = 'middleFilmRate';
    }
    if (FormattedRate > 7) {
      filmRateClass = 'goodFilmRate';
    }

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
            <div className={filmRateClass}>
              <span>{FormattedRate}</span>
            </div>
          </div>
          <div className="filmDescription">{finalOverview}</div>
          <Rate allowHalf count={10} className="starRate" />
        </div>
      </div>
    );
  }
}
