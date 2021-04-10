import React from "react";
import "./Confirmation.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import history from '../../../../history/history'
import happy from "../../../../Image/happy.svg";
import {emptyCart} from '../../../../Redux/cart/CartActions'
export const Confirmationpage = (props) => {
  const dispatch = useDispatch();
  props.location.status === "success" ? dispatch(emptyCart()) : history.go(-1);
  
  return (
    <div className="confirmationPageContainer">
      {props.location.status === "success" ? (
        <div className="successContainer">
          <div className="imagecontainerConfirm">
            <img src={happy}></img>
          </div>
          <div className="confirmationHeader">
            <h1>Order Confirmed!!</h1>
          </div>
          <div className="confirmationMessage">
            <p>
              {" "}
              Track your order in <Link to="/myorders">My Orders</Link> page
            </p>
          </div>
          <div className="exploreMore">
            <button>
              <Link style={{textDecoration:'none'}} to={{pathname:'/services'}}>
                <p>EXPLORE MORE SERVICES >></p>
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="failureContainer">Fail</div>
      )}
    </div>
  );
};
