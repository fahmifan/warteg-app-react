import React from 'react';

const inputField = (props) => (
    <input 
      type={props.type}
      name={props.name}
      pattern={props.pattern}
      data-parse={props.dataParse}  
      placeholder={`${props.placeholder}`} 
      className="w-100 h2 font-nunito ph2 mt2 br2 pv1 wg-black ba b--black-20" 
      style={{}}
      required />
);

export default inputField;