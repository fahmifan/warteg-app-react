import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

import axios from '../../../axios';
import * as actions from '../actionDetails';

const ReviewWrapper = styled.div`
  height: 8rem;
  width: 16rem;
  position: relative;
  margin: auto;
  margin-top: 1.5rem;
  box-sizing: border-box;
  border-radius: 5px;
  /*background-color: #f2f2f2;*/
`

const Input = styled.textarea`
  width: 100%;
  type: text;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-bottom: 1.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #eee;
  transition: all 0.20s ease-in-out;
  &:focus {
    border-bottom: 1px solid rgba(81, 203, 238, 1);
    box-shadow: 0 2px 2px -2px rgba(81, 203, 238, 1);
  }
`

const StarRate = styled(StarRatingComponent)`
  label > i {
    font-size: 2.5rem; 
  }
`

const SendButton = styled.button`
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  outline: none;
`

class Review extends Component {
  state = {
    score: 0,
    review: ''
  }
 
  onInputChange = (event) => {
    this.setState({review: event.target.value})
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }

  render() {
    const {rating} = this.state;
    return (
      <ReviewWrapper className="flex flex-wrap justify-center font-nunito">
        <StarRate 
          name="rate1" 
          starCount={5}
          value={rating}
          emptyStarColor='#eee'
          onStarClick={this.onStarClick.bind(this)}
        />
        <Input 
          placeholder="Beri ulasan" 
          className="bg-wg-white font-nunito wg-black"
          onChange={(e) => this.onInputChange(e)} />
        <SendButton
          className="bg-wg-white font-nunito-bold wg-blue dim pointer"
        >Kirim</SendButton>
      </ReviewWrapper>
    );    
  }  
}
export default Review;