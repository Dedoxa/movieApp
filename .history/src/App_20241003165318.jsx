import React from "react";
import "./App.css";
import { Alert, Spin } from "antd";

import FilmCard from "./components/FilmCard/FilmCard";
import TMDBService from "./components/TMDBService/TMDBService";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.TMDB = new TMDBService();
    // this._query = `&query=wolverine`;
    this._query = `&query=ginger%20snaps`;
    // this._query = ``;
  }

  componentDidMount() {
    this.getData(this._query);
  }

  getData(query) {
    this.TMDB.getResource(query).then((res) => {
      this.setState({
        data: res,
      });
    });
  }

  render() {
    const { data } = this.state;

    if (data instanceof Error) {
      const spaceIndex = data.stack.IndexOf(":");
      const formattedStack = `${data.stack.slice(spaceIndex, 40)} ...`;
      // .replace("\ at \g", "\n at ");

      return (
        <div className="centralized">
          <span>
            <Alert
              message={data.name}
              description={formattedStack}
              type="error"
            />
          </span>
        </div>
      );
    }

    if (!data || !data.results) {
      return (
        <div className="centralized">
          <Spin size="large" />
        </div>
      );
    }

    return (
      <main className="mainArea">
        {data.results.map((movie) => (
          <FilmCard key={movie.id} data={movie} />
        ))}
      </main>
    );
  }
}
