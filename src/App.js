import React, { useState } from "react";
import { useSelector } from "react-redux";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import Backdrop from "./components/UI/Backdrop/Backdrop";
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
import EditUser from "./components/Pages/edituser/editUser";
 
import Footer from "./components/UI/content/footer/footer";
function App() {
  const [state, setState] = useState({
    sideDrawerOpen: false,
  });
  const userSignedIn = useSelector((state) => state.user.UserSignedIn);

  const drawerToggleClickHandler = () => {
    setState({ sideDrawerOpen: !state.sideDrawerOpen });
  };

  const backdropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let backDrop;

  if (state.sideDrawerOpen) {
    backDrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />

        <SideDrawer show={state.sideDrawerOpen} click={backdropClickHandler} />
        {backDrop}
        
          <switch>
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/testing" exact component={Test} />
            <Route path="/cart" exact component={CartItem} />
            <Route path="/edituser" exact component={EditUser} />
            <Route
              path="/myorders"
              exact
              render={() =>
                userSignedIn ? <MyOrders /> : <Redirect to="/signIn" />
              }
            />
            <Route
              exact
              path="/signIn"
              render={() => (userSignedIn ? <Redirect to="/" /> : <SignIn />)}
            />
            <Route
              exact
              path="/UserProfile"
              render={() =>
                userSignedIn ? <UserProfile /> : <Redirect to="/signIn" />
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
