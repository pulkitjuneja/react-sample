import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

const Button = (props) => (
  <button className='Button' onClick={props.onClick}>{props.title}</button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
