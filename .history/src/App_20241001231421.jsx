import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";
import TMDBService from "../TMDBService/TMDBService";


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
    return this.TMDB.getResource('https://api.themoviedb.org/3/search/movie?query=ginger%20snaps&include_adult=false&language=en-US&page=1')
    .then((res) => {
        this.setState({
            image: res.results.poster_path,
            title: res.results.title,
            date: "???",
            // date: res.results.release_date,
            // genres: [4, 18],
            description: res.results.overview
        })
    })
  }

  startId = 0

  render() {
    return (
      <main className="mainArea">
        {results.map((movie) => {
          return <FilmCard data={ movie }/>
        })}
      </main>
    );
  }
}
