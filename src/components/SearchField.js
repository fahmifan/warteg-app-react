import React from 'react';

import searchIcon from '../assets/icon/search-icon.svg';

const input = (props) => {
   return (
      <div className="flex border-box w-80 center ba b--black-20 br2 pv1 pl2 bg-white">
        <img src={searchIcon} className="pt1" alt="search"/>
        <input 
          type="text"  
          placeholder="Cari kedai" 
          className="w-100 pr3 mr1 font-nunito wg-black ba-0" 
          style={{border: "none", outline: "none"}}/>
      </div>
    )
}

export default input;