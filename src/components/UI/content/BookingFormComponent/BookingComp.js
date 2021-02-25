import React, { useState } from "react";
import { ServicePrice, CarTypePrice } from "../../../price";
import "./OtherBookingComp.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import { useDispatch, useSelector } from "react-redux";
import {  CarBox } from '../../../../globaStyles/styleElements';
import { useId } from "react-id-generator";

const BookingForm = (props) => {
    const [itemId] = useId();
  let tempcars = [];
  let duration = ["MONTHLY", "QUARTERLY", "HALFYEARLY", "YEARLY"];
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

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
    finaltempcars[i].id = item.id;
    finaltempcars[i].category = props.category;
    finaltempcars[i].date = item.cardate;
    finaltempcars[i].time = item.mytime;
    finaltempcars[i].mycar = item.mycars[i];
    finaltempcars[i].duration = item.duration;
    console.log(user.cars[i].carType);
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
        {user.cars.map((onecar) => (
          <div className="carbox-container" key={onecar.id}>
            <CarBox>
              <input
                className="checkBox"
                type="checkbox"
                name={onecar.details}
                value={onecar.details}
                onChange={handleChange}
              />
              <div>
                <p>{onecar.details}</p>
              </div>
               
            </CarBox>
          </div>
        ))}
        <div>
          <Link path to="/addcar">
            ADD NEW CAR
          </Link>
        </div>

        <DatePicker
          disabled={item.mycars.length === 0 ? true : false}
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
              disabled={item.mycars.length === 0 ? true : false}
              className={item.mycars.length === 0 ? "disabled" : "enabled"}
              selected={item.mytime}
              onChange={(mytime) => setItem({ ...item, mytime })}
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
            disabled={item.mycars.length === 0 ? true : false}
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

                    alert(onecar.category + " Added to " + onecar.mycar);
                  });
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="bookingform-right">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          semper condimentum massa, in pretium nibh malesuada quis. Praesent
          facilisis elit in augue ullamcorper lobortis. Donec condimentum lectus
          "
        </p>
      </div>
    </div>
  );
};
export default BookingForm;