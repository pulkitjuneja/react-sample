import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Details extends Component {
  render () {
    return (
      <div >
        <p>{this.props.location.state.description}</p>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.object
};

Details.defaultProps = {
  location: {
    state: {
      description: 'Default description!'
    }
  }
};

export default Details;
