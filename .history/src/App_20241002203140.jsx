import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

import TMDBService from "./components/TMDBService/TMDBService";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  _request = `ginger%20snaps`;
  TMDB = new TMDBService();

  constructor() {
    super();
    this.getMovies();
  }

  getMovies() {
    this.TMDB.getResource( this._request,
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
