import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  onInputChange = (e) => {
    console.log(e.target);
    this.setState({
      inputValue: e.target,
    });
  };

  render() {
    return (
      <form>
        <input type="text" className="searchInput" placeholder="Type to search" onChange={this.onInputChange}></input>
      </form>
    );
  }
}
