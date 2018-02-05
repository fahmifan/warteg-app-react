import React, { Component } from 'react';

import Auxi from '../hoc/Auxi';
import NavBar from '../components/Navbar';
import InputField from '../components/InputField';
import Button from '../components/Button';

class SignUp extends Component {
  render() {
    return (
      <Auxi>
        <NavBar isSignedPage={true} />
        <header className="f1 tc font-nunito wg-black pt4"> 
          Daftar</header>
        <main className="center">
          <InputField placeholder="Nama Lengkap" />
          <InputField placeholder="Email" />
          <InputField placeholder="Kata Sandi" />
          <Button>Daftar</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5 no">
            Sudah punya akun ? Yuk <a href="#" className="link dim wg-blue">Masuk</a></p>
        </main>
      </Auxi>
    );
  }
}

export default SignUp;

