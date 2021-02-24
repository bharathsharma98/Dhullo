//  ${(props) =>
//     props.isToday &&
//     css`
//       border: 1px solid gray;
//       border-radius: 3px;
//     `}
import Styled, { css } from "styled-components";

export const SmallPopupRound = Styled.div`
height:fit-content;
max-width:fit-content;
padding:0.1%;
border-radius:100px;
opacity:80%;
z-index:200;

 margin:3%;
 text-align:center;
 p {
 
     color:black;
     opacity:100%;
 }
 ${(props) =>
   props.message === "success" &&
   css`
     background-color: #4fc26e;
   `}
   ${(props) =>
     props.message === "error" &&
     css`
       background-color: #ed2828;
     `}
`;

export const Userpopup = Styled.div`
height:fit-content;
width:clamp(10rem,15rem,20rem);
z-index:3000;
background-color:white;
display:flex;
flex-direction:column;
position:absolute;
top:100%;
left:85%;
margin-right:1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  button{
  color:red;
  background:none;
  font-size:clamp(0.5rem,2.3rem,1.5rem);
  font-family: 'Josefin Sans', sans-serif;
  
  }
`
export const CarBox = Styled.div`
 height:clamp(2rem,6rem,8rem);
    width:  fit-content;
    padding-left:1%;
    padding-right:3%;
    border:2px solid #bab3b3;
      background-color:#ebe4e4;
text - align: left;
margin-bootom:1rem;
display:flex;
flex-direction:column;
.checkBox{
     align-items:center;
     height:30px;
   text-align:center;
    cursor:pointer;
 } 
 label{
font-size:clamp(0.5rem,2rem,1.5rem);
  font-family: 'Josefin Sans', sans-serif;
  margin-left:10%;
 padding-left:2rem;
 padding-right:2rem;
 }
`;