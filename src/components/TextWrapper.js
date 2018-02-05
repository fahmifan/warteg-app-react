import styled from 'styled-components';

const TextWrapper = styled.div`
  position:absolute;
  top:0; left:0;
  width:100%; 
  height:100%;
  border-radius: 5px;
  background:rgba(0,0,0,.3);
  text-align:center;
  &:after{
    content:'';
    width:1px; height:100%;
    vertical-align:middle;
    display:inline-block;
  }
  `;

  export default TextWrapper;