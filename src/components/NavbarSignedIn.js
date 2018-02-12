import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import noDisplayPic from '../assets/icon/noDisplayPic.svg';
import Auxi from '../hoc/Auxi';

const Logout = styled.button`
  display: block;
  position: absolute;
  bottom: -2rem;
  right: 0.5rem;
  border: none;
  width: 6rem;
  z-index: 50;
  ${props => {
    return props.show ? 'transform: translateY(0); z-index: 999;' : 'transform: translateY(-100%);' 
  }}
  transition: 0.2s ease-in;
`

const navbar = (props) =>{
  return (
    <div className="relative">
    <nav className="h3 w-100 border-box bg-wg-red v-mid flex justify-between ph3 shadow-5 relative z-999">
      <Link to={props.homeClicked} className="link f4 mt1 pt3 pb3 font-nunito-bold wg-broken-white">WartegApp</Link>
      <img src={noDisplayPic} className="pointer" alt="Back" onClick={props.dpClicked} />
    </nav>
    {
      props.accordShowed ? 
        <Logout className="h2 bg-wg-red wg-white font-nunito-bold tc f5 pa1" show>Log Out</Logout>
        : <Logout className="h2 bg-wg-red wg-white font-nunito-bold tc f5 pa1" >Log Out</Logout>
    }
    </div>
  );
}
export default navbar;