import React from 'react';
import styled from 'styled-components';

import TextWrapper from './TextWrapper';
import Image from './Image';
import commentIcon from '../assets/icon/comment-icon.svg';


const foodCard = (props) => {
  const textShadow = {textShadow: '1px 1px rgba(0,0,0,0.2)'};

  return (
    <div className="relative h4 w5 br3 border-box ma2 border-box shadow-3">
      <TextWrapper>
        <img src={commentIcon} alt="icon"
          className="absolute border-box left-1 mt5 pt4 overflow-x-0"
        />
        <p
          style={textShadow} 
          className="absolute font-nunito ma0 white f4 mt5 pt4 pl4 ml3">2 reviews</p>
        <p
          style={textShadow} 
          className="font-nunito-bold ma0 white f3 pt3 pl3"
          style={{position: 'absolute'}}>Hipotesa</p>
        <p
          style={textShadow} 
          className="font-nunito ma0 white f4 pt4 mt3 pl3"
        style={{position: 'absolute'}}>Jln kol A Syam</p>
      </TextWrapper>
      <Image img={props.img} />
      {
        // <img src={props.img} className="h4 w5 br2"/>
      }
    </div>
  );
}

export default foodCard;