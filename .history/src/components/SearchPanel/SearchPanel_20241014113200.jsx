import React from 'react';
import { debounce } from 'lodash';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    inputValue: this.props.searchText,
  };

  componentDidMount() {
    this.inputRef.focus();
  }

  delayedCleanAndUpdateData = debounce(() => {
    this.props.cleanData();
    this.props.updateRequest(this.state.inputValue);
  }, 1000);

  onInputChange = (value) => {
    this.setState({
      inputValue: value,
    });
    if (!this.state.inputValue || this.state.inputValue.trim() !== '') {
      this.delayedCleanAndUpdateData();
    }
  };

  render() {
    const { inputValue } = this.state;

    return (
      <form>
        <input
          ref={(inputRef) => (this.inputRef = inputRef)}
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
