import React from 'react';

import TextWrapper from './TextWrapper';
import Image from './Image';
import commentIcon from '../assets/icon/comment-icon.svg';
import fiveStars from '../assets/icon/5-stars-white.svg';

const foodCard = (props) => {
  const textShadow = {textShadow: '1px 1px rgba(0,0,0,0.2)'};

  return (
    <div
      onClick={props.clicked} 
      className="relative h4 w5 br3 border-box ma2 shadow-3 pointer dim">
      <TextWrapper>
        <p
          style={textShadow} 
          className="absolute font-nunito-bold ma0 white f3 top-1 left-1">{props.name || 'Resto'}</p>
        <p
          style={textShadow} 
          className="absolute font-nunito ma0 white f4 pt4 mt3 left-1">{props.address || 'Address'}</p>
        <img 
          src={commentIcon} alt="comment icon"
          className="absolute border-box left-1 bottom-0 pb1"/>
        <p
          style={textShadow} 
          className="absolute font-nunito ma0 white f4 bottom-0 pb2 mb1 pl4 ml3">{props.reviewer || '0'} Ulasan</p>
        <p 
          className="absolute font-nunito ma0 white f4 pl3 right-1 bottom-0 pb2 mb1">{props.isOpen ? 'Buka' : 'Tutup'}</p>
        <p 
          className="absolute font-nunito ma0 white mr2 ml2 f4 right-1 top-1 pt1 pb2 mb2 ">{props.rating || '0'}</p>
        <img 
          src={fiveStars} alt="stars" 
          className="absolute right-1 top-2 mt1 pt1"/>
      </TextWrapper>
      <Image img={props.img} />
      {
        // <img src={props.img} className="h4 w5 br2"/>
      }
    </div>
  );
}

export default foodCard;