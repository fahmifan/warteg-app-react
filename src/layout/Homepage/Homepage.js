import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import SearchField from '../../components/SearchField';
import FoodCard from '../../components/FoodCard';
import Spinner from '../../components/Spinner';
import Footer from '../../components/Footer';
import * as actions from './actionHomepage';

import img from '../../assets/pics/nasi-goreng-kambing.jpg';

class Homepage extends Component {
 
  state = {
    isSignedPage: false,
    searched: '',
    isAccordionShowed: false
  }

  loginClicked = () => {
    this.setState({isSignedPage: !this.state.isSignedPage})
  }

  onSearch = (evt) => {
    const searched = evt.target.value;
    this.setState({searched: searched});
  }

  cardClicked = (id) => {
    this.props.history.push(`/restos/${id}`);
  }

  ucFirst = (words) => {
    return words.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  }

  componentDidMount() {
    this.props.fetchRestos();
  }

  dpClicked = () => {
    console.log('dp clicked should be accordion');
    this.setState({isAccordionShowed: !this.state.isAccordionShowed})
  }

  render() {
    let restos = <Spinner />;
    
    if(this.state.searched !== '') {
      const searched = this.state.searched;
      
      const foundRestos = this.props.restos.filter(resto => {
        return resto.name.toLowerCase().indexOf(searched.toLocaleLowerCase()) !== -1 
          || resto.road_name.toLowerCase().indexOf(searched.toLocaleLowerCase()) !== -1
      });

      restos = foundRestos.map(foundResto => <FoodCard 
          name={this.ucFirst(foundResto.name)}
          address={this.ucFirst(foundResto.road_name)}
          reviewer={foundResto.reviewer}
          rating={foundResto.rating}
          img={img}
          isOpen={foundResto.isOpen}
          clicked={() => this.cardClicked(foundResto.id)}
        />)
    }

    else if(this.props.restos) {
      restos = this.props.restos.map(resto => {
        const time = new Date();
        const open = (resto.opening_hour - time.getHours()) > 0;
        const close = (resto.closing_hour - time.getHours()) > 0;
        
        return <FoodCard
          key={resto.id}
          name={this.ucFirst(resto.name)}
          address={this.ucFirst(resto.road_name)}
          reviewer={resto.reviewer}
          rating={resto.avg_rating}
          img={img}
          isOpen={open || close}
          clicked={() => this.cardClicked(resto.id)}
         />
        }
      );  
    }

    return (
      <div className="h-100 bg-wg-white">
        {
          this.props.isLogedIn ? 
            <NavbarSignedIn
              isBack={false} 
              homeClicked={'/'} 
              dpClicked={this.dpClicked} 
              accordShowed={this.state.isAccordionShowed}/>
          : <Navbar 
              isBack={this.state.isSignedPage} 
              clicked={this.loginClicked} 
              link={'/'}/> 
        }
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
    error: state.homepage.error,
    isLogedIn: state.auth.isLogedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestos: () => dispatch(actions.fetchResto())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);