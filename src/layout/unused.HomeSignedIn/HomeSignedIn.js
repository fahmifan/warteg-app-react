import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import Auxi from '../../hoc/Auxi';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import FoodCard from '../../components/FoodCard';
import Footer from '../../components/Footer';
import * as actions from './actionHomeSignedIn';

import img from '../../assets/pics/nasi-goreng-kambing.jpg';

class HomeSignedIn extends Component {
  
  componentDidMount() {
    this.props.fetchingRestos()
  }

  foodCardClicked = (path) => {
    this.props.history.push(`/details${`/${path}`}`)
  }

  dpClicked = () => {
    console.log('dp clicked should be accordion')
  }

  render() {
    return (
      <Auxi>
        <NavbarSignedIn isBack={false} homeClicked={'/home'} dpClicked={this.dpClicked} />
        <main className="h-100 flex flex-wrap justify-center">
          <FoodCard img={img} clicked={() => this.foodCardClicked('hipotesa')} />
          <FoodCard img={img} clicked={() => this.foodCardClicked('rahayu')} />
          <FoodCard img={img} clicked={() => this.foodCardClicked('family')} />
          <FoodCard img={img} clicked={() => this.foodCardClicked('dechick')} />
          <FoodCard img={img} clicked={() => this.foodCardClicked('warsub')} />
        </main>
        <Footer />
      </Auxi>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    restos: state.homesignedin.restos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingRestos: () => dispatch(actions.fetching())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSignedIn);