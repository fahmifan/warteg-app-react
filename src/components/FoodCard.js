import React from 'react';
import Auxi from '../hoc/Auxi';

const foodCard = (props) => (
  <Auxi>
    <div className="h4 w5 br3 border-box ma2">
      <p className="font-nunito-bold ma0 white f3 tc center h4 w5 pt4 mt3"
        style={{position: 'absolute'}}>{props.children}</p>
      <Auxi>
      <img src={props.img} className="h4 w5 br2"/>
      </Auxi>  
    </div>
  </Auxi>
);

export default foodCard;