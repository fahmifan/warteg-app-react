import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import SearchField from '../components/SearchField';
import StreetFoodCard from '../components/StreetFoodCard';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

import img from '../assets/pics/nasi-goreng-kambing.jpg';

export default class Home extends Component {
 
  state = {
    isSignedPage: false
  }

  loginClicked = () => {
    this.setState({isSignedPage: !this.state.isSignedPage})
  }

  render() {
    return (
      <div className="h-100 bg-wg-white">
        <Navbar isSignedPage={this.state.isSignedPage} clicked={this.loginClicked} />
        <p className="f2 mt4 mb3 tc font-nunito-bold wg-black">Jatinangor</p>
        <div className="mb4">
          <SearchField />
        </div>
        <div className="flex flex-wrap justify-center">
          <FoodCard img={img} />
          <FoodCard img={img} />
          <FoodCard img={img} />

          <StreetFoodCard img={img}>Sayang</StreetFoodCard>
          <StreetFoodCard img={img}>Jalan Kol A Syam</StreetFoodCard>
          <StreetFoodCard img={img}>Ciseke Besar</StreetFoodCard>
          <StreetFoodCard img={img}>Sukawening</StreetFoodCard>
        </div>
        <Footer />
      </div>
    )
  }
}