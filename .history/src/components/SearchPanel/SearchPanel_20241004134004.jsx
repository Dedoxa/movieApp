import React from 'react';
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

  static debounce = (fn, debounceTime) => {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };
  
      clearTimeout(timeout);
  
      timeout = setTimeout(fnCall, debounceTime);
    };
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
          value={inputValue}
        ></input>
      </form>
    );
  }
}
