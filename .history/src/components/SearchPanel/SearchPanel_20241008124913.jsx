import React from 'react';
import { debounce } from 'lodash';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: 'wolverineA',
  };

  // onInputChange = debounce((value) => {
  //   console.log(value);
  //   this.setState({
  //     inputValue: value,
  //   });
  //   this.props.replaceSearchText(this.state.inputValue);
  // }, 500);

  onInputChange = (value) => {
    console.log(value);
    this.setState({
      inputValue: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      const fn = this.props.updateRequest(this.state.inputValue);
      console.log("componentDidUpdate")
      const func = debounce(fn, 500); //доделать!!!!!!!!!!!!!!!!!
    }
  }

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
