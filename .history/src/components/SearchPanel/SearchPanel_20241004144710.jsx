import React from 'react';
import { debounce } from 'lodash';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: 'wolverine',
  };

  onInputChange = debounce((value) => {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  }, 500);

  render() {
    const { inputValue } = this.state;

    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={(e) => this.onInputChange(e.target.value)}
          value={inputValue}
        ></input>
      </form>
    );
  }
}
