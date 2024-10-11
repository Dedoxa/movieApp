import React from "react";
import "./App.css";

import FilmCard from "./components/FilmCard/FilmCard"

export default class App extends React.Component {
  render() {
    // static defaultProps = {}
    // static propTypes = {}

    // state = {}


    return (
      <main className="mainArea">
        <p>
          hehe
        </p>
        <FilmCard />
      </main>
    )
  }
}