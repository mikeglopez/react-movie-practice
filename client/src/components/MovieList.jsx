import React from 'react';

import MovieItem from './MovieItem.jsx';

const MovieList = props => {
  const listItems = props.movies.map(movie => (
    <MovieItem title={movie.title} />
  ));

  return <ul style={styles.list}>{listItems}</ul>;
};

const styles = {
  list: {
    width: '90%',
    margin: 'auto',
    marginTop: 100,
    padding: 0
  }
};

export default MovieList;
