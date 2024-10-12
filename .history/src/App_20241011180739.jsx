import React from 'react';
import './App.css';
import { Alert, Spin, Pagination, Button, Tabs } from 'antd';

import FilmCard from './components/FilmCard/FilmCard.jsx';
import TMDBService from './components/TMDBService/TMDBService.jsx';
import SearchPanel from './components/SearchPanel/SearchPanel.jsx';

const { Provider, Consumer } = React.createContext();
export { Provider, Consumer };

export default class App extends React.Component {
  state = {
    data: null,
    searchText: '',
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    genresList: null,
    ratedMovies: JSON.parse(localStorage.getItem('ratedMovies')) || [],
  };

  TMDB = new TMDBService();

  _CardsPerPage = 10;

  _tabs = [
    {
      key: '1',
      label: 'Search',
      children: null,
    },
    {
      key: '2',
      label: 'Rated',
      children: null,
    },
  ];

  handleTabChange = (activeKey) => {
    if (activeKey === '2') {
      this.setState({ searchText: '' });
    }
  };

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
    this.TMDB.getMovies(`${query}&page=${page}`).then((res) => {
      this.setState({
        data: res,
        totalPages: res.total_pages,
        totalResults: res.total_results,
      });
    });
  }

  getGenreList() {
    this.TMDB.getResource('https://api.themoviedb.org/3/genre/movie/list?language=en').then((res) => {
      this.setState({
        genresList: res,
      });
    });
    console.log(this.state.genresList);
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

    const ratedMovies = JSON.parse(localStorage.getItem('ratedMovies')) || [];

    if (this.state.genresList === null) {
      this.getGenreList();
    }

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
          <Tabs className="pageTabs" defaultActiveKey="1" centered items={this._tabs} />
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
          <Provider value={this.state.genresList.genres}>
            <Tabs
              className="pageTabs"
              defaultActiveKey="1"
              centered
              items={this._tabs}
              onChange={this.handleTabChange}
            />
            {activeKey === '1' ? (
              <>
                <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
                {/* Компоненты для страницы поиска */}
              </>
            ) : (
              <div className="cardsArea">
                {ratedMovies.length > 0 ? (
                  ratedMovies.map((movie) => (
                    <FilmCard key={movie.id} data={movie} genresList={this.state.genresList.genres} />
                  ))
                ) : (
                  <div>No rated movies yet</div>
                )}
              </div>
            )}
            <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
            <Pagination
              align="center"
              current={currentPage}
              pageSize={this._CardsPerPage}
              total={totalPages * this._CardsPerPage}
              onChange={this.handlePageChange}
              showSizeChanger={false}
              pageSizeOptions={[]}
              showTotal={() => `Found ${totalResults} movies`}
              hideOnSinglePage={true}
            />
            <div className="cardsArea">
              {data.results.map((movie) => (
                <FilmCard key={movie.id} data={movie} genresList={this.state.genresList.genres} />
              ))}
            </div>
            <Button
              size="large"
              onClick={() => {
                scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Go up
            </Button>
          </Provider>
        </main>
      );
    } else {
      return (
        <main>
          <Tabs className="pageTabs" defaultActiveKey="1" centered items={this._tabs} />
          <SearchPanel cleanData={this.cleanData} updateRequest={this.replaceSearchText} />
          <div className="emptyRequest">Nothing is found</div>
        </main>
      );
    }
  }
}
