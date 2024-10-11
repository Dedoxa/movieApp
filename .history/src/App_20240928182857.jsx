import { useState } from "react";
import "./App.css";

export default class App extends React.Component {
  async getResource() {
    const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
  
      const body = await res.json();
      return body;
  }

  getAllSmth() {
    return this.getResource('https://swapi.co/api/people/');
  }

  render() {
    const [count, setCount] = useState(0);
    
    getResource('https://swapi.co/api/people/1/')
      .then((body) => {
        console.log(body);
      })
      .catch((err) => {
        console.error('Could not fetch', err);
      });
  
    return (
      <>
        <div>Hello, world!</div>
      </>
    );
  }
}
