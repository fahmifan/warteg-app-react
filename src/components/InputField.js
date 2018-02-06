import React from 'react';

const inputField = (props) => (
  <div className="flex border-box w-80 center mt3">
    <div className="w-100 br2 ba b--black-10 bw1">
    <input 
      type="text"  
      placeholder={`${props.placeholder}`} 
      className="w-100 h2 font-nunito ph2 pv1 wg-black ba-0" 
      style={{border: "none", outline: "none"}}/>
    </div>
  </div>
);

export default inputField;