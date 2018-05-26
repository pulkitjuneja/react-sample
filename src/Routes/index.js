import App from '../Components/App/App';
import Details from '../Components/Details';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/details' component={Details}/>
      </Switch>
    );
  }
}

export default Router;