import React from 'react';
import ReactDOM from 'react-dom';

import MovieList from './components/MovieList.jsx';
import TextInput from './components/TextInput.jsx';
import movieData from '../../data/dummy-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMovies: [],
      displayedMovies: []
    };

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.setState({
      allMovies: movieData,
      displayedMovies: movieData
    });
  }

  search(query) {
    this.setState({
      displayedMovies: this.state.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    });
  }

  render() {
    return (
      <div>
        <h1 style={styles.title}>MovieList</h1>
        <div style={styles.container}>
          <TextInput
            placeholder='Search...'
            submitText='Go!'
            submitHandler={this.search}
          />
          <MovieList movies={this.state.displayedMovies} />
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
  },
  container: {
    width: '90%',
    margin: 'auto',
    padding: 0
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
