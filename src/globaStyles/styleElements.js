
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
z-index:1000;
background-color:white;
display:flex;
flex-direction:column;
position:absolute;
top:100%;
left:85%;
margin-right:1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  button{
  color:black;
  background:none;
  font-size:clamp(0.5rem,2.3rem,1.5rem);
  font-family: 'Josefin Sans', sans-serif;
  text-align:left;
  padding-left:6%;
  }
`;

export const CarBox = Styled.div`

 @media (max-width: 768px) {
 margin-left:-30%;
    min-width: 50vw;
    min-height: 10vh;
  }
 position:relative;
  min-width: 15vw;
    min-height: 15vh;
 margin-bottom:0.5rem;
 margin-right:2rem;
  
    max-width:fit-content;
 
  
    border:2px solid black;
     
text - align: center;
  
display:flex;
  height:fit-content;
  width:fit-content; 
flex-direction:row;
input{
  margin-left:20%;
     height:20px;
     width:20px;
    cursor:pointer;
   outline: 2px solid black;
    background-color:blue;
 } 
 label{
font-size:small;
  font-family: 'Josefin Sans', sans-serif;
  margin-left:10%;

 
 }
 p{
       position:absolute;
   font-size:medium;
  font-family: 'Josefin Sans', sans-serif;
 
    color:black;
     left:16%;
     top:0%;
     font-family: 'Josefin Sans', sans-serif;
 }
 h2{
   font-weight:normal;
    position:absolute;
     font-size:large;
     left:23%;
     top:25%;
     font-family: 'Josefin Sans', sans-serif;
      color:red;
    width: 70%;
    height:auto;
     white-space: wrap;
     overflow: hidden;
     text-overflow: ellipsis;
    
 }
//  h3{
     font-weight:normal;
//     position:absolute;
//      font-size:large;
//      left:23%;
//      top:50%;
//      font-family: 'Josefin Sans', sans-serif;
     
//  }
 h4{
      font-weight:normal;
    position:absolute;
     font-size:large;
     left:23%;
     margin-top:2rem;
     top:44%;
     font-family: 'Josefin Sans', sans-serif;
 }
 img{
  position:absolute;
  top:15%;
  left:88%;
 }
 
`;

export const ServiceCard = Styled.div`
height:120PX;
width:40%;
margin:2%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${(props) => props.color};
border-radius:5px;
 
margin-bottom:10%;
 position:relative;
border:2px solid ${(props) => props.color};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
a{
font-size:clamp(2vw,3.5vw,4vw);
color:${(props) => props.fontColor};
font-weight:bold;
text-decoration:none;
font-family: 'Josefin Sans', sans-serif;
font-size:3vw;
position: relative;
top:20%;
text-align:center; 
height: 40px;
border:none;
 
 }
img{
  bottom:-15%;
 
  height:60%;
  width:100%;
 
  position:relative;
}
`;

 