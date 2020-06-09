import React from 'react';

const MovieItem = props => {
  return <div style={styles.item}>{props.title}</div>;
};

const styles = {
  item: {
    listStyle: 'none',
    padding: 25,
    fontFamily: 'Arial, sans-serif',
    borderBottom: '1px solid #CCCCCC'
  }
};

export default MovieItem;
