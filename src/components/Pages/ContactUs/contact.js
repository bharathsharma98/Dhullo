import React, { Component } from "react";
import "./contact.css";
import contactTop from "../../../Image/contactus.png";
import call from "../../../Image/call.svg";
import mailbox from "../../../Image/mailbox.svg";

class contact extends Component {
  render() {
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
              <input style={{ margin: "2%" }} placeholder="name"></input>

              <input style={{ margin: "2%" }} placeholder="email"></input>
            </div>
            <div className="messagenMessage">
              <input type="textarea" placeholder="message"></input>
            </div>
          </div>
          <button>SEND</button>
        </div>
      </div>
    );
  }
}
export default contact;
