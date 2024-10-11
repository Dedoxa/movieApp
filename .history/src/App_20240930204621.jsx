import React from "react";
import "./App.css";

import filmCard from "./components/Card/filmCard"

export default class App extends React.Component {
  render() {
    // static defaultProps = {}
    // static propTypes = {}

    state = {}


    return (
      <main className="mainArea">
        <filmCard />
      </main>
    )
  }
}