import React, { Component } from 'react';
import './contact.css';
import contactTop from "../../../Image/contactTop.png";
import call from "../../../Image/call.svg";
import mailbox from "../../../Image/mailbox.svg";
 
class contact extends Component {
  render() {
    return (
      <div className="contactcontainer">
        <div className="upperContact">
          <p>WE ARE HERE TO HELP YOU</p>
          <img src={contactTop}></img>
        </div>
        <div className="lowerContact">
          <div className="contactEmail">
            <img src={mailbox}></img>
            <p>customer.care@dhullo.com</p>
          </div>
          <div className="contactPhone">
            <img src={call}></img>
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
