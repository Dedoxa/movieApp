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

  debounce = (fn, debounceTime) => {
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
          onChange={this.debounce(this.onInputChange, 500)}
          value={inputValue}
        ></input>
      </form>
    );
  }
}
