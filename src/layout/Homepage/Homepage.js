import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import SearchField from '../../components/SearchField';
import StreetFoodCard from '../../components/StreetFoodCard';
import FoodCard from '../../components/FoodCard';
import Spinner from '../../components/Spinner';
import Footer from '../../components/Footer';
import * as actions from './actionHomepage';

import img from '../../assets/pics/nasi-goreng-kambing.jpg';

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

  componentDidMount() {
    this.props.fetchRestos();
  }

  render() {
    let restos = <Spinner />;
    if(this.props.restos) {
      restos = this.props.restos.map(resto => <FoodCard
          key={resto.id}
          name={resto.name}
          address={resto.address}
          reviewer={resto.reviewer}
          rating={resto.rating}
          img={img}
          isOpen={resto.isOpen}
          clicked={this.cardClicked}
         />
      );  
    }

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
          {restos}
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restos: state.homepage.restos,
    loading: state.homepage.loading,
    error: state.homepage.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestos: () => dispatch(actions.fetchResto())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);