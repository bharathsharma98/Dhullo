import React, { Component } from 'react';
import './contact.css'
class contact extends Component {
  render() {
    return (
      <div className="contactcontainer">
        <h1 style={{textAlign:'center'}}>We are here to Help</h1>
        <div className="iconcontainer">
        <h2>+91XXXXXXXXXX</h2>
        <h2>Customer.care@dhullo.com</h2>
        </div>
        <h3>Drop in a message</h3>
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Email Id"></input>
          <input className="msg" placeholder="leave a message"></input>
         <button>Send</button>
        </form>
    </div>
    );
  }
}
export default contact;
