import styled from 'styled-components';
import { devices } from '../components/Breakpoints';

export const Hr = styled.hr`
color: #3C3C3C; 
position: absolute;
opacity: 0.50;
position: inherit;
width: 99%;
`;

export const Img = styled.img`
    width: 74%;
    height: 81%;

  @media ${devices.tablet} {
    width: 98%;
    height: 62%;
  }
`

export const H6 = styled.h6`
color: #585858;
font-size: 22px!important;

@media ${devices.laptop} {
  font-size: 18px!important;
  }

  @media ${devices.tablet} {
  font-size: 11px!important;
}

`

export const H3 = styled.h3`
color: #656565;

@media ${devices.tablet} {
  font-size: 1rem;
}
`

export const Summary = styled.summary`
list-style: none;
`


export const Div = styled.div`
display: grid;
margin: 25px -23px 0px;

@media ${devices.tablet} {
  margin: 15px 4px 0px;
  width: 89%;
}
`

export const Module= styled.div`
display: grid;
grid-template-columns: 24% 76%;
margin-bottom: 16px;


`

export const P1 = styled.p`
margin-top: -10px;
font-size: 15px;


@media ${devices.laptop} {
  font-size: 11px;
}

@media ${devices.tablet} {
  font-size: 8px;
}

`



export const DivM= styled.div`
display: none;

&:hover {
  color: #ffff;
}
`

export const Check= styled.input`
display: none;
`


export const Button= styled.button`
border: none;
text-decoration: underline;
background: white;
cursor: pointer;
position: relative;
left: 29rem;
bottom: 3rem;
width: 1%;
right: 12rem;
font-weight: 400;
font-size: 20px;

@media ${devices.laptop} {
  left: 21rem;
  font-size: 17px;
  }
  @media ${devices.tablet} {
    font-size: 11px;
    left: 15rem;
    bottom: 2.3rem;
  }

 @media ${devices.mobileL} {
  left: 14rem;
  bottom: 2.2rem;
 }

 @media ${devices.mobileM} {
 left: 11.5rem;
 bottom: 2rem;
 }

 @media ${devices.mobileS} {
 left: 10.5rem;
    bottom: 3.5rem;
 }
`

export const ContinerL = styled.div`
height: 50rem;
width: 61%;
max-width: 47%;
overflow: auto;
padding: 0 1rem;
margin: 5rem 10rem 11rem 14%;




@media ${devices.tablet} {
height: 44rem;
    width: 71%;
    max-width: 52%;
    margin: 5rem 4rem 11rem 9%;
}

@media ${devices.mobileL} {
width: 89%;
max-width: 100%;
overflow: auto;
padding: 0 1rem;
margin: 7rem 2rem 10rem 7%;
}

@media ${devices.mobileM} {
margin: 7rem 1rem 30rem 3%;
}

@media ${devices.mobileS} {
margin-left: 5%
}
`