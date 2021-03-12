import React, {  useEffect } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import Validate from "./validateLogin";
import { SmallPopupRound } from "../../../globaStyles/styleElements";
import { useSelector } from "react-redux";
import carSignIn1 from "../../../Image/carSignIn1.png";
import Logo from "../../../Image/logo.png";
const SignIn = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const myerror = useSelector((state) => state.error.errorMessage);
  const { Item, handleChange, handleSubmit, error } = useForm(submit, Validate);

  function submit() {}

  return (
    <div className="signincontainer">
      <div className="signinForm">
        <div id="left-side">
          <img
            src={Logo}
            alt={Logo}
            style={{ height: "10%", marginBottom: "5%" }}
          ></img>
          <img src={carSignIn1} alt={carSignIn1} height="60%" width="60%"></img>
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

            {error ? (
              <SmallPopupRound message="error">
                <p>{myerror}</p>
              </SmallPopupRound>
            ) : null}
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
