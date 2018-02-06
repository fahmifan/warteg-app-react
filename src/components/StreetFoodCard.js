import React from 'react';
import Auxi from '../hoc/Auxi';

import TextWrapper from './TextWrapper';
import Image from './Image';

const streetFoodCard = (props) => {
  const textShadow = {textShadow: '1px 1px rgba(0,0,0,0.2)'};

  return (
    <div className="relative br4 h4 w5 border-box ma2 shadow-3 pointer dim">
      <TextWrapper>
        <span 
          className="font-nunito-bold ma0 white f3 v-mid tc lh-copy"
          style={textShadow}>{props.children}</span>
      </TextWrapper>
      <Auxi>
      <Image img={props.img} />
      </Auxi>  
    </div>
  );
}
export default streetFoodCard;