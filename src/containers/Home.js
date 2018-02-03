import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Input from '../components/Input';

export default class Home extends Component {
  render() {
    return (
      <div className="h-100 bg-wg-white">
        <Navbar />
        <p className="f2 mt4 mb3 tc font-nunito-bold wg-black">Jatinangor</p>
        <Input />
      </div>
    )
  }
}