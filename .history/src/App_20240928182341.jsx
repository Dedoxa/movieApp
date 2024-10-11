import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error()
    }

    const body = await res.json();
    return body;
  }
  
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

export default App;
