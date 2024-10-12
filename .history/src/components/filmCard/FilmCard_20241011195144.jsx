import React from 'react';
import { parseISO, format } from 'date-fns';
import { Rate } from 'antd';

import './FilmCard.css';
import { Consumer } from '../../App.jsx'; // Импортируем Consumer из контекста

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
  };

  render() {
    return (
      <Consumer>
        {(genresList) => {
          const { poster_path, title, release_date, overview, vote_average, genre_ids } = this.props.data;

          const filmGenres = genre_ids
            .map((genreId) => {
              const genre = genresList.find((genre) => genre.id === genreId);
              return genre ? genre.name : null;
            })
            .filter((genre) => genre !== null);

          const FormattedRate = vote_average === 10 || vote_average === 0 ? vote_average : vote_average.toFixed(1);
          let formattedDate;

          release_date
            ? (formattedDate = format(parseISO(release_date), 'LLLL d, yyyy'))
            : (formattedDate = '[Not found]');

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
            filmRateClass = 'highFilmRate';
          }

          return (
            <div className="filmCard">
              <img className="poster" src={posterPath} alt="poster" />
              <div className="description">
                <h1 className="filmTitle">{title}</h1>
                <span className="filmDate">Release date: {formattedDate}</span>
                <span className="filmGenres">Genres: {filmGenres.join(', ')}</span>
                <p className="filmOverview">{finalOverview}</p>
                <div className="ratingWrapper">
                  <div className={filmRateClass}>{FormattedRate}</div>
                  <Rate
                    count={10}
                    defaultValue={0}
                    allowHalf
                    style={{ fontSize: '20px' }}
                    onChange={this.handleRateChange}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
