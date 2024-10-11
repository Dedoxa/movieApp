import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    value: 'fg',
  };

  onInputChange = (e) => {}

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
