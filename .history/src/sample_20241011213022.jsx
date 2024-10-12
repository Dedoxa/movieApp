import { createContext, useContext, useEffect, useState } from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

export const genresContext = createContext({});

export const GenresContextProvider = ({ children }) => {
  const [genre, setGenre] = useState({});
  async function getGenres() {
    return await fetch('https://api.themoviedb.org/3/genre/movie/list', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2U5YjAxYzVjYTVmNGJlOGZiMWZiZjk1NTA1YTJlMiIsIm5iZiI6MTcyNzgwNTA5NS42ODM0ODgsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_s1qQUwmBqK_nNIpdZyEl9pjPkPNgHfu7sxMPUXgag',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // console.log(Error fetch genres json, response status: ${response.status});
          console.log('Error fetch genres json, response status: ${response.status}');
        }
      })
      .then((response) => response.genres)
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getGenres().then((data) => {
      const dictionary = {};

      for (const item of data) {
        dictionary[item.id] = item.name;
      }

      setGenre(dictionary);
    });
  }, []);
  return <genresContext.Provider value={genre}>{children}</genresContext.Provider>;
};

export const Genres = ({ ids }) => {
  const genres = useContext(genresContext);
  return (
    <>
      {ids.map((id) => {
        return (
          <Tag key={id} style={{ textAlign: 'start', margin: '4px 4px 0 0', fontSize: '12px', lineHeight: '22px' }}>
            {genres[id]}
          </Tag>
        );
      })}
    </>
  );
};

GenresContextProvider.propTypes = {
  children: PropTypes.object,
};

Genres.propTypes = {
  ids: PropTypes.array,
};
