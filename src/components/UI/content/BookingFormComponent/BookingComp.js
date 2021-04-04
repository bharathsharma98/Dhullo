import React, { useState, useEffect } from "react";
import { ServicePrice, CarTypePrice } from "../../../price";
import "./OtherBookingComp.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import {
 
  setHours,
  getHours,
  getMinutes,
  setMinutes,
  getDay,
} from "date-fns";
import { CarBox } from "../../../../globaStyles/styleElements";
import { useId } from "react-id-generator";
import { useSelector, useDispatch } from "react-redux";
import { loginOpen } from "../../../../Redux/LoginToggle/LoginActions";
const BookingForm = (props) => {
  useEffect(() => {
    console.log(props.category);
  }, []);

  const LoginToggle = useSelector((state) => state.loginToggle);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  const [itemId] = useId();

  let tempcars = [];
  let duration = ["MONTHLY", "QUARTERLY", "HALFYEARLY", "YEARLY"];
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.customer);

  const [item, setItem] = useState({
    id: itemId,
    mytime: "",
    mycars: [],

    cardate: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (checked === true) {
        tempcars = item.mycars.concat(value);
        setItem({ ...item, mycars: tempcars });
      } else {
        setItem({
          ...item,
          mycars: item.mycars.filter(function (val) {
            return val !== value;
          }),
        });
      }
    } else setItem({ ...item, [name]: value });
  };
  console.log(item);

  let finaltempcars = [];
  for (let i = 0; i < item.mycars.length; i++) {
    finaltempcars.push({});
  }
  for (let i = 0; i < item.mycars.length; i++) {
    finaltempcars[i].id =  Math.floor(Math.random() * 100);  ;
    finaltempcars[i].customerId = user.id;
    finaltempcars[i].orderDate = new Date();

    finaltempcars[i].serviceStartDate = item.cardate;
    finaltempcars[i].time = item.mytime;
    finaltempcars[i].mycar = item.mycars[i];
    finaltempcars[i].packageDuration =
      item.duration !== undefined ? item.duration : "Monthly";
    // console.log(user.cars[i].carType);
    finaltempcars[i].carType = user.cars[i].carType;
    finaltempcars[i].carId = user.cars[i].id;

    if ((props.category === "ONETIME") ||
    (props.category === "SILVER" )||
    (props.category === "GOLD" )||
    (props.category === "PLATINUM" )
    
    ) {
      finaltempcars[i].service = "Washing";
      finaltempcars[i].package = props.category;
    } else {
      finaltempcars[i].service = props.category;
      finaltempcars[i].package = null;
    }
    finaltempcars[i].serviceprice = ServicePrice(props.category);
    finaltempcars[i].categoryprice = CarTypePrice(user.cars[i].carType);
    finaltempcars[i].price =
      finaltempcars[i].serviceprice + finaltempcars[i].categoryprice;
  }

  console.log(finaltempcars);
  return (
    <div className="bookingform">
      <div className="bookingform-left">
        <h2>{props.category}</h2>
        {user.cars !== undefined ? (
          <div
            className={
              user.cars.length !== 0
                ? "carbox-container"
                : "carbox-container_null"
            }
          >
            {user.cars.map((onecar) => (
              <CarBox key={onecar.id} selected={item.mycars.length}>
                <div className="checkBox">
                  <input
                    type="checkbox"
                    name={onecar.details}
                    value={onecar.details}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p>{onecar.details}</p>
                  <small>{onecar.streetName}</small>
                </div>
              </CarBox>
            ))}
          </div>
        ) : null}

        <div>
          {isSignedIn ? (
            <Link
              to={{
                pathname: "/addcar",
                click: props.click,
              }}
            >
              ADD NEW CAR
            </Link>
          ) : (
            <Link to="#" onClick={() => dispatch(loginOpen())}>
              Login
            </Link>
          )}
        </div>

        <DatePicker
          // disabled={item.mycars.length === 0 ? true : false}
          className={item.mycars.length === 0 ? "disabled" : "enabled"}
          selected={item.cardate}
          onChange={(cardate) => setItem({ ...item, cardate })}
          minDate={addDays(new Date(), 1)}
          placeholderText="Select Date"
        />
        {props.category === "SANITIZATION" ||
        props.category === "EXTERIOR" ||
        props.category === "INTERIOR" ||
        props.category === "ONETIME" ? (
          <div>
            <DatePicker
              // disabled={item.mycars.length === 0 ? true : false}
              className={item.mycars.length === 0 ? "disabled" : "enabled"}
               selected={item.mytime}
              onChange={(mytime) => {
                console.log(mytime);
                var hours = getHours(mytime);
                var mins = getMinutes(mytime);
                console.log(hours, mins);
                console.log(item.serviceStartDate)
                var hoursDate = setHours(item.cardate, hours);
                var MinutesDate = setMinutes(hoursDate, mins);
                console.log(MinutesDate);
                setItem({
                  ...item,
                   mytime: MinutesDate,
                });
                console.log(item);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select Time"
            />
          </div>
        ) : (
          <select
            style={{ marginBottom: "1rem" }}
            name="duration"
            onChange={handleChange}
            className={item.mycars.length === 0 ? "disabled" : "enabled"}
          >
            {duration.map((oneduration) => (
              <option value={oneduration} key={oneduration}>
                {oneduration}
              </option>
            ))}
          </select>
        )}
        <div className="buttonrow">
          <button
            disabled={item.mycars.length === 0 ? true : false}
            className={item.mycars.length === 0 ? "disabled" : "enabled"}
            onClick={() => {
              item.mycars.length === 0
                ? alert("NO CAR HAS BEEN ADDED")
                : finaltempcars.map((onecar) => {
                    dispatch(AddToCart(onecar));

                    alert(onecar.service + " Added to " + onecar.mycar);
                    props.togglePress(onecar.category);
                  });
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookingForm;
