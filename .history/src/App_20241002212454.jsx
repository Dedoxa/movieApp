import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard";

import TMDBService from "./components/TMDBService/TMDBService";

export default class App extends React.Component {
  static defaultProps = {
    data: {
      results: [
        {
          title: "hehe"
          
        }, {}
      ]
    }
  }
  // static propTypes = {}

  constructor() {
    super();
    this.getData(this._query);
  }

  TMDB = new TMDBService();
  _query = `&query=ginger%20snaps`;

  getData(query) {
    this.TMDB.getResource(query).then((res) => {
      this.setState({
        results: res,
      });
    });
  }

  state = {
    data: [],
  };

  render() {
    const { results } = this.state.data;
    console.log(results)

    return (
      <main className="mainArea">
        {results.map((movie) => {
          return <FilmCard data={movie} />;
        })}
      </main>
    );
  }
}
