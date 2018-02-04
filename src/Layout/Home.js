import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import Input from '../components/Input';
import FoodCard from '../components/FoodCard';

import img from '../assets/pics/nasi-goreng-kambing.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="h-100 bg-wg-white">
        <Navbar />
        <p className="f2 mt4 mb3 tc font-nunito-bold wg-black">Jatinangor</p>
        <div className="mb4">
          <Input />
        </div>
        <div className="flex flex-wrap justify-center">
          <FoodCard img={img}>Sayang</FoodCard>
          <FoodCard img={img}>Jalan Kol A Syam</FoodCard>
          <FoodCard img={img}>Ciseke Besar</FoodCard>
          <FoodCard img={img}>Sukawening</FoodCard>
        </div>
      </div>
    )
  }
}