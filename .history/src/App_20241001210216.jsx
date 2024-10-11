import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  _apiBase = `https://www.themoviedb.org/settings/api`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
      } else {
        alert("данные получены")
      }
  
      return await res.json();
  }

  render() {

    this.getResource("")

    return (
      <main className="mainArea">
        <FilmCard />
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
