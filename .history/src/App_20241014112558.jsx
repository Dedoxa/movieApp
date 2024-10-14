import React from 'react';
import './App.css';
import { Alert, Spin, Pagination, Button, Tabs } from 'antd';

import { GenresContextProvider } from './genresContext.jsx';
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
    activeTabKey: '1',
  };

  TMDB = new TMDBService();

  _CardsPerPage = 10;

  componentDidMount() {
    this.getData(`&query=${this.state.searchText}`, this.state.currentPage);
    this.getGenreList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText || prevState.currentPage !== this.state.currentPage) {
      this.getData(`&query=${this.state.searchText}`, this.state.currentPage);
    }
  }

  updateRequest = (newText) => {
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
  }

  cleanData() {
    this.setState({
      data: null,
    });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleTabChange = (key) => {
    this.setState((state) => {
      return {
        ...state,
        activeTabKey: key,
      };
    });
  };

  refreshRatedMovies = (value) => {
    this.setState({
      ratedMovies: value,
    });
  };

  render() {
    const { data, currentPage, totalPages, totalResults, ratedMovies, activeTabKey, searchText } = this.state;

    if (data instanceof Error) {
      const formattedErrorStack = data.stack.slice(data.stack.indexOf(':') + 2);

      return (
        <div className="centralized">
          <span>
            <Alert message={data.name} description={formattedErrorStack} type="error" />
          </span>
        </div>
      );
    }

    const items = [
      {
        key: '1',
        label: 'Search',
      },
      {
        key: '2',
        label: 'Rated',
      },
    ];

    if (activeTabKey === '2') {
      if (ratedMovies.length > 0) {
        return (
          <main>
            <GenresContextProvider value={this.TMDB}>
              <Tabs className="pageTabs" activeKey="2" centered onChange={this.handleTabChange} items={items} />
              <div className="cardsArea">
                {ratedMovies.map((movie) => (
                  <FilmCard
                    key={movie.id}
                    data={movie}
                    refreshRatedMovies={this.refreshRatedMovies}
                    activeTabKey={activeTabKey}
                  />
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
            </GenresContextProvider>
          </main>
        );
      } else {
        return (
          <main>
            <Tabs className="pageTabs" activeKey="2" centered onChange={this.handleTabChange} items={items} />
            <div className="emptyRequest">No rated movies found</div>
          </main>
        );
      }
    }

    if (!data || !data.results) {
      return (
        <main>
          <Tabs className="pageTabs" activeKey={activeTabKey} centered onChange={this.handleTabChange} items={items} />
          <SearchPanel cleanData={this.cleanData} updateRequest={this.updateRequest} searchText={searchText} />
          <div className="centralized">
            <Spin size="large" />
          </div>
        </main>
      );
    }

    if (data.total_results > 0) {
      return (
        <main>
          <GenresContextProvider value={this.TMDB}>
            <Tabs
              className="pageTabs"
              activeKey={activeTabKey}
              centered
              onChange={this.handleTabChange}
              items={items}
            />
            <SearchPanel cleanData={this.cleanData} updateRequest={this.updateRequest} searchText={searchText} />
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
                <FilmCard
                  key={movie.id}
                  data={movie}
                  refreshRatedMovies={this.refreshRatedMovies}
                  activeTabKey={activeTabKey}
                />
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
          </GenresContextProvider>
        </main>
      );
    } else {
      return (
        <main>
          <Tabs className="pageTabs" activeKey={activeTabKey} centered onChange={this.handleTabChange} items={items} />
          <SearchPanel cleanData={this.cleanData} updateRequest={this.updateRequest} searchText={searchText} />
          <div className="emptyRequest">Nothing is found</div>
        </main>
      );
    }
  }
}
