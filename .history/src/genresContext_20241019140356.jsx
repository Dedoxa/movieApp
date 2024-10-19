import { createContext, useContext, useEffect, useState } from 'react';
import { Tag } from 'antd';

export const genresContext = createContext({});

export const GenresContextProvider = ({ children }) => {
  const [genre, setGenre] = useState({});
  async function getGenres() {
    return await fetch('https://api.themoviedb.org/3/genre/movie/list', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjFmZDIyODcxYTY2ZTc5ZTljMDdmZWU0YjQ5ODgzMiIsIm5iZiI6MTcyOTMzMzg0NS4xMDU2MzcsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LKst-viNQJT5PBru30LlOAPFv8scKBHhSX0J9ilYvCg',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error: ', response.status);
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
          <Tag key={id} className="genre">
            {genres[id]}
          </Tag>
        );
      })}
    </>
  );
};
