import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom' 

import Auxi from './hoc/Auxi';
import Homepage from './layout/Homepage/Homepage';
import SignIn from './layout/SignIn/SignIn';
import SignUp from './layout/SignUp/SignUp';
import HomeSignedIn from './layout/HomeSignedIn/HomeSignedIn';
import Details from './layout/Details/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={HomeSignedIn} />
          <Route path="/details" component={Details} />
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>  
    );
  }
}

export default App;
