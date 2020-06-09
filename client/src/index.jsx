import React from 'react';
import ReactDOM from 'react-dom';

import MovieList from './components/MovieList.jsx';
import movieData from '../../data/dummy-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState({
      movies: movieData
    });
  }

  render() {
    return (
      <div>
        <h1>MovieList</h1>
        <div>
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
