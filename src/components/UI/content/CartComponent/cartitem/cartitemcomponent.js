import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cartitem/cartitem.css";
import DatePicker from "react-datepicker";
import washing from "../../../../../Image/servicewashing.png";
import { confirmAlert } from "react-confirm-alert"; // Import

import emptycart from "../../../../../Image/emptycart.png";
import {
  RemoveFromCart,
  UpdateFromCart,
} from "../../../../../Redux/cart/CartActions";

import { Link } from "react-router-dom";
function CartItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.CartItems);
  const [tempCart] = useState({
    newDate: "",
    newTime: "",
    newDuration: "",
  });
  console.log(tempCart);
  useEffect(() => {
    document.body.scrollTop = 0;
    props.click();
  }, []);

  return (
    <div>
      {cart.length === 0 ? (
        <div
          style={{ margin: "auto", textAlign: "center", height: "100vh" }}
          className="emptycart"
        >
          <h1>Cart Is Empty</h1>
          <img src={emptycart} alt="emptycart" className="emptycartimg" />
        </div>
      ) : (
        <div className="fullcart" style={{ height: "100%" }}>
          <h1
            className="headingcart"
            style={{ textAlign: "center", color: "#0488D8" }}
          >
            MY CART
          </h1>

          <div className="cartbody">
            <div className="cart1">
              {cart.map((item) => (
                <div className="cartcomponent" key={item.time}>
                  {/* <hr className="line"></hr> */}
                  <img
                    className="cartimagecomponent"
                    src={washing}
                    alt="cart"
                  />
                  <h1 className="cartheading">{item.category}</h1>

                  <h2 className="cartcar">{item.mycar}</h2>
                  <p className="caraddress">{item.housename}</p>

                  <DatePicker
                    selected={Date.parse(
                      item.serviceStartDate ? item.serviceStartDate : item.date
                    )}
                    onChange={(cardate) =>
                      dispatch(
                        UpdateFromCart({
                          id: item.id,
                          date: cardate,
                          mycar: item.mycar,
                          price: item.price,
                          serviceprice: item.serviceprice,
                          time: item.time,
                          service: item.service,
                          categoryprice: item.categoryprice,
                        })
                      )
                    }
                  />

                  {item.time ? (
                    <DatePicker
                      selected={Date.parse(item.time)}
                      showTimeSelect
                      timeIntervals={60}
                      onChange={(cartime) =>
                        dispatch(
                          UpdateFromCart({
                            id: item.id,
                            date: item.date,
                            mycar: item.mycar,
                            price: item.price,
                            serviceprice: item.serviceprice,
                            time: cartime,
                            service: item.service,
                            categoryprice: item.categoryprice,
                          })
                        )
                      }
                      dateFormat="h:mm aa"
                      placeholderText="Select Time"
                    />
                  ) : null}
                  {item.duration ? <p>{item.duration}</p> : null}
                  <p className="cartprice">Price : Rs. {item.price}</p>
                  <button
                    className="cartremovebtn"
                    onClick={() =>
                      confirmAlert({
                        customUI: ({ onClose }) => {
                          return (
                            <div className="custom-ui">
                              <p
                                style={{ textAlign: "center", marginTop: "3%" }}
                              >
                                Delete this car?
                              </p>
                              <div className="promptbuttoncontainer">
                                <button
                                  className="promptbuttonNo"
                                  onClick={onClose}
                                >
                                  <small>No</small>
                                </button>
                                <button
                                  className="promptbuttonYes"
                                  onClick={() => {
                                    dispatch(RemoveFromCart(item));
                                    onClose();
                                  }}
                                >
                                  <small>Yes</small>
                                </button>
                              </div>
                            </div>
                          );
                        },
                      })
                    }
                  >
                    REMOVE ITEM
                  </button>
                </div>
              ))}
            </div>

            <div className="cart2">
              <div className="pricebox">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <p>Service</p>
                      </th>
                      <th>
                        <p>Price</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((each) => (
                      <tr key={each.mytime} className="totalpriceitems">
                        {/* <td>{`${each.mycar}-`}</td> */}
                        <td>
                          <p>{each.service}:</p>
                        </td>
                        <td>
                          <p>Rs.{each.price}/- </p>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>
                        <p>Total :</p>
                      </td>
                      <td>
                        
                      
                          <p style={{ color: "#36adf7" }}>
                            Rs.
                            {cart.reduce(function (tot, arr) {
                              return tot + arr.price;
                            }, 0)}
                            /-
                          </p>
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr></hr>

 
            </div>
          </div>

          <div className="checkoutbutton">
            <Link path to="/checkout">
              {" "}
              <button className="placeorderbtn">PLACE ORDER</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
