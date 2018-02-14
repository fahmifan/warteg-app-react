import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxi from '../../hoc/Auxi';
import NavBar from '../../components/Navbar';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import * as actions from '../../store/auth/authAction';

class SignIn extends Component {

  state = {
    cred: null,
    invalid: false,
    displayErrors: false,
  }

  backArrowClicked = () => {
    this.props.history.push('/')
  }

  daftarClicked = () => {
    this.props.history.push('/signup')
  }

  inputParsers = {
    date(input) {
      const split = input.split('/');
      const day = split[1]
      const month = split[0];
      const year = split[2];
      return `${year}-${month}-${day}`;
    },
    uppercase(input) {
      return input.toUpperCase();
    },
    number(input) {
      return parseFloat(input);
    },
  };

  toJson = (fd) => {
    const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
    }
    return data;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
    	this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }
    const form = event.target;
    const data = new FormData(form);

    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;
      if (parserName) {
        const parsedValue = this.inputParsers[parserName](data.get(name))
        data.set(name, parsedValue);
      }
    }
    this.setState({
    	cred: this.toJson(data),
      invalid: false,
      displayErrors: false,
    });

    this.props.onLogin(this.toJson(data));
  }

  componentDidUpdate() {
    if(this.props.isLogedIn) {
      this.props.history.push('/');
    }
  }

  componentDidMount() {
    if(this.props.isLogedIn) {
      this.props.history.push('/');
    }
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
        <form
          onSubmit={event => this.handleSubmit(event)} 
          className="center vh-75 flex flex-column border-box w-80 center mt3">
          <InputField 
            placeholder="Email"
            name="email"
            type="email" />
          <InputField 
            placeholder="Kata Sandi"
            name="password"
            type="password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"/>
          <Button type="submit">Masuk</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5">
            Belum mendaftar? <span onClick={this.daftarClicked} className="link dim wg-blue">Daftar</span> Sekarang</p>
        </form>
        <Footer />
      </Auxi>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isLogedIn: state.auth.isLogedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (cred) => dispatch(actions.login(cred))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

