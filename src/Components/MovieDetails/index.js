import PropTypes from 'prop-types';
import React from 'react';

const MovieDetails = (props) => (
  <div>
    <p>Name: {props.movie.title}</p>
    <p>Description: {props.movie.description}</p>
  </div>
);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

export default MovieDetails;
