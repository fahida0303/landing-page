import styled from 'styled-components';
import { devices } from '../components/Breakpoints';


export const Container = styled.div`
  border-bottom: 1px solid #D4D4D4;
  display: flex;
  
`;

 export const LogoContainer = styled.div `
 width: 363px;
 height: 95px;
 align-items: center;
 display: flex;
 justify-content: center;

 ion-icon{
  color: gray;
  font-size: 13px;
  margin: 23px 19px 10px 9px;
  padding: 4px;
  border-radius: 37%;
  border: 1px solid gray;
  background: #ffff;
  display: none;
}


 
`;

export const ListContainer = styled.div `

display: flex;
flex-direction: column;
    font-style: italic;
    left: 420px;
    top: 28px;
    position: absolute;
    align-items: center;


    @media ${devices.mobileL} {
    left: 162px;
    top: 241px;
    position: absolute;
    text-align: center;
    }

    @media ${devices.mobileL} {
    left: 130px;
    }

    @media ${devices.mobileS} {
    left: 52px;
    margin-left: 38px;
    }
`;

export const H6 =styled.h6 `

font-style: italic;
font-weight: 300;
font-size: 14px;
line-height: 22px;
color: #7D7D7D;
top: 25px;
    position: absolute;
    width: 409px;
    left: 3px;
  
    @media ${devices.mobileL} {
    left: -135px;
    }
`