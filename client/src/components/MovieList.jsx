import React from 'react';

import MovieItem from './MovieItem.jsx';

const MovieList = props => {
  const listItems = props.movies.map(movie => <li>{movie.title}</li>);

  return <ul>{listItems}</ul>;
};

export default MovieList;
