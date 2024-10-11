import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  // _apiBase = `https://www.themoviedb.org/settings/api`;

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2U5YjAxYzVjYTVmNGJlOGZiMWZiZjk1NTA1YTJlMiIsIm5iZiI6MTcyNzgwNTA5NS42ODM0ODgsInN1YiI6IjY2ZjgwOGU3MTQwZmJmNmExYTVmM2E5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_s1qQUwmBqK_nNIpdZyEl9pjPkPNgHfu7sxMPUXgag'
    }
  };

  async getResource(url) {
    const res = await fetch(url, this.options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
      return await res;
  }  

  render() {

    const res = this.getResource('https://api.themoviedb.org/3/search/movie?query=ginger%20snaps&include_adult=false&language=en-US&page=1')
    const { results } = res;

    return (
      <main className="mainArea">
        <FilmCard data={results}/>
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </main>
    );
  }
}
