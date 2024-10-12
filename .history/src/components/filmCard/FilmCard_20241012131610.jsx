import React from 'react';
import { parseISO, format } from 'date-fns';
import { Rate, Flex } from 'antd';

import './FilmCard.css';
import { Genres } from '../../genresContext.jsx';

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

  handleRateChange = (value) => {
    const ratedMovies = JSON.parse(localStorage.getItem('ratedMovies')) || [];

    const ratedMovie = {
      ...this.props.data,
      userRating: value,
    };

    const updatedRatedMovies = [...ratedMovies.filter((movie) => movie.id !== ratedMovie.id), ratedMovie];

    localStorage.setItem('ratedMovies', JSON.stringify(updatedRatedMovies));
    this.props.refreshRatedMovies(updatedRatedMovies);
  };

  render() {
    const { poster_path, title, release_date, overview, vote_average, genre_ids } = this.props.data;

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
        <img className="image" src={posterPath} alt="movie cover" />
        <div className="filmInfo">
          <div className="filmAtributes">
            <div className="filmTags">
              <div className="filmTilte">{title}</div>
              <div className="filmDate">{formattedDate}</div>
              <div className="filmGenres">
                <Flex wrap>
                  <Genres ids={genre_ids} />
                </Flex>
              </div>
            </div>
            <div className={filmRateClass}>
              <span>{FormattedRate}</span>
            </div>
          </div>
          <div className="filmDescription">{finalOverview}</div>
          <Rate allowHalf defaultValue={5} count={10} className="starRate" onChange={this.handleRateChange} />
        </div>
      </div>
    );
  }
}
