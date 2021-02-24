import React from "react";
import "./BoxComp.css";
import { useDispatch} from 'react-redux'
import {  PlatinumToggle} from '../../../../Redux/WashingRedux/WashingActions';
let BoxComponentPlatinum = () => {
  const dispatch = useDispatch();
  const category = 'PLATINUM';
  return (
    <div className="boxwithbutton">
      <h1>{`Car Care`}</h1>
      <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that t has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors`}</p>
      <button  className="servicebookbutton" onClick={()=>dispatch(PlatinumToggle(category))}>BOOK </button>
    </div>
  );
};
export default BoxComponentPlatinum;
