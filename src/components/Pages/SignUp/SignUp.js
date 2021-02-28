import React from "react";
import useForm from "./useForm";
import Validate from './validateSignup'
import logo from "../../../Image/logo3.png";
import '../signIn/signin.css';
 import { SmallPopupRound } from "../../../globaStyles/styleElements";
const SignUp = () => {
  const { Item, handleChange, handleSubmit,error } = useForm(submit,Validate);

  function submit() {
    console.log("success");
  }
  return (
    <div className="signupcontainer">
      <div className="signinForm">
        <div id="left-sideSp" style={{ backgroundColor: "#5db519" }}>
          <div className="logo-Text">
            <img src={logo} alt={logo}></img>
            <h1 style={{color:'black'}}>DHULLO</h1>
          </div>
        </div>
        <div id="right-sideSp">
          <form noValidate onSubmit={handleSubmit} id="signup">
            <p className="Login-login">Sign-Up</p>
            <div>
              <label>FirstName</label>
              <div>
                <input
                  name="name"
                  type="text"
                  value={Item.name}
                  onChange={handleChange}
                />
                {error.name && <p>{error.name}</p>}
              </div>
            </div>
            <div>
              <label>email</label>
              <div>
                <input
                  name="email"
                  type="email"
                  value={Item.email}
                  onChange={handleChange}
                />
                {error.email && <p>{error.email}</p>}
              </div>
            </div>
            <div>
              <label>Phone.No</label>
              <div>
                <input
                  name="phone"
                  type="text"
                  value={Item.phone}
                  onChange={handleChange}
                />
                {error.phone && <p>{error.phone}</p>}
              </div>
            </div>
            <div>
              <label>password</label>
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
            <button type="submit">Signup</button>
            {
              error ? <SmallPopupRound message="error"><p>Unable to Signup</p></SmallPopupRound>:null
            }
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
