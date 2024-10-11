import React from "react";
import { useState } from "react";
import "./App.css";

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

getResource('https://swapi.co/api/people/1/')
  .then((body) => {
    console.log(body);
  });

fetch('https://swapi.co/api/people/1/')
  .then((res) => {
    console.log('Got response', res.status)
  });

export default class App extends React.Component {
  render () {
    const [count, setCount] = useState(0);

  
    return (
      <>
        <div>Hello, world!</div>
      </>
    );
  }
}
