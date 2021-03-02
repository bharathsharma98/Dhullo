import React, { Component } from 'react';
import './contact.css';
import emptycart from "../../../Image/emptycart.png";
class contact extends Component {
  render() {
    return (
      <div className="contactcontainer">
        <div className="contactForm">
          <div className="leftContact">
            <img src={emptycart} alt={emptycart} height="60%" width="60%"></img>
            <p>YOU CAN REACH US AT</p>
            <p>+91 0000000000</p>
            <p>customercare@dhullo.com</p>
          </div>
          <div className="rightContact">
            <p>DROP US A MESSAGE</p>
            <div>
              <input type="text" placeholder="NAME"></input>
            </div>
            <div>
              <input type="email" placeholder="EMAIL"></input>
            </div>
            <div>
              <input
                type=" textarea"
                className="TAREA"
                placeholder="MESSAGE"
              ></input>
            </div>
            <div className="buttonContact">
              <button>SEND</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default contact;
