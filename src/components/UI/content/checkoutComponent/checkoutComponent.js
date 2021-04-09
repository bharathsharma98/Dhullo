import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import history from "../../../../history/history";
import { useSelector } from "react-redux";
import "./checkoutcomp.css";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";
function CheckoutComponent() {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, []);

  // const user =useSelector((state)=>state.user.customer)

  //   const options = {
  //     key: "rzp_test_FnsOYqvR14n5AI",
  //     amount: "100", //  = INR 1
  //     name: "Dhullo Car Care",
  //     description: "Washing monthly",
  //     image:
  //       "https://img1.wsimg.com/isteam/ip/0ec77b4c-f729-45ff-9e1c-af04b767b0e4/logo.png/:/rs=h:194/ll",
  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);
  //     },
  //     prefill: {
  //       name: user.name,
  //       contact: user.mobileNo,
  //       email: user.email,
  //     },
  //     notes: {
  //       address: "some address",
  //     },

  //     theme: {
  //       color: "#F04C06",
  //       hide_topbar: false,

  //     },
  //   };

  //     const openPayModal = () => {
  //         var rzp1 = new window.Razorpay(options);
  //         rzp1.open();
  //     };
  //     useEffect(() => {
  //         const script = document.createElement('script');
  //         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //         script.async = true;
  //         document.body.appendChild(script);
  //     }, []);

  const cartitems = useSelector((state) => state.cart.CartItems);
  console.log(cartitems);
  var totalPriceArray = [];
  cartitems.map((oneItem) => totalPriceArray.push(oneItem.price));

  var sumTotal = totalPriceArray.reduce((a, b) => a + b, 0);
  console.log(sumTotal);
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/api/razorpay/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderItems: cartitems,
        totalPrice: sumTotal,
      }),
    }).then((t) => t.json());
    console.log(data);
    
    const options = {
      key: __DEV__ ? "rzp_test_FnsOYqvR14n5AI" : "PRODUCTION_KEY",
      currency: data.currency,
      // amount: data.amount.toString(),
      amount: sumTotal.toString(),
      order_id: data.id,
      name: "Dhullo Car Care",
      description: "Washing Silver Package",
      image:
        "https://img1.wsimg.com/isteam/ip/0ec77b4c-f729-45ff-9e1c-af04b767b0e4/logo.png/:/rs=h:194/ll",
      handler: function (response) {
        console.log(response);
       
        alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name: userEvent.name,
        email: "sdfdsjfh2@ndsfdf.com",
        phone_number: "9899999999",
      },
      theme: {
        color: "#024A5A",
        hide_topbar: false,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="checkout-container">
      <div className="checkout-heading">
        <h1>Order Summary</h1>
      </div>
      <div className="orderBoxCheckout">
        {cartitems.map((item) => (
          <div key={item.id}>
            <p> {item.mycar}</p>
            <p>{item.service}</p>
            <p>{item.package}</p>
            <p>{item.serviceStartDate.toString()}</p>

            <p style={{ fontSize: "4vh", color: "#419ED4" }}>{item.price}</p>
            <hr></hr>
          </div>
        ))}
      </div>

      <div className="CheckoutTotal">
        {/* <div className="CheckoutTotalHeading">
          <h1>TOTAL PRICE</h1>
        </div> */}
        {/* <div>
          {cartitems.map((each) => (
            <div key={each.id} className="totalpriceitems">
              <h1>{each.category}</h1>
              <h1 style={{ color: "orangered", paddingLeft: "1rem" }}>
                Rs.{each.price}
              </h1>
            </div>
          ))}
        </div> */}
        {/* <hr></hr> */}
        <p id="Total" style={{ color: "black", fontSize: "3vh" }}>
          Total :
        </p>
        <p id="Price" style={{ color: "#43C355", fontSize: "3vh" }}>
          Rs.
          {cartitems.reduce(function (tot, arr) {
            return tot + arr.price;
          }, 0)}
          /-
        </p>
      </div>
      <div className="checkoutButonContainer">
        <button onClick={displayRazorpay}>Checkout</button>
      </div>
    </div>
  );
}
export default CheckoutComponent;
// try {
//       const response = await fetch("http://localhost:5000/api/users/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: ItemSingUp.name,

//           mobileNo: ItemSingUp.phone,
//           email: ItemSingUp.email,
//           password: ItemSingUp.password,
//         }),
//       });
