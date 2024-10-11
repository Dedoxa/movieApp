import React from "react";
import "./App.css";

import Card from "./components/Card/filmCard"

export default class App extends React.Component {
  render() {
    // static defaultProps = {}
    // static propTypes = {}

    state = {}


    return (
      <main className="mainArea">
        <Card />
      </main>
    )
  }
}