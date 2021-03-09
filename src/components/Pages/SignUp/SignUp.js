import React from "react";
import useForm from "./useForm";
import Validate from './validateSignup'
import carSignIn1 from "../../../Image/carSignIn1.png";
import Logo from "../../../Image/logo.png";
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
        <div id="left-sideSp">
          <div id="left-side">
            <img src={Logo} alt={Logo} style={{ height: "10%",marginBottom:'5%' }}></img>
            <img
              src={carSignIn1}
              alt={carSignIn1}
              height="50%"
              width="100%"
            ></img>
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
            {error ? (
              <SmallPopupRound message="error">
                <p>Unable to Signup</p>
              </SmallPopupRound>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
