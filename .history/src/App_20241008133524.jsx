import React from 'react';
import './App.css';
import { Alert, Spin, Pagination } from 'antd';

import FilmCard from './components/FilmCard/FilmCard.jsx';
import TMDBService from './components/TMDBService/TMDBService.jsx';
import SearchPanel from './components/SearchPanel/SearchPanel.jsx';

export default class App extends React.Component {
  state = {
    data: null,
    searchText: '',
  };

  TMDB = new TMDBService();

  _CardsPerPage = 10;

  componentDidMount() {
    this.getData(`&query=${this.state.searchText}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      this.getData(`&query=${this.state.searchText}`);
    }
  }

  replaceSearchText = (newText) => {
    this.setState({ searchText: newText }, () => {
      console.log(this.state.searchText);
    });
  };

  getData(query) {
    this.TMDB.getResource(query).then((res) => {
      this.setState({
        data: res,
      });
    });
  }

  cleanData = () => {
    this.setState({
      data: null,
    });
  };

  render() {
    const { data } = this.state;

    if (data instanceof Error) {
      const twoDotsIndex = data.stack.indexOf(':');
      const formattedErrorStack = `${data.stack.slice(twoDotsIndex + 2, data.stack.length - 1)}`;

      return (
        <div className="centralized">
          <span>
            <Alert message={data.name} description={formattedErrorStack} type="error" />
          </span>
        </div>
      );
    }

    if (!data || !data.results) {
      return (
        <main>
          <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
          <div className="centralized">
            <Spin size="large" />
          </div>
        </main>
      );
    }

    if (data.total_results > 0) {
      return (
        <main>
          <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
          <div className="cardsArea">
            {data.results.map((movie) => (
              <FilmCard key={movie.id} data={movie} />
            ))}
          </div>
          <Pagination align="center" defaultCurrent={1} total={50} />
        </main>
      );
    } else {
      return (
        <main>
          <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
          <div className="emptyRequest">Nothing is found.</div>
        </main>
      );
    }
  }
}
