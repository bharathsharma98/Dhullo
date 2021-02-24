import React from "react";
import "./OneTimeBookingComp.css";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addDays } from "date-fns";
import DatePicker from "react-datepicker";
import { SilverToggle,GoldToggle,PlatinumToggle} from  "../../../../Redux/WashingRedux/WashingActions";
import { useId } from "react-id-generator";
export default function OtherBookingComp() {
  const catprice = useSelector((state) => state.washing);
  const user = useSelector((state) => state.user);
  const [itemId] = useId();
  const [item, setItem] = useState({
    id: itemId,
    cardetail: {
      cars: ["car1 ", "car21", "car3"],
      address: ["blore", "delhi"],
    },
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
    mycar: "",
    cardate: new Date(),
    mytime: new Date(),
    shift: ["Morning", "Evening"],
    duration: ["monthly", "quartarely", "half-yearly", "yearly"],
    startDate: new Date(),
    myduration: "",
    price: catprice.price,
    category: catprice.category,
  });

//if logged in store user object
//on login render userid and request for cars array
//if not logged in set mycars to empty array
//in cars.map in each iteration request for cars details and display one by one

  const inputsHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const cart = useSelector((state) => state.cart.CartItems);
  console.log(cart);
  const dispatch = useDispatch();

  return (
    <div>
      <hr className="line1"></hr>
      <form className="washingform">
        <div className="washheading">
          <h2> Book a washing slot</h2>
          <h3>{catprice.category}</h3>
        </div>
        <div className="selectrow">
        <div className="selectvehicle">
            Select vehicle
            <div className="innerselectvehicle">
              {user.cars.map((thiscar) => (
                <div key={thiscar.id}>
                  <input
                    className="radio"
                    type="radio"
                    name="mycar"
                    value={thiscar.details}
             
                    onChange={inputsHandler}
                  ></input>
                  {thiscar.details}
                </div>
              ))}
            </div>
            <br></br>
            <Link path to="/addcar">
              ADD NEW CAR
            </Link>
          </div>
          <div className="durationrow">
            Select Duration
            <select
              className="select"
              onChange={inputsHandler}
              name="myduration"
            >
              {item.duration.map((duration) => (
                <option value={duration}>{duration}</option>
              ))}
            </select>
            {item.myduration.toString() === "monthly" ? (
              <div className="datepicker" key={new Date()}>
                <DatePicker
                  selected={item.startDate}
                  onChange={(startDate) => setItem({ ...item, startDate })}
                  minDate={new Date()}
                  maxDate={addDays(item.startDate, 30)}
                  placeholderText="Select a date before 5 days in the future"
                />
                <select
                  className="select"
                  onChange={inputsHandler}
                  name="myshift"
                >
                  {item.shift.map((duration) => (
                    <option value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
            ) : (
              <h1>{item.myduration}</h1>
            )}
          </div>
        </div>

        <div className="pricerow">
          <h4>Price:{catprice.price}</h4>
        </div>
      </form>

      <div className="buttonrow">
        <button
          onClick={() => {
            item.mycar === ''? alert("NO CAR HAS BEEN ADDED"):
            dispatch(AddToCart(item));
            switch (catprice.category) {
              case 'SILVER':{
                dispatch(SilverToggle(catprice.category));
                break;}
              case 'GOLD':{
                dispatch(GoldToggle(catprice.category))
                break;}
              case 'PLATINUM':{
                dispatch(PlatinumToggle(catprice.category))
                break;}
              default:{
               
                break;}

            }
          }}
        >
          ADD TO CART
        </button>
      </div>
      <hr className="line1"></hr>
    </div>
  );
}
