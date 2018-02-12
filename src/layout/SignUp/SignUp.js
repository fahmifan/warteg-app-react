import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Auxi from '../../hoc/Auxi';
import NavBar from '../../components/Navbar';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import axios from '../../axios';

const Form = styled.form`
  margin: auto;
  ${props => props.displayErrors ?
    `input:invalid {
        border: 1px solid #f73772;
     
    }`
    : '' 
  }
`

class SignUp extends Component {
  
  state = {
    res: null,
    invalid: false,
    displayErrors: false,
    form: {
      name: '',
      email: '',
      password: ''
    }
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
    	res: this.toJson(data),
      invalid: false,
      displayErrors: false,
    })

    const newUsers = this.state.res;
    axios({
      method: 'post',
      url: '/users',
      data: newUsers,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then(res => {
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error); 
    })
  }

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
        <Form
          displayErrors={this.state.displayErrors}
          onSubmit={event => this.handleSubmit(event)}
          noValidate 
          className="center vh-75 flex flex-column border-box w-80 center mt3">
          <InputField 
            placeholder="Username"
            name="name" 
            type="text"
            pattern="^[A-Za-z0-9_]{1,15}$"/>
          <InputField 
            placeholder="Email"
            name="email"
            type="email"/>
          <InputField 
            placeholder="Kata Sandi"
            name="password"
            type="password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"/>
          <Button type="submit">Daftar</Button>
          <p className="tc ma0 pt3 font-nunito wg-black f5 no">
            Sudah punya akun ? Yuk <Link to="/signin" className="link dim wg-blue">Masuk</Link></p>
        </Form>
        <Footer />
      </Auxi>
    );
  }
}

export default SignUp;

