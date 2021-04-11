import React, {  useEffect,useState } from "react";
import "./signin.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "./useForm";
import back from '../../../Image/back.svg'
import { loginOpen } from "../../../Redux/LoginToggle/LoginActions";
import useFormSignup from '../SignUp/useForm'
import ValidateSignUp from "../SignUp/validateSignup";
import ValidateSignIn from "./validateLogin";
import { SmallPopupRound } from "../../../globaStyles/styleElements";
 
   const width = { matches: window.matchMedia("(min-width: 768px)").matches };
 
const SignInUPComponent = (props) => {
    const dispatch = useDispatch();
     useEffect(() => {
      document.body.scrollTop = 0;
        
     }, []);
const [signState,setSignState] =useState('SIGNIN')
  const LoginToggle = useSelector((state) => state.loginToggle);
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
              <div className="closeNback"></div>

              <div className="signinForm">
                <div id="right-side">
                  <form noValidate onSubmit={handleSubmit}>
                    <div>
                      <p className="Login-login">LOGIN</p>

                      <div className="phoneContainerLogin">
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
                      <div className="paswwordContainerLogin">
                        <input
                          placeholder=" Enter Password"
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
                      LOGIN
                    </button>

                    {myerror ? (
                      <SmallPopupRound message="error">
                        <p>{myerror}</p>
                      </SmallPopupRound>
                    ) : null}
                    <div className="signupContainer">
                      <Link onClick={() => setSignState("SIGNUP")}>
                        <small style={{ color: "black" }}>
                          Not Registered ?{" "}
                          <strong style={{ color: "orangered" }}>
                            SIGNUP{" "}
                          </strong>
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
                <strong onClick={() => setSignState("SIGNIN")}>
                  <img src={back}></img>{" "}
                </strong>
                <label onClick={() => dispatch(loginOpen())}> {"X"} </label>
              </div>

              <div id="right-side" id="right-sideSP">
                <form noValidate onSubmit={handleSubmitUp} id="signup">
                  <p className="Login-login">SIGN UP</p>
                  <div>
                    <div className="inputContainerSignup">
                      <input
                        placeholder="Name"
                        name="name"
                        type="text"
                        value={ItemSingUp.name}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.name && <p>{errorSignUp.name}</p>}
                    </div>
                  </div>
                  <div>
                    <div className="inputContainerSignup">
                      <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={ItemSingUp.email}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.email && <p>{errorSignUp.email}</p>}
                    </div>
                  </div>
                  <div>
                    <div className="inputContainerSignup">
                      <input
                        placeholder="Phone No"
                        name="phone"
                        type="text"
                        value={ItemSingUp.phone}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.phone && <p>{errorSignUp.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <div className="inputContainerSignup">
                      <input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={ItemSingUp.password}
                        onChange={handleChangeUp}
                      />
                      {errorSignUp.password && <p>{errorSignUp.password}</p>}
                    </div>
                  </div>

                  <button type="submit">SIGN UP</button>

                   
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
