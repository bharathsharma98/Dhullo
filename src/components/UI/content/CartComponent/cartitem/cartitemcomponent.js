import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cartitem/cartitem.css";
import DatePicker from "react-datepicker";
import washing from "../../../../../Image/servicewashing.png";
import { confirmAlert } from "react-confirm-alert"; // Import
import {getDay} from 'date-fns'
import emptycart from "../../../../../Image/emptycart.png";
import {
  RemoveFromCart,
  UpdateFromCart,
} from "../../../../../Redux/cart/CartActions";

import { Link } from "react-router-dom";
import { TotalPrice } from "./TotalpriceComponent";
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
var totalPriceArray = [];
cart.map((oneItem) => totalPriceArray.push(oneItem.price));

var sumTotal = totalPriceArray.reduce((a, b) => a + b, 0);
  return (
    <div>
      {cart.length === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className="emptycart"
        >
          <img src={emptycart} alt="emptycart" style={{ height: "35vh" }} />
          <h1>Cart Is Empty</h1>
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
              {cart.map((item, index) => (
                <div className="cartcomponent" key={item.id}>
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
                        filterDate={(date) => getDay(date) !== 1}
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
                              package: item.package,
                              packageDuration:item.packageDuration,
                              categoryprice: item.categoryprice,
                            })
                          )
                        }
                      />
                    </div>
                    <div className="timeContainerCart">
                      {item.time ? (
                        <div>
                          <label>Time</label>
                          <DatePicker
                            selected={Date.parse(item.time)}
                            showTimeSelect
                            filterDate={(date) => getDay(date) !== 1}
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
                                  package: item.package,
                                  packageDuration:item.packageDuration,
                                  categoryprice: item.categoryprice,
                                })
                              )
                            }
                            dateFormat="h:mm aa"
                            placeholderText="Select Time"
                          />
                        </div>
                      ) : null}
                    </div>

                    {item.packageDuration !== "ONE TIME" ? (
                      <div className="durationContainerCart">
                        <label>Duration</label>
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
                                package: item.package,
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
                      </div>
                    ) : null}

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
                                    Delete Item?
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
                  {index !== cart.length - 1 ? <hr></hr> : null}
                </div>
              ))}
            </div>

            <div className="cart2">
              <TotalPrice total={sumTotal} GST={sumTotal * 0.18} />
              <div className="checkoutbutton">
                <Link path to="/checkout">
                  <button>PLACE ORDER</button>
                </Link>
              </div>
            </div>
            {/*   */}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
