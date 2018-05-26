import Button from '../Button';
import MovieDetails from '../MovieDetails';
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
  render () {
    return (
      <div className='AppContainer'>
        <MovieDetails movie={this.state.movie} />
        <Button title='Fetch' onClick={this.onClicked()} />
      </div>
    );
  }
}

export default App;
