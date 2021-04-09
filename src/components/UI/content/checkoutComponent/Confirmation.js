import React from "react";
import "./Confirmation.css";
import {Link} from 'react-router-dom';
import happy from "../../../../Image/happy.svg";
export const Confirmationpage = (props) => {

  return (
    <div className="confirmationPageContainer">
      {props.location.status === 'success' ? (
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
              <p>EXPLORE MORE SERVICES >></p>
            </button>
          </div>
        </div>
      ) : (
        <div className="failureContainer">Fail</div>
      )}
    </div>
  );
};
