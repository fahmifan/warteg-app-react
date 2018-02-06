import React, { Component } from 'react';

import Auxi from './hoc/Auxi';
import Homepage from './layout/Homepage';
import SignIn from './layout/SignIn';
import SignUp from './layout/SingUp';
import HomeSignedIn from './layout/HomeSignedIn';
import Details from './layout/Details';

class App extends Component {
  render() {
    return (
      <Auxi>
        {
          // <Homepage />
          // <SignIn />
          // <SignUp />
          // <HomeSignedIn />
          <Details />
        }  
      </Auxi>
    );
  }
}

export default App;
