import React from "react";
import { useState } from "react";
import "./App.css";

export default class App extends React.Component {
  render () {
    const [count, setCount] = useState(0);

    fetch('https://swapi.co/api/people/1/')
      .then((res) => {
        console.log('Got response', res.status)
      })
  
    return (
      <>
        <div>Hello, world!</div>
      </>
    );
  }
}
