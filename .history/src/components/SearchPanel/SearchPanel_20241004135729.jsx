import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  debounce(fn, debounceTime) {
    let timeout;
    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };

      clearTimeout(timeout);

      timeout = setTimeout(fnCall, debounceTime);
    };
  }

  // func(e) {
  //   console.log(e.target.value);
  //   this.setState({
  //     inputValue: e.target.value,
  //   });
  // }

  onInputChange = (e) => {
    this.debounce(console.log(e.target.value), 1000);
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
