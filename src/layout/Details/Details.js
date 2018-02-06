import React, { Component } from 'react';
import styled from 'styled-components';

import Auxi from '../../hoc/Auxi';
import NavbarSignedIn from '../../components/NavbarSignedIn';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutList from './AboutList';
import CommentSection from './CommentSection';
import Image from '../../components/Image';
import stars from '../../assets/icon/5-stars.svg';

import img from '../../assets/pics/nasi-goreng-kambing.jpg';
import maps from '../../assets/pics/map.png';

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

const Maps = Image.extend`
  height: 16rem;
  border-color: unset;
  border-radius: 0;
`

const SectionWrapper = styled.section`
  padding-top: 2rem;
`

const SectionHeading = "pl3 pt3 mt3 f3 wg-black font-nunito-bold pb2";
const SubSection = "relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black";

class Details extends Component {

  state = {
    isAuth: true
  }

  wartegAppClicked = () => {
    // if not signed go back to '/' else '/home'
    
    this.props.history.push('/');
  }

  dpClicked = () => {
    console.log('dp clicked should be accordion')
  }

  render() {
    const Makanan = (
      <MenuItems>
        <thead>
          <th>Makanan</th>
          <th>Harga</th>
        </thead>
        <tbody>
          <tr>
            <td>Nasi Goreng</td>
            <td>10.000</td>                  
          </tr>
          <tr>
            <td>Indomie</td>
            <td>5.000</td>
          </tr>
          <tr>
            <td>Ayam Rica-rica</td>
            <td>8.000</td>
          </tr>
        </tbody>
      </MenuItems>      
    );

    const Minuman = (
      <MenuItems className="mt3 mb2">
        <thead>
          <th>Minuman</th>
          <th>Harga</th>
        </thead>
        <tbody>
          <tr>
            <td>Josu</td>
            <td>8.000</td>                  
          </tr>
          <tr>
            <td>Milo</td>
            <td>5.000</td>
          </tr>
          <tr>
            <td>Kopi</td>
            <td>2.000</td>
          </tr>
        </tbody>
      </MenuItems>
    );

    return (
      <Auxi>
        {
          this.state.isAuth ? 
          <NavbarSignedIn homeClicked="/home"  dpClicked={this.dpClicked} />
          : <Navbar clicked={this.wartegAppClicked} isBack={true} link={'/'} />
        }
        <main>
          <FoodImageWrapper>
            <FoodImage img={img}/>
          </FoodImageWrapper>

          <div className="relative db h3 w-100 mt2 pa2">
            <span className="absolute left-1 top-1 font-nunito-bold f3 wg-black">Hipotesa</span>
            <span className="absolute left-1 top-2 font-nunito mt3 wg-black">Jln Kol A.Syam</span>
            <span className="absolute right-1 top-1 mr1 f3 wg-yellow font-nunito-bold">4.3</span>
            <span className="absolute top-2 right-1 mt1"><img src={stars} alt="rating" /></span>
          </div>

          {/*Menu*/}
          <SectionWrapper className="relative db w-100 mt2">
            <span className={SectionHeading}>Menu</span>
            <section className={SubSection}>
              {Makanan}
              {Minuman}
            </section>
          </SectionWrapper>

          {/*About*/}
          <SectionWrapper>
            <span className={SectionHeading}>About</span>
            <section className={SubSection}>
              <AboutList>0822 xxxx xxxx</AboutList>
              <AboutList>Delivery</AboutList>
              <AboutList>24 Jam</AboutList>
              <AboutList>Indoor / Outdoor</AboutList>
            </section>
          </SectionWrapper>

          <Maps img={maps} />

          {/*Ulasan*/}
          <SectionWrapper>
            <span className={SectionHeading}>Ulasan</span>
            <section className={SubSection}>
              <CommentSection />
              <CommentSection />
              <CommentSection />
            </section>
          </SectionWrapper>
        </main>
        <Footer />
      </Auxi>
    );
  }
}

export default Details;