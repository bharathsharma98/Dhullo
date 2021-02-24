import React from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./OneTimeBookingComp.css";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SanitToggle } from "../../../../Redux/sanitization/sanitizationActions";
import { useId } from "react-id-generator";
export default function SanitDetailingComp(props) {
 

  const [itemId] = useId();
  const [item, setItem] = useState({
    id: itemId,

    mycar: "",
    address: {
      
      lat: "-37.3159",
      lng: "81.1496",
    },
    cardate: new Date(),
    mytime: new Date(),
    price: props.price,
    category: props.category,
    cars: props.cars,
  });
  const dispatch = useDispatch();

  

  const inputsHandler = (e, price = item.price, category = item.category) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };
 
  return (
    <div>
      <hr className="line1"></hr>
      <form className="washingform">
        <div className="washheading">
          <h3> {`Book a ${props.category} slot`}</h3>
        
        </div>
        <div className="selectrow">
          <div className="selectvehicle">
            Select vehicle
            <div className="innerselectvehicle">
              {props.user.cars.map((thiscar) => (
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
          <div className="selectdate">
            Select date
            <DatePicker
              selected={item.cardate}
              onChange={(cardate) => setItem({ ...item, cardate })}
              minDate={addDays(new Date(), 1)}
            />
            {/* <DatePicker
      selected={item.startDate}
      onChange={startDate => setItem({...item,startDate})}
      minDate={new Date()}
      maxDate={addDays(item.startDate,30)}
      placeholderText="Select a date before 5 days in the future"
    /> */}
            Select time
            <DatePicker
              selected={item.mytime}
              onChange={(mytime) => setItem({ ...item, mytime })}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </div>
        </div>

        <div className="pricerow">
          <h4>Price:{item.price}</h4>
        </div>
      </form>

      <div className="buttonrow">
        <button
          onClick={() => {
            item.mycar === ""
              ? alert("NO CAR HAS BEEN ADDED")
                          : dispatch(AddToCart(item));
            dispatch(SanitToggle(item.category));
          }}
        >
          ADD TO CART
        </button>
      </div>
      <hr className="line1"></hr>
    </div>
  );
}
