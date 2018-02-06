import React, { Component } from 'react';

import Auxi from '../hoc/Auxi';
import NavBar from '../components/Navbar';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Footer from '../components/Footer';

class SignIn extends Component {
  
  backArrowClicked = () => {
    this.props.history.push('/')
  }

  masukBtnClicked = () => {

  }

  daftarClicked = () => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <Auxi>
        <NavBar 
          link={'/'} 
          isBack={true} 
          clicked={this.backArrowClicked}/>
        <header className="f1 tc font-nunito wg-black pt4"> 
          Masuk</header>
        <main className="center vh-75">
          <InputField placeholder="Email" />
          <InputField placeholder="Kata Sandi" />
          <Button clicked={this.masukBtnClicked}>Masuk</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5">
            Belum mendaftar? <span onClick={this.daftarClicked} className="link dim wg-blue">Daftar</span> Sekarang</p>
        </main>
        <Footer />
      </Auxi>
    );
  }
}

export default SignIn;

