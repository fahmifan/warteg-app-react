import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import noDisplayPic from '../assets/icon/noDisplayPic.svg';

const Logout = styled.button`
  display: ${props => props.show ? 'block':'none'};
  z-index: 999;
  position: absolute;
  bottom: -2rem;
  right: 0.25rem;
  border: none;
`

const navbar = (props) =>{
  return (
    <nav className="h3 w-100 border-box bg-wg-red v-mid flex justify-between ph3 shadow-5 relative">
      <Link to={props.homeClicked} className="link f4 mt1 pt3 pb3 font-nunito-bold wg-broken-white">WartegApp</Link>
      <img src={noDisplayPic} className="pointer" alt="Back" onClick={props.dpClicked} />
      {
        props.accordShowed ? 
          <Logout className="w3 h2 bg-wg-red wg-white font-nunito-bold tc f5 pa1 shadow-5" show>Logout</Logout>
          : null
      }
    </nav>
  );
}
export default navbar;