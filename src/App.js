import React, { Component } from 'react';

import Auxi from './hoc/Auxi';
import Homepage from './layout/Homepage';
import SignIn from './layout/SignIn';
import SignUp from './layout/SingUp';

class App extends Component {
  render() {
    return (
      <Auxi>
        {
          // <Home />
          <SignIn />
          // <SignUp />
        }  
      </Auxi>
    );
  }
}

export default App;
