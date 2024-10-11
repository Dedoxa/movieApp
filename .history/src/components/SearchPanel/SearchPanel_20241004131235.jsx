import React from "react";
import "./SearchPanel.css";

export default class SearchPanel extends React.Component {
  state = {
    value: "",
  };

  onInput() {}

  render() {
    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={() => {
            console.log(this.state.value);
          }}
        ></input>
      </form>
    );
  }
}
