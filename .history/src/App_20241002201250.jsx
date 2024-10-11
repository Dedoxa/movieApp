import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

import TMDBService from "./components/TMDBService/TMDBService";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  // _apiBase = `https://www.themoviedb.org/settings/api`;
  TMDB = new TMDBService();

  constructor() {
    super();
    this.getMovies();
  }

  getMovies() {
    this.TMDB.getResource(
      "https://api.themoviedb.org/3/search/movie?query=ginger%20snaps&include_adult=false&language=en-US&page=1",
    ).then((res) => {
      this.setState({
        results: res
      });
    });
  }

  state = {
    results: []
  }

  startId = 0;

  render() {
    const { results } = this.state.results;

    return (
      <main className="mainArea">
        {results.map((movie) => {
          return <FilmCard data={movie} />;
        })}
      </main>
    );
  }
}
