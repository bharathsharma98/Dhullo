import React, { useState } from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import { Userpopup  } from "../../../globaStyles/styleElements";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedout } from "../../../Redux/UserRedux/UserActions";
import logo from "../../../Image/logo.png";
import user from "../../../Image/user.svg";
import history from "../../../history/history";
import cart from "../../../Image/shopping_cart.svg";
import SignInUPComponent from "../../Pages/signIn/signIn";
import SignUp from "../../Pages/SignUp/SignUp";
import { loginOpen } from "../../../Redux/LoginToggle/LoginActions";

export default function Toolbar(props) {
  const LoginToggle = useSelector((state) => state.loginToggle.Toggle);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
 
  const cartItems = useSelector((state) => state.cart.CartItems);
 
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const [signinToggle, setSignInTogggle] = useState(false)
  const [scrolled,setScroll]=useState(false)
  const scrollHandler = () => {
  window.scrollY > 0 ? setScroll(true) :setScroll(false)
  };
  React.useEffect(()=>{ window.addEventListener("scroll", scrollHandler)})
   
 const openSignin =() =>setSignInTogggle(!signinToggle)
  return (
    <div onScroll={() => alert("hi")}>
      <header className={scrolled ? "toolbarscrolled" : "toolbar"}>
        <nav className="toolbar__navigation">
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
          </div>

          <div className="toolbar__logo  ">
            <Link path to="/" className="logoimg">
              <img
                className="logoheader"
                onClick={LoginToggle ? () => dispatch(loginOpen()) : null}
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div  className="cart">
            <Link style={{textDecoration:'none'}} path to="/cart">
              {cartItems.length > 0 ? (
                <small
                  style={{
                    color: "white",
                    border: "2px solid white",
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingTop:'3%',
                    paddingBottom:'3%',
                    borderRadius: '100%',
                    position: 'relative',
                    left: '01.8rem',
                    top:'-0.5rem'
                  }}
                >
                  {cartItems.length}
                </small>
              ) : null}
              <img style={{ position:'relative',top:'-0.5rem',left:'-1.1rem',width:'13vw'}} className="cart-contain" src={cart} alt="" />
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

              <li>
                <div className="cart_list">
                  <Link path to="/cart">
                    <img
                      src={cart}
                      alt=""
                      style={{ width: 100, height: 38, marginTop: "0.8rem" }}
                    />
                    {cartItems.length ? (
                      <small>{cartItems.length}</small>
                    ) : null}
                  </Link>
                </div>
              </li>
              <li
                style={{ marginTop: "-0.5rem" }}
                onClick={() => setToggle(!toggle)}
              >
                <img src={user} alt="" />
                {toggle ? (
                  isSignedIn ? (
                    <Userpopup onMouseLeave={() => setToggle(!toggle)}>
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
                        id="popuplist"
                      >
                        Sign Out
                      </button>
                    </Userpopup>
                  ) : (
                    <Userpopup onMouseLeave={() => setToggle(!toggle)}>
                      <button onClick={() => dispatch(loginOpen())}>
                        Login
                      </button>
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

      {LoginToggle && !isSignedIn ? (
        <SignInUPComponent togglepress={() => dispatch(loginOpen())} />
      ) : null}
    </div>
  );
}
