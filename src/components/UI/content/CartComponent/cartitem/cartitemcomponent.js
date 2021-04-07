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
   const width = { matches: window.matchMedia("(min-width: 768px)").matches };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.CartItems);
  const [tempCart] = useState({
    newDate: "",
    newTime: "",
    newDuration: "",
    duration: ["MONTHLY", "QUARTERLY", "HALFYEARLY", "YEARLY"],
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
                  <div className="leftCart">
                    <img
                      className="cartimagecomponent"
                      src={washing}
                      alt="cart"
                    />
                  </div>

                  <div className="rightCart">
                    {/* <div>
                      <h1 className="cartheading">{item.category}</h1>
                    </div> */}

                    <div className="cartpackageName">
                      <h3 className="cartcar">
                        {item.package || item.service}
                      </h3>
                    </div>
                    <div className="cartCarName">
                      {" "}
                      <h4 className="cartcar" style={{ fontWeight: "normal" }}>
                        {item.mycar}
                      </h4>
                    </div>
                    {/* <div >
                      {" "}
                      <p className="caraddress">{item.housename}</p>
                    </div> */}
                    <div className="dateContainerCart">
                      <label>Date</label>
                      <DatePicker
                        selected={Date.parse(
                          item.serviceStartDate
                            ? item.serviceStartDate
                            : item.date
                        )}
                        onChange={(cardate) =>
                          dispatch(
                            UpdateFromCart({
                              id: item.id,
                              serviceStartDate: cardate,
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
                    </div>
                    <div className="timeContainerCart">
                      <labell>Time</labell>
                      {item.time ? (
                        <DatePicker
                          selected={Date.parse(item.time)}
                          showTimeSelect
                          timeIntervals={60}
                          onChange={(cartime) =>
                            dispatch(
                              UpdateFromCart({
                                id: item.id,
                                serviceStartDate: item.serviceStartDate,
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
                    </div>
                    <div className="durationContainerCart">
                      <label>Duration</label>
                      {item.packageDuration ? (
                        <select
                          name="packageDuration"
                          onChange={(e) =>
                            dispatch(
                              UpdateFromCart({
                                id: item.id,
                                serviceStartDate: item.serviceStartDate,
                                mycar: item.mycar,
                                price: item.price,
                                serviceprice: item.serviceprice,
                                time: item.time,
                                service: item.service,
                                categoryprice: item.categoryprice,
                                packageDuration: e.target.value,
                              })
                            )
                          }
                        >
                          {tempCart.duration.map((oneduration) => (
                            <option value={oneduration} key={oneduration}>
                              {oneduration}
                            </option>
                          ))}
                        </select>
                      ) : null}
                    </div>

                    <div className="priceContainerCart">
                      <h3 className="cartprice">Price : Rs. {item.price}</h3>
                    </div>
                    <div className="removeButtonContainerCart">
                      <button
                        className="cartremovebtn"
                        onClick={() =>
                          confirmAlert({
                            customUI: ({ onClose }) => {
                              return (
                                <div className="custom-ui">
                                  <p
                                    style={{
                                      textAlign: "center",
                                      marginTop: "3%",
                                    }}
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
                        REMOVE
                      </button>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>

            <div className="cart2">
              <div className="pricebox">
                <table>
                  <thead>
                    <tr className="totalpriceCart">
                      <th>
                        <p style={{ fontWeight: "bold", color: "black" }}>
                          PRICE DETAILS
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="totalpriceitems">
                      {/* <td>{`${each.mycar}-`}</td> */}
                      <td>
                        <p
                          style={{ marginLeft: width.matches ? "-0.8vw" : "0" }}
                        >
                          {`Sub Total`} :{" "}
                        </p>
                      </td>
                      <td>
                        <p style={{ marginLeft: width.matches ? "-6vw" : "0" }}>
                          Rs
                          {cart.reduce(function (tot, arr) {
                            return tot + arr.price;
                          }, 0)}
                        </p>
                      </td>
                    </tr>
                    <tr className="totalpriceitemsGST">
                      <td>
                        <p style={{ marginLeft: width.matches ? "1.8vw" : "0" }}>
                          Gst (18%) :{" "}
                        </p>
                      </td>
                      <td>
                        <p style={{ marginLeft: width.matches ? "0vw" : "0" }}>Rs 200</p>
                      </td>
                    </tr>
                    <hr style={{ marginTop: "-0%" }}></hr>
                    <tr className="totalpriceitemsTotal">
                      <td>
                        <p style={{ marginLeft: "4.9vw" }}>Total : </p>
                      </td>
                      <td>
                        <p style={{ marginLeft: "-0vw" }}>
                          Rs
                          {cart.reduce(function (tot, arr) {
                            return tot + arr.price;
                          }, 0)}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="checkoutbutton">
                <Link path to="/checkout">
                  <button>
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
