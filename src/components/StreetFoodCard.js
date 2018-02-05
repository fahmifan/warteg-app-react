import React from 'react';
import Auxi from '../hoc/Auxi';
import styled from 'styled-components';

import TextWrapper from './TextWrapper';
import Image from './Image';

const streetFoodCard = (props) => {
  const textShadow = {textShadow: '1px 1px rgba(0,0,0,0.2)'};

  return (
    <div className="relative br4 h4 w5 border-box ma2 shadow-3">
      <TextWrapper>
        <span 
          className="font-nunito-bold ma0 white f3 v-mid"
          style={textShadow}>{props.children}</span>
      </TextWrapper>
      {/*className="absolute font-nunito-bold ma0 white f3 tc center h4 w5 pt4 mt3"*/}
      <Auxi>
      <Image img={props.img} />
      </Auxi>  
    </div>
  );
}
export default streetFoodCard;