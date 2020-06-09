import React from 'react';

const MovieItem = props => {
  return <div style={styles.item}>{props.title}</div>;
};

const styles = {
  item: {
    listStyle: 'none',
    padding: 25,
    border: '1px solid #CCCCCC',
    fontFamily: 'Arial, sans-serif'
  }
};

export default MovieItem;
