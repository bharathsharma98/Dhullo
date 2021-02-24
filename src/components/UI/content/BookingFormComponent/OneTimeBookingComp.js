import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./OneTimeBookingComp.css";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { OneTimeToggle } from "../../../../Redux/WashingRedux/WashingActions";
import { RetainUser } from "../../../../Redux/UserRedux/UserActions";
import { useId } from "react-id-generator";
export default function OneTimeBookingComp() {
  const catprice = useSelector((state) => state.washing);
  const custCars = useSelector((state) => state.user.cars);
  const user = useSelector((state) => state.user);

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
    price: catprice.price,
    category: catprice.category,
    cars: custCars,
  });
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    dispatch(RetainUser());
  }, [item.cars,dispatch]);
  const inputsHandler = (e, price = item.price, category = item.category) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    
    });
  };
  console.log(item);
  console.log(user);
  return (
    <div>
      <hr className="line1"></hr>
      <form className="washingform">
        <div className="washheading">
          <h3> Book a washing slot</h3>
          <h2>{catprice.category}</h2>
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
          <h3>Price:{catprice.price}</h3>
        </div>
      </form>

      <div className="buttonrow">
        <button
          onClick={() => {
            item.mycar === ""
              ? alert("NO CAR HAS BEEN ADDED")
              :
           
              dispatch(AddToCart(item));
            dispatch(OneTimeToggle(catprice.category));
          }}
        >
          ADD TO CART
        </button>
      </div>
      <hr className="line1"></hr>
    </div>
  );
}
