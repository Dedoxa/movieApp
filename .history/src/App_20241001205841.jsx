import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

export default class App extends React.Component {
  // static defaultProps = {}
  // static propTypes = {}

  // state = {}

  _apiBase = `https://swapi.co/api`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`);
      }
  
      return await res.json();
  }

  async getAllSmth() {
    const res = await this.getResource(`/people/`);
    return res.results; //results может быть специфичным для SWAPI
  }

  getOneSmth(id) {
    return this.getResource(`/people/${id}/`);
  }

  render() {

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
