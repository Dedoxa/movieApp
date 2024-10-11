import React from "react";

export default class TMDBService extends React.Component {

  _apiBase = "https://api.themoviedb.org/3/search/movie?query="
  _apiEnd = "&include_adult=false&language=en-US&page=1"

  options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2U5YjAxYzVjYTVmNGJlOGZiMWZiZjk1NTA1YTJlMiIsIm5iZiI6MTcyNzgwNTA5NS42ODM0ODgsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_s1qQUwmBqK_nNIpdZyEl9pjPkPNgHfu7sxMPUXgag",
    },
  };

  async getResource(url) {
    const response = await fetch(`${this._apiBase}${url}${this._apiEnd}`, this.options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    return await response;
  }
}
