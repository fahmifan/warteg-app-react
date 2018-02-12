import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Auxi from '../../hoc/Auxi';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutList from './subComponents/AboutList';
import CommentSection from './subComponents/CommentSection';
import Image from '../../components/Image';
import stars from '../../assets/icon/5-stars.svg';
import Spinner from '../../components/Spinner';
import Review from './subComponents/Review';
import GoogleMaps from './subComponents/Maps';
import * as actions from './actionDetails';

import img from '../../assets/pics/nasi-goreng-kambing.jpg';

const FoodImageWrapper = styled.div`
  weight: 100%;
  height: 8rem;
  z-index: 100;
`

const FoodImage = Image.extend`
  border-radius: 0;
`

const MenuItems = styled.table`
  border: none;
  margin: auto;
  th {
    border: none;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 0.5rem;
    font-weight: 500;
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
  }
  tr {
    td {
      border: none;
      text-align: center;
      padding-top: 0.5rem;
    }
  }
`

const SectionWrapper = styled.section`
  padding-top: 2rem;
`

const SectionHeading = "pl3 pt3 mt3 f3 wg-black font-nunito-bold pb2";
const SubSection = "relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black";

class Details extends Component {

  state = {
    isAuth: true,
    // location: {
    //   lat: null,
    //   lng: null
    // }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchRestoDetails(id);
    // this.getGeolocation();
  }

  getGeolocation = () => {

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      const {latitude, longitude} = pos.coords;
      this.setState({
        location: {
          lat: latitude,
          lng: longitude
        }
      })
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    
    const geolocation = navigator.geolocation.getCurrentPosition(success, error, options);
    return geolocation;
  }

  wartegAppClicked = () => {
    // if not signed go back to '/' else '/home'
    
    this.props.history.push('/');
  }

  dpClicked = () => {
    console.log('dp clicked should be accordion')
  }

  ucFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const resto = this.props.resto;

    return (
      !this.props.resto ?
      <Spinner /> 
      : <Auxi>
        {
          this.props.isSignedIn ? 
          <NavbarSignedIn homeClicked="/"  dpClicked={this.dpClicked} />
          : <Navbar clicked={this.wartegAppClicked} isBack={false} link={'/'} />
        }
        <main>
          <FoodImageWrapper>
            <FoodImage img={img}/>
          </FoodImageWrapper>

          <div className="relative db h3 w-100 mt2 pa2">
            <span className="absolute left-1 top-1 font-nunito-bold f3 wg-black">{this.ucFirst(resto.name)} </span>
            <span className="absolute left-1 top-2 font-nunito mt3 wg-black">{resto.road_name}</span>
            <span className="absolute right-1 top-1 mr1 f3 wg-yellow font-nunito-bold">{resto.avg_rating.toFixed(1)}</span>
            <span className="absolute top-2 right-1 mt1"><img src={stars} alt="rating" /></span>
          </div>

          {/*Menu*/}
          <SectionWrapper className="relative db w-100 mt2">
            <span className={SectionHeading}>Menu</span>
            <section className={SubSection}>
              <MenuItems>
                <thead>
                  <th>Makanan</th>
                  <th>Harga</th>
                </thead>
                <tbody>
                  {
                    resto.menus
                    .filter(menu => menu.type === 'makanan')
                    .map(menu => {
                      return <tr>
                        <td>{menu.name}</td>
                        <td>{menu.price}</td>
                        </tr> 
                    })          
                  }
                </tbody>
              </MenuItems>      
            
              <MenuItems className="mt3 mb2">
                <thead>
                  <th>Minuman</th>
                  <th>Harga</th>
                </thead>
                <tbody>
                {
                  resto.menus
                  .filter(menu => menu.type === 'minuman')
                  .map(menu => {
                    return <tr>
                      <td>{menu.name}</td>
                      <td>{menu.price}</td>
                      </tr> 
                  })          
                }            
                </tbody>
              </MenuItems>
            </section>
          </SectionWrapper>

          {/*About*/}
          <SectionWrapper>
            <span className={SectionHeading}>About</span>
            <section className={SubSection}>
              <AboutList>{resto.phone}</AboutList>
              <AboutList>{resto.delivery ? 'Delivery' : 'No Delivery'}</AboutList>
              <AboutList>{`Open ${resto.opening_hour} - ${resto.closing_hour}`}</AboutList>
              {resto.others && <AboutList>{resto.others}</AboutList>}
            </section>
          </SectionWrapper>

          <GoogleMaps 
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCQ01ecqDWTYQnMlfK-hMJQ6_twhg8a3dg"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `16rem` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            currCenter={this.props.resto.location}
           />

          {/*Review*/}
          <Review />

          {/*Ulasan*/}
          <SectionWrapper>
            <span className={SectionHeading}>Ulasan</span>
            <section className={SubSection}>
            {
              resto.reviews &&
                resto.reviews.map(review => {
                  return (
                    <CommentSection 
                      displayPic={review.avatar}
                      name={review.name}
                      comment={review.review} />
                  )
                })
              
            }
            </section>
          </SectionWrapper>
        </main>
        <Footer />
      </Auxi>
    );
  }
}

const mapStateToProps = state => {
  return {
    resto: state.details.resto,
    error: state.details.error,
    loading: state.details.loading,
    isSignedIn: state.details.isSignedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestoDetails: (id) => dispatch(actions.fetchResto(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);