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
        <h1 style={styles.title}>MovieList</h1>
        <div>
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    backgroundColor: '#F2F2F2',
    fontFamily: 'Arial, sans-serif',
    padding: 25
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
