import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import SearchField from '../components/SearchField';
import StreetFoodCard from '../components/StreetFoodCard';
import FoodCard from '../components/FoodCard';
import Footer from '../components/Footer';

import img from '../assets/pics/nasi-goreng-kambing.jpg';

class Homepage extends Component {
 
  state = {
    isSignedPage: false,
    searched: ''
  }

  loginClicked = () => {
    this.setState({isSignedPage: !this.state.isSignedPage})
  }

  onSearch = (evt) => {
    console.log(evt.target.value);
    const searched = evt.target.value;
    this.setState({searched: searched});
  }

  cardClicked = (props) => {
    console.log('card clicked');
    this.props.history.push('/details/hipotesa');
  }

  render() {
    return (
      <div className="h-100 bg-wg-white">
        <Navbar 
          isBack={this.state.isSignedPage} 
          clicked={this.loginClicked} 
          link={'/'}/>
        <p className="f2 mt4 mb3 tc font-nunito-bold wg-black">Jatinangor</p>
        <div className="mb4">
          <SearchField typed={(evt) => this.onSearch(evt)} />
        </div>
        <div className="flex flex-wrap justify-center">
          <FoodCard clicked={this.cardClicked} img={img} />
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

export default Homepage;