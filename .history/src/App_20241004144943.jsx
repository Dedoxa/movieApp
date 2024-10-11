import React from 'react';
import './App.css';
import { Alert, Spin } from 'antd';

import FilmCard from './components/FilmCard/FilmCard.jsx';
import TMDBService from './components/TMDBService/TMDBService.jsx';
import SearchPanel from './components/SearchPanel/SearchPanel.jsx';

export default class App extends React.Component {
  state = {
    data: null,
    searchInfo: '',
  };

  TMDB = new TMDBService();
  query = `&query=${this.state.searchInfo}`;
  // query = `&query=ginger%20snaps`;
  // query = `&query=1`;

  componentDidMount() {
    this.getData(this.query);
  }

  // replaceSearchInfo(newInfo) {
  //   this.setState(({ searchInfo }) => {
  //     return {
  //       searchInfo: newInfo,
  //     };
  //   });
  // }

  getData(query) {
    this.TMDB.getResource(query).then((res) => {
      this.setState({
        data: res,
      });
    });
  }

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
        <div className="centralized">
          <Spin size="large" />
        </div>
      );
    }

    return (
      <main>
        <SearchPanel replaceSearchInfo={this.replaceSearchInfo}/>
        <div className="cardsArea">
          {data.results.map((movie) => (
            <FilmCard key={movie.id} data={movie} />
          ))}
        </div>
      </main>
    );
  }
}
