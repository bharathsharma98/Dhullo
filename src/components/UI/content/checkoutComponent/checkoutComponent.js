import React from "react";
import { useSelector } from "react-redux";
 
function CheckoutComponent() {
  const cartitems = useSelector((state) => state.cart.CartItems);
  console.log(cartitems);

  return (
    <div>
      
      {cartitems.map((item) => (
        <div key={item.id}>
          <h1>{item.mycar}</h1>
          <h2>{item.category}</h2>
          <h2>{item.price}</h2>
        </div>
      ))}
      <div className="cart2">
              <div className="totalheading">
                <h1>TOTAL PRICE</h1>
              </div>
              <div>
          {cartitems.map((each) => (
                  
            <div key={each.mytime} className="totalpriceitems">
               
                    <h1>{each.category}</h1>
                    <h1 style={{ color: "orangered", paddingLeft: "1rem" }}>
                      Rs.{each.price}
                    </h1>
                  </div>
                ))}
              </div>
              <hr></hr>
              <h2>
                Total : Rs.
                {cartitems.reduce(function (tot, arr) {
                  return tot + arr.price;
                }, 0)}
              </h2>
            </div>
          </div>
     
  );
}
export default CheckoutComponent;
