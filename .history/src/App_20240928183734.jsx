import { useState } from "react";
import "./App.css";

export default class App extends React.Component {

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
    return res.results //results может быть специфичным для SWAPI
  }

  getOneSmth(id) {
    return this.getResource(`/people/${id}/`);
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

const yapiAPI = new App();
yapiAPI.getAllSmth().then((body) => {
  console.log(body)
})
