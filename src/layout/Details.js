import React, { Component } from 'react';
import styled from 'styled-components';

import Auxi from '../hoc/Auxi';
import NavbarSignedIn from '../components/NavbarSignedIn';
import Footer from '../components/Footer';
import Image from '../components/Image';
import stars from '../assets/icon/5-stars.svg';
import checkList from '../assets/icon/checklist-circle.svg';

import img from '../assets/pics/nasi-goreng-kambing.jpg';
import maps from '../assets/pics/map.png';
import noDisplayPic from '../assets/icon/noDisplayPic.svg';

const FoodImageWrapper = styled.div`
  weight: 100%;
  height: 8rem;
  z-index: 100;
`

const FoodImage = Image.extend`
  border-radius: 0;
`

const Menu = styled.table`
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

const CommentWrapper = styled.div`
  height: 8rem;
  width: 16rem;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #f2f2f2;
`

class Details extends Component {
  render() {
    return (
      <Auxi>
        <NavbarSignedIn />
        <main className="db">
          <FoodImageWrapper>
            <FoodImage img={img}/>
          </FoodImageWrapper>
          {/*Menu*/}
          <section>
            <div className="relative db h3 w-100">
              <span className="absolute left-1 top-1 font-nunito-bold f3 wg-black">Hipotesa</span>
              <span className="absolute left-1 top-2 font-nunito mt3 wg-black">Jln Kol A.Syam</span>
              <span className="absolute right-1 top-1 mr1 f3 wg-yellow font-nunito-bold">4.3</span>
              <span className="absolute top-2 right-1 mt1"><img src={stars} alt="rating" /></span>
            </div>
            <div className="relative db w-100 mt3">
              <span className="pl3 pt3 mt3 f3 wg-black font-nunito-bold pb2">Menu</span>
              <section className="relative bt b--black-20 w-90 mt3 ph3 pt3 center font-nunito wg-black">
                <Menu>
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
                </Menu>
                <Menu className="mt3 mb2">
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
                </Menu>
              </section>
            </div>
          </section>
          {/*About*/}
          <section className="pt3">
            <span className="pl3 pt3 mt3 f3 wg-black font-nunito-bold">About</span>
            <section className="relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black">
              <div className="relative flex items-center pt2">
                <img src={checkList} alt="v" />
                <span className="pl2">0822 xxxx xxxx</span>
              </div>
              <div className="relative flex items-center pt2">
                <img src={checkList} alt="v" />
                <span className="pl2">Delivery</span>
              </div>
              <div className="relative flex items-center pt2">
                <img src={checkList} alt="v" />
                <span className="pl2">24 Jam</span>
              </div>
              <div className="relative flex items-center pt2">
                <img src={checkList} alt="v" />
                <span className="pl2">Indoor / Outdoor</span>
              </div>
            </section>
          </section>
          {/*Maps*/}
          <section>
            <Maps img={maps} />
          </section>
          {/*Ulasan*/}
          <section className="pt3">
            <span className="pl3 pt3 mt3 f3 wg-black font-nunito-bold">Ulasan</span>
            {/*Comment Card*/}
            <section className="relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black">            
              <CommentWrapper className="shadow-4">
                <div className="flex items-center">
                  <img src={noDisplayPic}
                    className="relative left-0 pt1 pl1 di" />
                  <span className="f4 di pl1 pt1">John Doe</span>
                </div>
                <p className="relative ma0 ph2 pv1 f6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim, bibendum sed justo quis...</p>
                <a className="relative ma0 f7 pl2 wg-blue">Read more</a>
              </CommentWrapper>
            </section>
            {/*Comment Card*/}
            <section className="relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black">            
              <CommentWrapper className="shadow-4">
                <div className="flex items-center">
                  <img src={noDisplayPic}
                    className="relative left-0 pt1 pl1 di" />
                  <span className="f4 di pl1 pt1">John Doe</span>
                </div>
                <p className="relative ma0 ph2 pv1 f6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim, bibendum sed justo quis...</p>
                <a className="relative ma0 f7 pl2 wg-blue">Read more</a>
              </CommentWrapper>
            </section>
            {/*Comment Card*/}
            <section className="relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black">            
              <CommentWrapper className="shadow-4">
                <div className="flex items-center">
                  <img src={noDisplayPic}
                    className="relative left-0 pt1 pl1 di" />
                  <span className="f4 di pl1 pt1">John Doe</span>
                </div>
                <p className="relative ma0 ph2 pv1 f6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim, bibendum sed justo quis...</p>
                <a className="relative ma0 f7 pl2 wg-blue">Read more</a>
              </CommentWrapper>
            </section>
            {/*Comment Card*/}
            <section className="relative bt b--black-20 w-90 mt3 ph3 pv3 center font-nunito wg-black">            
              <CommentWrapper className="shadow-4">
                <div className="flex items-center">
                  <img src={noDisplayPic}
                    className="relative left-0 pt1 pl1 di" />
                  <span className="f4 di pl1 pt1">John Doe</span>
                </div>
                <p className="relative ma0 ph2 pv1 f6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor enim, bibendum sed justo quis...</p>
                <a className="relative ma0 f7 pl2 wg-blue">Read more</a>
              </CommentWrapper>
            </section>            
          </section>
        </main>
      </Auxi>
    );
  }
}

export default Details;