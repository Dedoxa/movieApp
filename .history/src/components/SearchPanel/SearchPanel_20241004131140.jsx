import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {

  onInput() {

  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={() => {console.log(value)}}
        ></input>
      </form>
    );
  }
}
