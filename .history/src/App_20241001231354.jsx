import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";
import TMDBService from "../TMDBService/TMDBService";


export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  // _apiBase = `https://www.themoviedb.org/settings/api`;

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
