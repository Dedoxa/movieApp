import React from "react";

export default class TMDBService extends React.Component {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2U5YjAxYzVjYTVmNGJlOGZiMWZiZjk1NTA1YTJlMiIsIm5iZiI6MTcyNzgwNTA5NS42ODM0ODgsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_s1qQUwmBqK_nNIpdZyEl9pjPkPNgHfu7sxMPUXgag'
    }
  };

  async getResource() {
    const response = await fetch(
      ``,
      this.options,
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    return await response;
  }
}
