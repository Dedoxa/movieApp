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
      // const twoDotsIndex = data.stack.indexOf(":");
      // console.log(twoDotsIndex);
      // const formattedErrorStack = `${data.stack.slice(twoDotsIndex + 2, data.stack.length - 1)}`;
      // // .replace("\ at \g", "\n at ");

      return (
        <div className="centralized">
          <span>
            <Alert
              message={data.name}
              description={formattedErrorStack}
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
