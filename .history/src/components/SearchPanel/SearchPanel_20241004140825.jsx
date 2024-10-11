import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: '',
  };

  // debounce = (fn, debounceTime) => {
  //   let timeout;
  //   return function () {
  //     const fnCall = () => {
  //       fn.apply(this, arguments);
  //     };

  //     clearTimeout(timeout);

  //     timeout = setTimeout(fnCall, debounceTime);
  //   };
  // };

  debounce = (fn, debounceTime) => {
    let timer;
    return function(...args) {

      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      })
    }
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
