import styled from 'styled-components';

const Image = styled.img`
background-image: url(${props => props.img});
background-size: cover;
background-position: center;
height: 100%;
width: 100%;
border-radius: 5px;
`;

export default Image