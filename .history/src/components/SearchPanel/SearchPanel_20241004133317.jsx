import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: 'fg',
  };

  onInputChange = (e) => {
    console.log(e.target);
    this.setState({
      inputValue: e.target,
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form>
        <input
          type="text"
          className="searchInput"
          placeholder="Type to search"
          onChange={this.onInputChange}
        ></input>
      </form>
    );
  }
}
