import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cartitem/cartitem.css";
import DatePicker from "react-datepicker";
import washing from "../../../../../Image/servicewashing.png";
import ONETIME from "../../../../../Image/servicesanitization.png";
// import INTERIOR from "../../../../../Image/interior.jpg";
// import exterior from "../../../../../Image/car shine.jpg";
import emptycart from "../../../../../Image/emptycart.png";
import { RemoveFromCart } from "../../../../../Redux/cart/CartActions";
// import CheckoutPage from '../../../../Pages/Checkout/Checkoutpage'
import { Link } from "react-router-dom";
function CartItem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.CartItems);

  console.log(cart);

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
          <h1 className="headingcart">MY CART</h1>

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

                  <DatePicker selected={Date.parse(item.date)} />

                  {item.time ? (
                    <DatePicker
                      selected={Date.parse(item.time)}
                      dateFormat="  h:mm aa"
                      timeInputLabel="Time:"
                      showTimeSelectOnly
                    />
                  ) : null}
                  {item.duration ? <p>{item.duration}</p> : null}
                  <p className="cartprice">Price : Rs. {item.price}</p>
                  <button
                    className="cartremovebtn"
                    onClick={() => dispatch(RemoveFromCart(item))}
                  >
                    REMOVE ITEM
                  </button>
                </div>
              ))}
            </div>

            <div className="cart2">
              <div className="pricebox">
                {cart.map((each) => (
                  <div key={each.mytime} className="totalpriceitems">
                    <p>{`${each.mycar}-`}</p>
                    <p>{each.category}:</p>
                    <div style={{ marginLeft: "auto" }}>
                      <p style={{ color: "orangered" }}>Rs.{each.price}/-</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr></hr>

              <div style={{ display:'flex',justifyContent:'space-between',padding:'2%' }}>
                <div>
                  <p>Total :</p>
                </div>
                <div>
                  <p style={{ color: "#36adf7" }}>
                    Rs.
                    {cart.reduce(function (tot, arr) {
                      return tot + arr.price;
                    }, 0)}
                    /-
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link path to="/checkout">
            <button className="placeorderbtn">PLACE ORDER</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartItem;
