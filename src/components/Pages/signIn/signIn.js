import React from "react";
import './signin.css';
import logo from '../../../Image/logo3.png'
import {Link} from 'react-router-dom'
import useForm from "./useForm";
import Validate from './validateLogin';
 
 
const SignIn = () => {
  const { Item, handleChange, handleSubmit,error } = useForm(submit,Validate);
   
  function submit() {
  
  }
  return (
    <div className="signincontainer">
      <div className="signinForm">
        <div id="left-side" style={{ backgroundColor: "#3074cf" }}>
          <div className="logo-Text">
            <img src={logo} alt={logo}></img>
            <h1>DHULLO</h1>
          </div>
        </div>
        <div id="right-side">
          <form noValidate onSubmit={handleSubmit}>
            <div>
              <p className="Login-login">Login</p>

              <div>
                <input
                  name="phone"
                  type="text"
                  value={Item.phone}
                  onChange={handleChange}
                  placeholder="Enter Mobile No"
                />
                {error.phone && <p>{error.phone}</p>}
              </div>
            </div>
            <div>
              <div>
                <input
                  name="password"
                  type="password"
                  value={Item.password}
                  onChange={handleChange}
                />
                {error.password && <p>{error.password}</p>}
              </div>
            </div>
            <button
              type="submit"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              Login
            </button>
            <div className="signupContainer">
              <Link path to="/signup">
                <small>
                  Not Registered <strong>Signup Here</strong>
                </small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
