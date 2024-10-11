import React from 'react';
import { debounce } from 'lodash';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: 'wolverineA',
  };

  delayedUpdateRequest = debounce(() => {
    this.props.updateRequest(this.state.inputValue);
  }, 500);

  onInputChange = (value) => {
    this.setState({
      inputValue: value,
    });
    this.delayedUpdateRequest();
  };

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
