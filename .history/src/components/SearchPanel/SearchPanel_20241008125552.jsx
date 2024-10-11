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

  onInputChange = debounce((value) => {
    this.setState({
      inputValue: value,
    });
  }, 500);

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      this.props.updateRequest(this.state.inputValue);
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
