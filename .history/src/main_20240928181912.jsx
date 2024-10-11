import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const getResource = async (url) => {
  const res = await fetch(url);
  const body = await res.json();
  return body;
}

getResource('https://swapi.co/api/people/1/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    
  })

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
