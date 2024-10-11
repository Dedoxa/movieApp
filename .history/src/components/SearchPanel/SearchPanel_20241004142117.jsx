import React from 'react';
import { debounce } from "lodash"
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  func() {
    debounce(this.onInputChange, 1000)
  }

  render() {
    const { inputValue } = this.state;

    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={this.func}
          value={inputValue}
        ></input>
      </form>
    );
  }
}
