import React from 'react';

import MovieItem from './MovieItem.jsx';

const MovieList = props => {
  const listItems = props.movies.map(movie => (
    <MovieItem
      key={movie.title.split(' ').join('').toLowerCase()}
      title={movie.title}
    />
  ));

  if (!props.movies.length) {
    return (
      <h1 style={{ textAlign: 'center' }}>No movie by that name found.</h1>
    );
  }

  return <ul style={styles.list}>{listItems}</ul>;
};

const styles = {
  list: {
    marginTop: 30,
    padding: 0,
    border: '1px solid #CCCCCC',
    borderBottom: 'none'
  }
};

export default MovieList;
