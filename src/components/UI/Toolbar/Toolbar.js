import React, { useState } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import { Userpopup,SmallPopupRound } from "../../../globaStyles/styleElements";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedout } from "../../../Redux/UserRedux/UserActions";
import logo from "../../../Image/logo.png";
import user from "../../../Image/user.svg";
import cart from "../../../Image/shopping_cart.svg";
export default function Toolbar(props) {
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  const customer = useSelector((state) => state.user.customer);
  const cartItems = useSelector((state) => state.cart.CartItems);
  console.log(cartItems);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>

          <div className="toolbar__logo  ">
            <Link path to="/" className="logoimg">
              <img className="logoheader" src={logo} alt="" />
            </Link>
          </div>
          <div className="cart">
            <Link path to="/cart">
             
              <img className="cart-contain" src={cart} alt="" />
            </Link>
          </div>

          <div className="spacer" />
          <div className="toolbar__navigation-items grow">
            <ul className="grow">
              <li>
                <Link path to="/services">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link path to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link path to="/contact">
                  CONTACT US
                </Link>
              </li>

              <li className="cart_list">
                <Link path to="/cart">
                  <img
                    src={cart}
                    alt=""
                    style={{ width: 100, height: 38, marginHorizontal: 2 }}
                  />
                 
                </Link>
              </li>
              <li onClick={() => setToggle(!toggle)}>
                <img src={user} alt="" />
                {toggle ? (
                  isSignedIn ? (
                    <Userpopup>
                      <Link path to="/userprofile" id="popuplist">
                        <p>User Profile</p>
                      </Link>
                      <Link path to="/myorders" id="popuplist">
                        <p>My Orders</p>
                      </Link>
                      <button
                        onClick={() =>
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <div className="custom-ui">
                                  <h3
                                    style={{
                                      textAlign: "center",
                                      marginTop: "3%",
                                    }}
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
                        id="popuplist"
                      >
                        Sign Out
                      </button>
                    </Userpopup>
                  ) : (
                    <Userpopup>
                      <Link path to="/signin" id="popuplist">
                        <p>SignIn</p>
                      </Link>
                      <Link path to="/signup" id="popuplist">
                        <p>Signup</p>
                      </Link>
                    </Userpopup>
                  )
                ) : //</li><Link path to="/UserProfile">
                //    </Link>
                // ) : (
                //   <Link path to="/signIn">
                //     <img
                //       src={user}
                //       alt=""
                //       style={{ width: 100, height: 35, marginHorizontal: 2 }}
                //     />
                //   </Link>
                null}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
