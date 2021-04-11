import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./checkoutcomp.css";
import history from "../../../../history/history";
import Servicepage  from "../../../UI/PageComponents/ServicePageComp";
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
function clickhandler()
{
  console.log('clicked')
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

  //  const confrimedOrders =  await fetch(
  //     "http://localhost:5000/api/razorpay/paymentConfirmation",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         paymentId: response.razorpay_payment_id,
  //         orderId: response.razorpay_order_id,
  //       }),
  //     }
  //   ).then((t) => t.json());
  //   console.log(data);
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
       handler: async function (response) {
         console.log(response);
         
        // alert(response.razorpay_payment_id);

        const Confimed = await fetch(
          "http://localhost:5000/api/razorpay/paymentConfirmation",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorPayId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
            }),
          }
        ).then((t) => t.json());
         console.log(Confimed);
         Confimed.existingOrders.length > 0
           ? history.push({
               pathname: "/confirmation",
               orders: Confimed.existingOrders,
               status: "success",
             })
           : history.push({
               pathname: "/confirmation",
               orders: Confimed.existingOrders,
             status: "failure",
            
             });
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
    <div>
      {cartitems.length > 0 ? (
        <div className="checkout-container">
          <div className="checkout-heading">
            <h1>Order Summary</h1>
          </div>
          <div className="orderBoxCheckout">
            {cartitems.map((item) => (
              <div key={item.id}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Car</p>
                  <p>:</p>
                  <p id="checkoutData">{item.mycar}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Service</p>
                  <p>:</p>
                  <p id="checkoutData">{item.service}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Package</p>
                  <p>:</p>
                  <p id="checkoutData">{item.package}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Order date</p>
                  <p>:</p>
                  <p id="checkoutData">
                    {new Date(item.orderDate).toDateString().substr(3)}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Service start date</p>
                  <p>:</p>
                  <p id="checkoutData">
                    {new Date(item.serviceStartDate).toDateString().substr(3)}
                  </p>
                </div>

                {item.time ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p id="checkoutTitle">Service Time </p>
                    <p>:</p>
                    <p id="checkoutData">
                      {new Date(item.time)
                        .toTimeString()
                        .toString()
                        .substr(0, 5)}
                    </p>
                  </div>
                ) : null}
                {item.packageDuration ? (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p id="checkoutTitle">Service duration</p>
                    <p>:</p>
                    <p id="checkoutData">{item.packageDuration}</p>
                  </div>
                ) : null}

                <div style={{ display: "flex", alignItems: "center" }}>
                  <p id="checkoutTitle">Total price</p>
                  <p>:</p>
                  <p id="checkoutData">Rs {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="CheckoutTotal"> */}
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
          {/* <p id="Total" style={{ color: "black", fontSize: "3vh" }}>
              Total :
            </p>
            <p id="Price" style={{ color: "#43C355", fontSize: "3vh" }}>
              Rs.
              {cartitems.reduce(function (tot, arr) {
                return tot + arr.price;
              }, 0)}
              /-
            </p>
          </div> */}
          <div className="checkoutButonContainer">
            <button onClick={displayRazorpay}>CHECKOUT</button>
          </div>
        </div>
      ) : (
        <Servicepage click={clickhandler} />
      )}
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
