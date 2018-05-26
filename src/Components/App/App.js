import Button from '../Button';
import MovieDetails from '../MovieDetails';
import React, {Component} from 'react';
import * as services from '../../Services/api';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movie: {
        title: 'Default',
        description: 'Some default bullshit.'
      }
    }; 
  }
  
  onClicked = () => () => {
    services.getMovie()
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
      <div>
        <MovieDetails movie={this.state.movie} />
        <Button title='Fetch' onClick={this.onClicked()} />
      </div>
    );
  }
}

export default App;
