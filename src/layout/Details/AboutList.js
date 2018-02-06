import React from 'react';

import checkList from '../../assets/icon/checklist-circle.svg';
const AboutDesc = "relative flex items-center pt2";

const aboutList = (props) => (
  <div className={AboutDesc}>
    <img src={checkList} alt="v" />
    <span className="pl2">{props.children}</span>
  </div>
);

export default aboutList;
