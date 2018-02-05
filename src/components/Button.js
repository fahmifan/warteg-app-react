import React from 'react';

const button = (props) => (
  <div className="w-80 center h2 mt3 br2">
    <button 
      type="button"
      className="font-nunito-bold w-100 h2 f3 ba b--black-10 br2 bg-wg-yellow wg-white dim pointer">
      {props.children}
    </button>
  </div>
);


export default button