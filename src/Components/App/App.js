import Button from '../Button';
import MovieDetails from '../MovieDetails';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import * as services from '../../Services/api';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        description: ''
      }
    }; 
  }

  componentDidMount () {
    services.getFirstMovie()
      .then((response) => {
        this.setState({
          movie: {
            title: response.data.title,
            description: response.data.description
          }
        });
      });
  }
  
  onClicked = () => () => {
    services.getRandomMovie()
      .then((response) => {
        this.setState({
          movie: {
            title: response.data.title,
            description: response.data.description
          }
        });
      });
  }
  redirect = (description) => () => {
    this.props.history.push({
      pathname: '/details',
      state: {
        description
      }
    });
  }
  
  render () {
    return (
      <div className='AppContainer'>
        <MovieDetails movie={this.state.movie} />
        <Button title='Fetch' onClick={this.onClicked()} />
        <Button title='Details' onClick={this.redirect(this.state.movie.description)} />
      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.object
};

export default App;
