import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cartitem/cartitem.css";
import DatePicker from "react-datepicker";
import washing from "../../../../../Image/servicewashing.png";
import emptycart from "../../../../../Image/emptycart.png";
import { RemoveFromCart } from "../../../../../Redux/cart/CartActions";
// import CheckoutPage from '../../../../Pages/Checkout/Checkoutpage'
import { Link } from "react-router-dom";
function CartItem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.CartItems);

  console.log(cart);

  return (
    <div >
      {cart.length === 0 ? (
        <div
          style={{ margin: "auto", textAlign: "center" ,height:'100%'}}
          className="emptycart"
        >
          <h1>Cart Is Empty</h1>
          <img src={emptycart} alt="emptycart" className="emptycartimg" />
        </div>
      ) : (
        <div className="fullcart" style={{height:'100%'}}>
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

                  <DatePicker
                    selected={Date.parse(item.time)}
                    dateFormat="  h:mm aa"
                    timeInputLabel="Time:"
                    showTimeSelectOnly
                  />
                  <select className="cartselect">
                    <option value={item.duration}>{item.duration}</option>
                  </select>
                  <h3 className="cartprice">Price : Rs. {item.price}</h3>
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
              <div className="totalheading">
                <h2>TOTAL PRICE</h2>
              </div>
              <div className="pricebox">
                {cart.map((each) => (
                  <div key={each.mytime} className="totalpriceitems">
                    <h2>{`${each.mycar}-`}</h2>
                    <h2>{each.category}</h2>
                    <h2 style={{ color: "orangered", paddingLeft: "1rem" }}>
                      Rs.{each.price}
                    </h2>
                  </div>
                ))}
              </div>
              <hr></hr>
              <h2>
                Total : Rs.
                {cart.reduce(function (tot, arr) {
                  return tot + arr.price;
                }, 0)}
              </h2>
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
