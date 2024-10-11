import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  debounce = (fn, debounceTime) => {
    let timeout;
    return function (...args) {
      const context = this;
      const fnCall = () => {
        fn.apply(this, arguments);
      };

      clearTimeout(timeout);

      timeout = setTimeout(fnCall, debounceTime);
    };
  };

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  };

  func() {
    this.debounce(this.onInputChange, 1000);
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
