import React from "react";

export default class TMDBService extends React.Component {
  async getResource(url) {
    const res = await fetch(url, this.options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
      return await res;
  } 
}