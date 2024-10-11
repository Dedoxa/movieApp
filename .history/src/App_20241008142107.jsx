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
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
  };

  TMDB = new TMDBService();

  componentDidMount() {
    this.getData(`&query=${this.state.searchText}`, this.state.currentPage);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText || prevState.currentPage !== this.state.currentPage) {
      this.getData(`&query=${this.state.searchText}`, this.state.currentPage);
    }
  }

  replaceSearchText = (newText) => {
    this.setState({
      searchText: newText,
      currentPage: 1,
    });
  };

  getData(query, page) {
    this.TMDB.getResource(`${query}&page=${page}`).then((res) => {
      this.setState({
        data: res,
        totalPages: res.total_pages,
        totalResults: res.total_results,
      });
    });
  }

  cleanData = () => {
    this.setState({
      data: null,
    });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data, currentPage, totalPages, totalResults } = this.state;

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
          <Pagination
            align="center"
            current={currentPage}
            pageSize={this._CardsPerPage}
            total={totalResults}
            onChange={this.handlePageChange}
            showSizeChanger={false}
            pageSizeOptions={[]}
            showTotal={(total) => `Total ${total} items`}
            hideOnSinglePage={true}
            // total={totalPages * this._CardsPerPage}
            /* __Используем общее количество страниц для ограничения пагинации__ */
          />
          <div className="cardsArea">
            {data.results.map((movie) => (
              <FilmCard key={movie.id} data={movie} />
            ))}
          </div>
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
