import React from 'react';

export default class TMDBService extends React.Component {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjFmZDIyODcxYTY2ZTc5ZTljMDdmZWU0YjQ5ODgzMiIsIm5iZiI6MTcyOTMzMzg0NS4xMDU2MzcsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LKst-viNQJT5PBru30LlOAPFv8scKBHhSX0J9ilYvCg',
    },
  };

  async getMovies(query) {
    try {
      // const response = await fetch(`https://api.themoviedb.org/3/search/movie?${query}`, this.options);
      const response = await fetch(`https://api.themoviedb.org/3/search/movie/api_key=db1fd22871a66e79e9c07fee4b498832$${query}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return error;
    }
  }

  async getResource(url) {
    try {
      const response = await fetch(`${url}`, this.options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return error;
    }
  }
}
