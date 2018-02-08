import React, { Component } from 'react';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const ReviewWrapper = styled.div`
  height: 8rem;
  width: 16rem;
  position: relative;
  margin: auto;
  margin-top: 2rem;
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
    rating: 0,
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
          placeholder="Give a review" 
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