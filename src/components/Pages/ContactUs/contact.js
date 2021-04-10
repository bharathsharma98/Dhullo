import React, { useEffect } from "react";
import "./contact.css";
import contactTop from "../../../Image/contactus.png";
import call from "../../../Image/call.svg";
import mailbox from "../../../Image/mailbox.svg";
import { useSelector, useDispatch } from "react-redux";
import { loginOpen } from "../../../Redux/LoginToggle/LoginActions";
const Contact = (props) => {
   const isLogPopup = useSelector((state) => state.loginToggle.Toggle);
   const dispacth = useDispatch();
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
    isLogPopup ? dispacth(loginOpen()) : console.log("popup closed");
  }, []);

  return (
    <div className="contactcontainer">
      <div className="upperContact">
        <div>
          <p>CONTACT US</p>
        </div>
        <div>
          <img src={contactTop} alt={contactTop}></img>
        </div>
      </div>
      <div className="lowerContact">
        <div className="contactEmail">
          <img src={mailbox} alt={mailbox}></img>
          <p>customer.care@dhullo.com</p>
        </div>
        <div className="contactPhone">
          <img src={call} alt={call}></img>
          <p>9900712207</p>
        </div>
        <div className="contactField">
          <p>Drop in a message</p>
          <div className="messagenEmail">
            <div className="NameContact">
              <label>Name</label>
              <input></input>
            </div>
            <div className="EmailContact">
              <label>Email</label>
              <input></input>
            </div>
          </div>
          <div className="messagenMessage">
            <label>Message</label>
            <input type="textarea"></input>
          </div>
        </div>
        <button>SEND</button>
      </div>
    </div>
  );
};
export default Contact;
