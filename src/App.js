import React, { useState } from "react";
 
import Toolbar from "./components/UI/Toolbar/Toolbar";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import{ Backdrop} from "./components/UI/Backdrop/Backdrop";
import {LoginBackdrop} from "./components/UI/Backdrop/Backdrop";


import {loginOpen} from './Redux/LoginToggle/LoginActions'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from "./components/Pages/About/about";
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/ContactUs/contact";
import Services from "./components/Pages/Services/services";
import SignUp from "./components/Pages/SignUp/SignUp";
import SignIn from "./components/Pages/signIn/signIn";
import UserProfile from "./components/Pages/user/UserProfile";
import MyOrders from "./components/Pages/MyOrders/myOrders";
import CartItem from "../src/components/UI/content/CartComponent/cartitem/cartitemcomponent";
import CheckoutPage from "./components/Pages/Checkout/Checkoutpage";
import AddCar from "./components/Pages/AddCar/AddCar";
import Test from "./components/Pages/testing";
import { useSelector, useDispatch } from "react-redux";
import EditUser from "./components/Pages/edituser/editUser";
 
import Footer from "./components/UI/content/footer/footer";
function App() {
    const LoginToggle = useSelector((state) => state.loginToggle);
  const [state, setState] = useState({
    sideDrawerOpen: false,
  });
  const userSignedIn = useSelector((state) => state.user.UserSignedIn);
const dispacth =useDispatch()
  const drawerToggleClickHandler = () => {
    setState({ sideDrawerOpen: !state.sideDrawerOpen });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backDrop;
  const LoginbackdropClickHandler = () => {
  dispacth(loginOpen());
  };

 
  let loginBackDrop;
  if (state.sideDrawerOpen) {
    backDrop = <Backdrop click={backdropClickHandler} />;
  }
  if (LoginToggle.Toggle) {
    backDrop = <LoginBackdrop click={LoginbackdropClickHandler} />;
  }

  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Toolbar
          drawerClickHandler={drawerToggleClickHandler}
          click={backdropClickHandler}
        />

        <SideDrawer show={state.sideDrawerOpen} click={backdropClickHandler} />
        {backDrop}

        <switch>
          <Route
            exact
            path="/about"
            render={(props) => <About click={backdropClickHandler} />}
          />
          <Route
            exact
            path="/services"
            render={(props) => <Services click={backdropClickHandler} />}
          />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact click={backdropClickHandler} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <Home click={backdropClickHandler} />}
          />
          <Route
            exact
            path="/signUp"
            render={(props) => <SignUp click={backdropClickHandler} />}
          />
          <Route
            exact
            path="/cart"
            render={(props) => <CartItem click={backdropClickHandler} />}
          />

          <Route path="/testing" exact component={Test} />

          <Route path="/edituser" exact component={EditUser} />
          <Route
            exact
            path="/myorders"
            
            render={() =>
              userSignedIn ? (
                <MyOrders click={backdropClickHandler} />
              ) : (
                <Redirect to="/signIn" />
              )
            }
          />
          <Route
            exact
            path="/signIn"
            render={() =>
              userSignedIn ? (
                <Redirect to="/" />
              ) : (
                <SignIn click={backdropClickHandler} />
              )
            }
          />
          <Route
            exact
            path="/UserProfile"
            render={() =>
              userSignedIn ? (
                <UserProfile click={backdropClickHandler} />
              ) : (
                <Redirect to="/signIn" />
              )
            }
          />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route path="/addcar" exact component={AddCar} />

          <Footer />
        </switch>
      </div>
    </Router>
  );
}

export default App;
