import React, {  useEffect,useState } from "react";
import "./signin.css";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import useFormSignup from '../SignUp/useForm'
import ValidateSignUp from "../SignUp/validateSignup";
import ValidateSignIn from "./validateLogin";
import { SmallPopupRound } from "../../../globaStyles/styleElements";
import { useSelector } from "react-redux";
 
 
const SignInUPComponent = (props) => {
const [signState,setSignState] =useState('SIGNIN')

  console.log(props)
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  const myerror = useSelector((state) => state.error.errorMessage);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  const { Item,
    handleChange,
    handleSubmit,
    error } = useForm(submit, ValidateSignIn);
  console.log(Item)
  const {
    ItemSingUp,
    handleChangeUp,
    handleSubmitUp,
    errorSignUp,
  } = useFormSignup(submit, ValidateSignUp);
  

  function submit() {}

  return (
    <div>
      {!isSignedIn ? (
        <div>
          {signState === "SIGNIN" ? (
            <div className="signupcontainer">
              <div className="closeNback">
                <label onClick={() => props.togglepress()}> {"X"} </label>
              </div>
              <hr></hr>
              <div className="signinForm">
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
                      <Link onClick={() => setSignState("SIGNUP")}>
                        <small>
                          Not Registered <strong>Signup Here</strong>
                        </small>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            //SIGNUP CONTAIBER STARTS HERE
            <div className="signupcontainer">
              <div className="closeNback">
                <label onClick={() => setSignState("SIGNIN")}> {"<"} </label>
                <label onClick={() => props.togglepress()}> {"X"} </label>
              </div>
              <hr></hr>
              <div id="right-sideSp">
                <form noValidate onSubmit={handleSubmitUp} id="signup">
                  <p className="Login-login">Sign-Up</p>
                  <div>
                    <label>FirstName</label>
                    <div>
                      <input
                        name="name"
                        type="text"
                        value={ItemSingUp.name}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.name && <p>{errorSignUp.name}</p>}
                    </div>
                  </div>
                  <div>
                    <label>email</label>
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={ItemSingUp.email}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.email && <p>{errorSignUp.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label>Phone.No</label>
                    <div>
                      <input
                        name="phone"
                        type="text"
                        value={ItemSingUp.phone}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.phone && <p>{errorSignUp.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label>password</label>
                    <div>
                      <input
                        name="password"
                        type="password"
                        value={ItemSingUp.password}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.password && <p>{errorSignUp.password}</p>}
                    </div>
                  </div>
                  <button type="submit">Signup</button>
                  {errorSignUp ? (
                    <SmallPopupRound message="error">
                      <p>Unable to Signup</p>
                    </SmallPopupRound>
                  ) : null}
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        props.togglepress()
      )}
    </div>
  );
};
export default SignInUPComponent;
