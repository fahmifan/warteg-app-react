import React from 'react';
import { Link } from 'react-router-dom';

import backArrow from '../assets/icon/back-arrow-button.svg';

const navbar = (props) => (
  <nav className="h3 w-100 border-box bg-wg-red v-mid flex justify-between ph3 shadow-5">
    <Link to={props.link} className="link f4 mt1 pt3 pb3 font-nunito-bold wg-broken-white">WartegApp</Link>
    { 
      props.isBack ? <img src={backArrow} className="pointer" alt="Back" onClick={props.clicked} />
      : <Link 
          // onClick={props.clicked} 
          className="link f4 font-nunito-bold mt1 pt3 pb3 wg-broken-white"
          to="/signin">Log In</Link>
    }
  </nav>
);

export default navbar;