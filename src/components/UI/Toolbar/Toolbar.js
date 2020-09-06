import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import logo from "../../../Image/logo.png";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo  ">
        <img
          src={logo}
          alt=""
          style={{ width: 130, height: 62, marginHorizontal: 5 }}
          resizeMode="contain"
        />
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items grow">
        <ul className="grow">
          <li>
            <Link path to="/">
              Home
            </Link>
          </li>
          <li>
            <Link path to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link path to="/about">
              About
            </Link>
          </li>
          <li>
            <Link path to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link path to="/signUp">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
