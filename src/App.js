import React, { Component } from 'react';

import Auxi from './hoc/Auxi';
import Homepage from './layout/Homepage';
import SignIn from './layout/SignIn';
import SignUp from './layout/SingUp';
import HomeSignedIn from './layout/HomeSignedIn';

class App extends Component {
  render() {
    return (
      <Auxi>
        {
          // <Homepage />
          // <SignIn />
          // <SignUp />
          <HomeSignedIn />
        }  
      </Auxi>
    );
  }
}

export default App;
