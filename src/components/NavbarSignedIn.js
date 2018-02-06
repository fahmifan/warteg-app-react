import React from 'react';
import { Link } from 'react-router-dom';

import noDisplayPic from '../assets/icon/noDisplayPic.svg';

const navbar = (props) => (
  <nav className="h3 w-100 border-box bg-wg-red v-mid flex justify-between ph3 shadow-5">
    <Link to={props.homeClicked} className="link f4 mt1 pt3 pb3 font-nunito-bold wg-broken-white">WartegApp</Link>
     <img src={noDisplayPic} className="pointer" alt="Back" onClick={props.dpClicked} /> 
  </nav>
);

export default navbar;