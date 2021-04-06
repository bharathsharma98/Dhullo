import React from "react";
import "./footer.css";
import facebook from '../../../../Image/facebook.svg';
import twitter from '../../../../Image/twitter.svg';
import { Link } from "react-router-dom";
 
 
const Footer = () => {
   
  return (
    <div className="footer">
      <div className="footer__navigation-items grow">
        <ul className="grow footer__grow">
          <div>
            <li>
              <Link path to="/">
                <div className="footersocials">
                  <img
                    src={facebook}
                    height="20px"
                    width="20px"
                    alt="facebook logo"
                  ></img>
                </div>
              </Link>
            </li>
          </div>

          <li>
            <a href="https://instagram.com/dhullo_o?igshid=15qwpio3dk9nz">
              <div className="footersocials">
                <img
                  src={twitter}
                  height="20px"
                  width="20px"
                  alt="twitter logo"
                ></img>
              </div>
            </a>
          </li>
          <div className="nonSocials">
            {/* <li>
              <Link path to="/about">
                About Us
              </Link>
            </li> */}
            <li>
              <Link path to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link path to="/terms">
                Terms and Conditions
              </Link>
            </li>
            <li className="tccontainer">
              <Link path to="#" style={{fontSize:'smaller', position:'absolute',left:'80%'}}>
                © Dhullo Carcare Private Ltd.
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
