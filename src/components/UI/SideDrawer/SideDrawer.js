import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import profile from "../../../Image/profilepic.svg";
import{ isLoggedout} from '../../../Redux/UserRedux/UserActions';
import { loginOpen } from '../../../Redux/LoginToggle/LoginActions';
function SideDrawer(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.customer);
  const LoginToggle = useSelector((state) => state.loginToggle);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  console.log(LoginToggle);
  return (
    <div>
      {isSignedIn ? (
        <nav className={drawerClasses} onClick={props.click}>
          <div className="userprofilecomp">
            <Link to="/userprofile">
              <div className="userimagecomp">
                <img
                  className="userimage"
                  src={profile}
                  alt="profileimage"
                ></img>
              </div>
              <div className="usernamecomp">
                <h1 className="usernametext">Hi {user.name}</h1>
              </div>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/myorders">My Orders</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact Us</Link>
            </li>

            <div className="tc-container">
              <li id="termsLi">
                <Link to="/contact">Terms And Conditions</Link>
              </li>
              <li id ="privacyLi">
                <Link to="/contact">Privacy policy</Link>
              </li>
              <div className="logoutSidebar">
                <button
                  onClick={() =>
                    confirmAlert({
                      customUI: ({ onClose }) => {
                        return (
                          <div className="custom-ui">
                            <h3
                              style={{ textAlign: "center", marginTop: "3%" }}
                            >
                              Are you sure to Logout?
                            </h3>
                            <div className="promptbuttoncontainer">
                              <button
                                className="promptbuttonNo"
                                onClick={onClose}
                              >
                                No
                              </button>
                              <button
                                className="promptbuttonYes"
                                onClick={() => {
                                  dispatch(isLoggedout());
                                  dispatch(loginOpen());
                                  onClose();
                                }}
                              >
                                Yes
                              </button>
                            </div>
                          </div>
                        );
                      },
                    })
                  }
                >
                  <p>Logout</p>
                </button>
              </div>
            </div>
          </ul>
        </nav>
      ) : (
        <nav className={drawerClasses} onClick={props.click}>
          <div className="userprofilecomp">
            <Link onClick={()=>dispatch(loginOpen())}  to= {isSignedIn ? "/userprofile" : "/signin"}>
              <div className="userimagecomp">
                <img
                  className="userimage"
                  src={profile}
                  alt="profileimage"
                ></img>
              </div>
              <div className="usernamecomp">
                <h1 className="usernametext">Login</h1>
              </div>
            </Link>
          </div>
          <ul>
            <li>
              <Link
                to="/"
                onClick={
                  LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                }
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                onClick={
                  LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                }
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={
                  LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                }
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={
                  LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                }
              >
                Contact Us
              </Link>
            </li>

            {/* <li>
              <Link path to="#" onClick={() => dispatch(loginOpen())}>
                Sign In
              </Link>
            </li> */}
            <div className="tc-container">
              <li>
                <Link
                  to="/contact"
                  onClick={
                    LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                  }
                >
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={
                    LoginToggle.Toggle ? () => dispatch(loginOpen()) : null
                  }
                >
                  Privacy policy
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default SideDrawer;
