import React from 'react';
import { debounce } from "lodash"
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = debounce((e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }, 1000);

  render() {
    const { inputValue } = this.state;

    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={(e) => this.onInputChange(e)}
          value={inputValue}
        ></input>
      </form>
    );
  }
}
