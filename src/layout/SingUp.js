import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auxi from '../hoc/Auxi';
import NavBar from '../components/Navbar';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Footer from '../components/Footer';

class SignUp extends Component {
  
  backArrowClicked = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Auxi>
        <NavBar 
          isBack={true}
          clicked={this.backArrowClicked} 
          link={'/'} />
        <header className="f1 tc font-nunito wg-black pt4"> 
          Daftar</header>
        <main className="center vh-75">
          <InputField placeholder="Nama Lengkap" />
          <InputField placeholder="Email" />
          <InputField placeholder="Kata Sandi" />
          <Button>Daftar</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5 no">
            Sudah punya akun ? Yuk <Link to="/signin" className="link dim wg-blue">Masuk</Link></p>
        </main>
        <Footer />
      </Auxi>
    );
  }
}

export default SignUp;

