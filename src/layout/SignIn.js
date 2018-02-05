import React, { Component } from 'react';

import Auxi from '../hoc/Auxi';
import NavBar from '../components/Navbar';
import InputField from '../components/InputField';
import Button from '../components/Button';

class SignIn extends Component {
  render() {
    return (
      <Auxi>
        <NavBar isSignedPage={true} />
        <header className="f1 tc font-nunito wg-black pt4"> 
          Masuk</header>
        <main className="center">
          <InputField placeholder="Email" />
          <InputField placeholder="Kata Sandi" />
          <Button>Masuk</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5">
            Belum mendaftar? <span className="link dim wg-blue">Daftar</span> Sekarang</p>
        </main>
      </Auxi>
    );
  }
}

export default SignIn;

