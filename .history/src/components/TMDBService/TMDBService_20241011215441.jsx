import React from 'react';

export default class TMDBService extends React.Component {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2U5YjAxYzVjYTVmNGJlOGZiMWZiZjk1NTA1YTJlMiIsIm5iZiI6MTcyNzgwNTA5NS42ODM0ODgsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_s1qQUwmBqK_nNIpdZyEl9pjPkPNgHfu7sxMPUXgag',
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

  // async createGuestSession() {
  //   try {
  //     const response = await fetch(`https://api.themoviedb.org/3/authentication/guest_session/new`, this.options);

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data.guest_session_id);
  //     return data.guest_session_id;
  //   } catch (error) {
  //     console.error('Ошибка при получении данных:', error);
  //     return error;
  //   }
  // }
}
