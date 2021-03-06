import React, { useState, useEffect } from "react";
import { ServicePrice, CarTypePrice } from "../../../price";
import "./OtherBookingComp.css";
import history from "../../../../history/history";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { AddToCart } from "../../../../Redux/cart/CartActions";
import edit from "../../../../Image/edit.svg";
import plus from '../../../../Image/plus.svg'
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

  var totalPriceArray = [];
 const width = { matches: window.matchMedia("(min-width: 768px)").matches };
  
  const LoginToggle = useSelector((state) => state.loginToggle);
  const isSignedIn = useSelector((state) => state.user.UserSignedIn);
  const [itemId] = useId();

  let tempcars = [];
  let tempPackage = [];
  let duration = ["MONTHLY", "QUARTERLY", "HALFYEARLY", "YEARLY"];
  const dispatch = useDispatch();
  const surfaces = ['INTERIOR', 'EXTERIOR'];
  const user = useSelector((state) => state.user.customer);
const [disables, setDisabled] = useState({
  id: "",
  state: true,
});
  console.log(disables)
  const [item, setItem] = useState({
    id: itemId,
    mytime: "",
    mycars: [],
    package:[],

    cardate: "",
  });
  var sumTotal = 0;
  const [sumtotal, setSumTotal] = useState({ Total :0});
  const [packageArray, setPackageArray] = useState({
  package:[]
})
  const handleSurafe = (e) => {
    const { name, checked, value, type } = e.target;
    if (type === "checkbox") {
      if (checked === true) {

        tempPackage = item.package.concat(value);
        setItem({ ...item, package: tempPackage });
      } else {
        setItem({
          ...item,
          package: item.package.filter(function (val) {
            return val !== value;
          }),
        });
      }
    } else setItem({ ...item, [name]: value });

    console.log(item);
  };

  const handleChange = (e) => {
    
   
  
    console.log(sumtotal)
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
  const handleChangeDiffrently = (e) => {
   
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      if (checked === true) {
         
        setItem({  mycars: [value],package:[] });
         
      } else {
        setItem({
          ...item,
          mycars: item.mycars.filter(function (val) {
            return val !== value;
          }),
        });
        
      }
    } else setItem({ ...item, [name]: value });
      console.log(item);
  }
 

  console.log(item.mycars[0]);

  let finaltempcars = [];
  for (let i = 0; i < item.mycars.length; i++) {
    finaltempcars.push({});
  }
  const carTypeHanler = (carToCheck) => {
    var car = user.cars.filter((onecar) => onecar.details == carToCheck.mycar);
    return car[0]?.carType
  };
  const carIdhandler = (carToCheck) => {
    var car = user.cars.filter(
      (onecar) => onecar.details == carToCheck.mycar
    );
    return car[0]?.id
  };
  const carStreethandler = (carToCheck) => {
    var car = user.cars.filter(
      (onecar) => onecar.details == carToCheck.mycar
    );
    return car[0]?.streetName
  };
  const carHousehandler = (carToCheck) => {
    var car = user.cars.filter(
      (onecar) => onecar.details == carToCheck.mycar
    );
    return car[0]?.houseName
  };
  const carPinCodehandler = (carToCheck) => {
    var car = user.cars.filter(
      (onecar) => onecar.details == carToCheck.mycar
    );
    return car[0]?.pincode
  };

  const packageDecider = (packages) => {
    if (packages.length > 1)
    {
      return "FULL"
    }
    else {
      return packages[0]
    }
  }
  for (let i = 0; i < item.mycars.length; i++) {
    finaltempcars[i].id =  Math.floor(Math.random() * 100); 
    finaltempcars[i].customerId = user.id;
    finaltempcars[i].orderDate = new Date();

    finaltempcars[i].serviceStartDate = item.cardate;
    finaltempcars[i].time = item.mytime;
    finaltempcars[i].mycar = item.mycars[i];
    finaltempcars[i].serviceDays = item.serviceDays;
    finaltempcars[i].packageDuration =
    item.duration !== undefined ? item.duration : "ONE TIME";
    // console.log(user.cars[i].carType);
    finaltempcars[i].carType = carTypeHanler(finaltempcars[i]);
    finaltempcars[i].carId = carIdhandler(finaltempcars[i]);
    finaltempcars[i].streetName = carStreethandler(finaltempcars[i]);
    finaltempcars[i].houseName = carHousehandler(finaltempcars[i]);
    finaltempcars[i].pincode = carPinCodehandler(finaltempcars[i]);

    if ((props.category === "ONE TIME") ||
    (props.category === "SILVER" )||
    (props.category === "GOLD" )||
    (props.category === "PLATINUM" )
    
    ) {
      finaltempcars[i].service = "WASHING";
      finaltempcars[i].package = props.category;
    }
    else if ((props.category === "SANITIZATION")) {
      finaltempcars[i].service = props.category;
      finaltempcars[i].package = 'FULL';
    }
    else if ((props.category === "DETAILING")) {
      finaltempcars[i].service = 'DETAILING';
      finaltempcars[i].package = packageDecider(item.package);
    }
 
    else {
      finaltempcars[i].service = props.category;
      finaltempcars[i].package = props.category;
    }
    finaltempcars[i].serviceprice = ServicePrice(props.category);
    finaltempcars[i].categoryprice = CarTypePrice(carTypeHanler(finaltempcars[i]));
    console.log()
    finaltempcars[i].price =
      finaltempcars[i].serviceprice + finaltempcars[i].categoryprice;
  
  }
   
  
 

  

 

   
  


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
                 <CarBox
                   key={onecar.id}
                   service={props.category}
                   disabled={
                     onecar.details === disables.id[0]?.details &&
                     (props.category === "ONE TIME" ||
                       props.category === "SANITIZATION" ||
                       props.category === "DETAILING")
                       ? true
                       : false
                   }
                 >
                   <div className="checkBox">
                     {props.category === "ONE TIME" ||
                     props.category === "SANITIZATION" ||
                     props.category === "DETAILING" ? (
                       <input
                         checked={
                           item.mycars[0] === onecar.details ? true : false
                         }
                         disabled={
                           onecar.details === disables.id[0]?.details &&
                           (props.category === "ONE TIME" ||
                             props.category === "SANITIZATION" ||
                             props.category === "DETAILING")
                             ? disables.state
                             : false
                         }
                         type="checkbox"
                         name={onecar.details}
                         value={onecar.details}
                         onChange={
                           props.category === "ONE TIME" ||
                           props.category === "SANITIZATION" ||
                           props.category === "DETAILING"
                             ? handleChangeDiffrently
                             : handleChange
                         }
                         className="enabled"
                       />
                     ) : (
                       <input
                          
                         disabled={
                           onecar.details === disables.id[0]?.details &&
                           (props.category === "ONE TIME" ||
                             props.category === "SANITIZATION" ||
                             props.category === "DETAILING")
                             ? disables.state
                             : false
                         }
                         type="checkbox"
                         name={onecar.details}
                         value={onecar.details}
                         onChange={
                           props.category === "ONE TIME" ||
                           props.category === "SANITIZATION" ||
                           props.category === "DETAILING"
                             ? handleChangeDiffrently
                             : handleChange
                         }
                         className="enabled"
                       />
                     )}
                   </div>

                   <div>
                     <p>{onecar.details}</p>
                     <h2>{onecar.houseName}</h2>
                     {/* <h3>{onecar.streetName}</h3> */}
                     <h4>{onecar.pincode}</h4>
                   </div>
                   <div>
                     <Link
                       to={{
                         pathname: "/addcar",
                         state: onecar,
                       }}
                     >
                       <img src={edit}></img>
                     </Link>
                   </div>
                 </CarBox>
               ))}
               <div className="addNewCarButtonContainer">
                 {isSignedIn ? (
                   <div className="addnewCarButton">
                     <Link
                       to={{
                         pathname: "/addcar",
                         click: props.click,
                       }}
                     >
                       <img src={plus}></img>
                     </Link>
                   </div>
                 ) : null}
                 <strong>Add Car</strong>
               </div>
             </div>
           ) : (
             <div className="addNewCarButtonContainerLoggedOut">
               <div className="addnewCarButtonLoggedOut">
                 <Link
                   style={{ marginBottom: "1rem  " }}
                   to={width.matches ? "#" : "/signin"}
                   onClick={width.matches ? () => dispatch(loginOpen()) : null}
                 >
                   <img src={plus}></img>
                 </Link>
               </div>
               <strong>Add Car</strong>
             </div>
           )}
           {props.category === "DETAILING" && isSignedIn ? (
             <div className="surfaceContainer">
               {surfaces.map((surface) => (
                 <div
                   className="checkBoxSurface"
                   style={{
                     display: "flex",
                     justifyContent: "center",
                     margin: "1rem",
                   }}
                 >
                   <input
                     type="checkbox"
                     name="package"
                     value={surface}
                     onChange={handleSurafe}
                   />
                   <p>{surface}</p>
                 </div>
               ))}
             </div>
           ) : null}
           {item.mycars.length > 1 &&
           (props.category === "ONE TIME" ||
             props.category === "SANITIZATION" ||
             props.category === "DETAILING") ? (
             <label style={{ color: "red", marginBottom: "1rem" }}>
               Please select only one Car
             </label>
           ) : null}
           <div className="priceRowService">
             {isSignedIn ? (
               <div style={{ display: "flex", alignItems: "center" }}>
                 <p>Price : </p>
                 <p style={{ letterSpacing: "2px" }}>
                   Rs
                   {finaltempcars.reduce(function (tot, arr) {
                     return tot + arr.price;
                   }, 0)}
                 </p>
               </div>
             ) : null}
           </div>

           <label style={{ marginBottom: "-0.8rem" }}>Select Date</label>
           <DatePicker
             filterDate={(date) => getDay(date) !== 1}
             disabled={item.mycars.length === 0 ? true : false}
             className={item.mycars.length === 0 ? "disabled" : "enabled"}
             selected={item.cardate || new Date()}
             onChange={(cardate) => {
               var serviceDays = [];
               if (props.category === "SILVER") {
                 if (
                   getDay(cardate) === 0 ||
                   getDay(cardate) === 3 ||
                   getDay(cardate) === 5
                 ) {
                   serviceDays = [0, 3, 5];
                 } else {
                   serviceDays = [2, 4, 6];
                 }
               } else {
                 serviceDays = [0, 2, 3, 4, 5, 6];
               }

               setItem({ ...item, cardate, serviceDays: serviceDays });
             }}
             minDate={addDays(new Date(), 1)}
           />
           {props.category === "SANITIZATION" ||
           props.category === "DETAILING" ||
           props.category === "ONE TIME" ? (
             <div style={{ display: "flex", flexDirection: "column" }}>
               <label style={{ marginBottom: "-0.8rem" }}>Select Time</label>
               <DatePicker
                 filterDate={(date) => getDay(date) !== 1}
                 disabled={item.mycars.length === 0 ? true : false}
                 className={item.mycars.length === 0 ? "disabled" : "enabled"}
                 selected={item.mytime || new Date()}
                 onChange={(mytime) => {
                   console.log(mytime);
                   var hours = getHours(mytime);
                   var mins = getMinutes(mytime);
                   console.log(hours, mins);
                   console.log(item.serviceStartDate);
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
               />
             </div>
           ) : (
             <div style={{ display: "flex", flexDirection: "column" }}>
               <label style={{ marginBottom: "1rem" }}>Select Duration</label>
               <select
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
             </div>
           )}
           <div className="buttonrow" style={{ marginTop: "2rem" }}>
             <button
               disabled={
                 item.mycars.length === 0 && item.mycars.length > 1
                   ? true
                   : false
               }
               className={item.mycars.length === 0 ? "disabled" : "enabled"}
               onClick={() => {
                 item.mycars.length === 0
                   ? alert("NO CAR HAS BEEN ADDED")
                   : finaltempcars.map((onecar) => {
                       dispatch(AddToCart(onecar));

                       alert(onecar.service + " Added to " + onecar.mycar);
                       console.log(onecar);
                       props.togglePress(onecar.package || onecar.service);
                     });
               }}
             >
               ADD TO CART
             </button>
           </div>
         </div>

         <div className="bookingform-right"></div>
       </div>
     );
   };
export default BookingForm;
