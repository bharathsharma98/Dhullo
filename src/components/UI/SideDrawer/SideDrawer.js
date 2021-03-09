import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { useSelector, useDispatch } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import profile from "../../../Image/profilepic.svg";
import{ isLoggedout} from '../../../Redux/UserRedux/UserActions';
function SideDrawer(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.customer);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  console.log(user);
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
              <li>
                <Link to="/contact">Terms And Conditions</Link>
              </li>
              <li>
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
                  Logout
                </button>
              </div>
            </div>
          </ul>
        </nav>
      ) : (
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
                <h1 className="usernametext">Login</h1>
              </div>
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
            

            <li>
              <Link path to="/signin">
                Sign In
              </Link>
            </li>
            <div className="tc-container">
              <li>
                <Link to="/contact">Terms And Conditions</Link>
              </li>
              <li>
                <Link to="/contact">Privacy policy</Link>
              </li>
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default SideDrawer;
