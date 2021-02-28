//  ${(props) =>
//     props.isToday &&
//     css`
//       border: 1px solid gray;
//       border-radius: 3px;
//     `}
import Styled, { css } from "styled-components";

export const SmallPopupRound = Styled.div`
height:2.5rem;
max-width:fit-content;
 
border-radius:100px;
opacity:80%;
z-index:200;

 margin:3%;
 text-align:center;
 p {
 font-size:small;
text-align:center;
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
 height:clamp(4rem,5rem,10rem);
 margin-bottom:0.5rem;
 margin-right:0.5rem;
    min-width: 15rem;
    max-width:fit-content;
   border-radius:5px;
   
    border:2px solid #bab3b3;
      background-color:#ebe4e4;
text - align: center;
// margin-bootom:1rem;
display:flex;
 
flex-direction:row;
input{
     align-items:center;
     height:20px;
     width:20px;
   text-align:center;
    cursor:pointer;
  margin:1rem;
    background-color:blue;
 } 
 label{
font-size:small;
  font-family: 'Josefin Sans', sans-serif;
  margin-left:10%;

 
 }
 small{
   font-size:medium;
  font-family: 'Josefin Sans', sans-serif;
 
    color:gray;
    width:100%;
 }
 p{
     font-size:large;
 }
 
`;