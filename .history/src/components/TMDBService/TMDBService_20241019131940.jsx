import React from 'react';

export default class TMDBService extends React.Component {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzBhMGQyNzZhN2FkM2RiNjg1YzQwNmM5MDFkYjVlZiIsIm5iZiI6MTcyOTI1MzIxNi42MjUxMTQsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UEmzj6ILmAB0AlKtz680kQs_rdtcGHZXduRUWX6cs48',
    },
  };

  async getMovies(query) {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?${query}`, this.options);

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
