import React from 'react';

import noDisplayPic from '../assets/icon/noDisplayPic.svg';

const navbar = (props) => (
  <nav className="h3 w-100 border-box bg-wg-red v-mid flex justify-between ph3 shadow-5">
    <a href="#" className="link f4 mt1 pt3 pb3 font-nunito-bold wg-broken-white">WartegApp</a>
     <img src={noDisplayPic} className="pointer" alt="Back" onClick={props.clicked} /> 
  </nav>
);

export default navbar;