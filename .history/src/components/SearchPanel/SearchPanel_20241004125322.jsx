import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {
  render() {
    return (
      <form>
        <input
            type="text"
            className="searchInput"
            placeholder="Type to search">
        </input>
      </form>
    );
  }
}
