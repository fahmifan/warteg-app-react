import React from 'react';

const button = (props) => (
  <button 
    type={props.type}
    className="font-nunito-bold w-100 h2 f3 mt2 ba b--black-10 br2 bg-wg-yellow wg-white dim pointer"
    onClick={props.clicked}>
    {props.children}
  </button>
);


export default button