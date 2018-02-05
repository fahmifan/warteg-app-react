import React, { Component } from 'react';

import Auxi from '../hoc/Auxi';
import NavbarSignedIn from '../components/NavbarSignedIn';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

import img from '../assets/pics/nasi-goreng-kambing.jpg';

class HomeSignedIn extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSignedIn />
        <main className="h-100 flex flex-wrap justify-center">
          <FoodCard img={img} />
          <FoodCard img={img} />
          <FoodCard img={img} />
          <FoodCard img={img} />
          <FoodCard img={img} />
        </main>
        <Footer />
      </Auxi>
    );
  }
}

export default HomeSignedIn;