import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

import TMDBService from "./components/TMDBService/TMDBService";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  constructor() {
    super();
    this.getData();
  }

  TMDB = new TMDBService();

  _request = `ginger%20snaps`;

  getData() {
    this.TMDB.getMovies(this._request).then((res) => {
      this.setState({
        results: res,
      });
    });
  }

  state = {
    results: [],
  };

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
