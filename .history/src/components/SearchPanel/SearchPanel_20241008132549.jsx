import React from 'react';
import { debounce } from 'lodash';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: 'wolverineA',
  };

  delayedUpdateRequest = debounce(() => {
    this.props.updateRequest(this.state.inputValue);
  }, 1000);

  onInputChange = (value) => {
    this.setState({
      inputValue: value,
    });
    if (this.state.inputValue !== null || this.state.inputValue !== '') {
      this.props.cleanData();
      this.delayedUpdateRequest();
    }
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
