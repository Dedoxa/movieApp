import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";


export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  // _apiBase = `https://www.themoviedb.org/settings/api`;

  startId = 0

  render() {

    const res = this.getResource()
    const { results } = res;

    console.log(res)

    return (
      <main className="mainArea">
        {results.map((movie) => {
          return <FilmCard data={ movie }/>
        })}
      </main>
    );
  }
}
