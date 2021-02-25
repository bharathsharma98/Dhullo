import React, { useState, useEffect } from "react";
import "./addcarcomponent.css";
import { CarTypes} from '../../../vehiclesData';
import Loader from "react-loader-spinner";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch } from "react-redux";
import { addCar } from "../../../../Redux/UserRedux/UserActions";
import history from "../../../../history/history";
import { confirmAlert } from "react-confirm-alert";
const AddCarComponent = (props) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  console.log(props);
  const [Loading, setLoading] = useState(false);
  const [CarDetails, setCarDetails] = useState({
    carId:
      history.location.state === undefined ? "" : history.location.state.id,
    carname:
      history.location.state === undefined
        ? ""
        : history.location.state.details,
    house_no:
      history.location.state === undefined
        ? ""
        : history.location.state.houseName,
    street:
      history.location.state === undefined
        ? ""
        : history.location.state.streetName,
    pincode:
      history.location.state === undefined
        ? ""
        : history.location.state.pincode,
    landmark:
      history.location.state === undefined
        ? ""
        : history.location.state.society,
    cartypes:  CarTypes,
    detectaddress: "",
    lat: "",
    long: "",
    cartype:
      history.location.state === undefined
        ? ""
        : history.location.state.carType,
    vehicleno:
      history.location.state === undefined
        ? ""
        : history.location.state.vehicleno,
    carmodel:
      history.location.state === undefined
        ? ""
        : history.location.state.carmodel,
  });

  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Location Available", history);
    } else {
      console.log("Not Available");
    }
  });
  const getloc = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCarDetails({
        ...CarDetails,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };

  const inputsHandler = (e) => {
    setCarDetails({ ...CarDetails, [e.target.name]: e.target.value });
  };

  async function SubmitHandler() {
    setLoading(true);
    //fetch statement to post details to backend
    try {
      const response = await fetch("http://localhost:5000/api/cars/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carType: CarDetails.cartype,
          details: CarDetails.carname,
          street: CarDetails.street,
          customer: user.customer.id,
          pincode: CarDetails.pincode,
          houseName: CarDetails.house_no,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      dispatch(addCar(responseData.car));
      setLoading(false);
      history.goBack();
      // history.push('/services');
    } catch (err) {
      setLoading(false);
      console.log(err);
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className="custom-ui">
              <h3 style={{ textAlign: "center", marginTop: "3%" }}>
                UNABLE TO ADD CHECK ALL DETAILS
              </h3>
              <div className="promptbuttoncontainer">
                <button className="promptbuttonYes" onClick={onClose}>
                  ok
                </button>
              </div>
            </div>
          );
        },
      });
    }
  }

  return (
    <div className="addcarcontainer1">
      <h1>ADD CAR DETAILS</h1>

      <div className="selectrow1">
        <label>Select vehicle type</label>
        <select className="select" name="cartype" onChange={inputsHandler}>
          {CarDetails.cartypes.map((car) => (
            <option value={car.model} key={car}>
              {car.model}
            </option>
          ))}
        </select>
      </div>
      <label>CarName</label>
      <div className="carname">
        <input
          required={true}
          placeholder="CarName"
          type="text"
          value={CarDetails.carname}
          name="carname"
          onChange={inputsHandler}
        ></input>
      </div>
      <label>CarModel</label>
      <div className="carmodel">
        <input
          required={true}
          placeholder="eg - Maruti Suzuki Swift"
          type="text"
          value={CarDetails.carmodel}
          name="carmodel"
          onChange={inputsHandler}
        ></input>
      </div>
      <label>VehicleNo</label>
      <div className="vehicleno">
        <input
          required={true}
          placeholder="KA-01-AB-1111"
          type="text"
          value={CarDetails.vehicleno}
          name="vehicleno"
          pattern="^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$"
          onChange={inputsHandler}
        ></input>
      </div>
      <label>Address</label>
      <div className="carAddress">
        <br></br>

        <input
          placeholder="House.No"
          type="text"
          value={CarDetails.house_no}
          name="house_no"
          onChange={inputsHandler}
        ></input>

        <input
          required
          placeholder="Street"
          type="text"
          value={CarDetails.street}
          name="street"
          onChange={inputsHandler}
        ></input>

        <input
          placeholder="Pincode"
          type="tel"
          required="yes"
          pattern="[0-9]{6}"
          value={CarDetails.pincode}
          name="pincode"
          onChange={inputsHandler}
        ></input>

        <input
          placeholder="Landmark"
          type="text"
          required="yes"
          value={CarDetails.landmark}
          name="landmark"
          onChange={inputsHandler}
        ></input>
        {/* <small>or click here for auto detecting</small>
        <div>
          <button onClick={getloc}>click</button>
        </div> */}
        {/* <div> */}
        {/* Your Address is */}
        {/* <div className="googlemapcontainer" style={{ height: "30rem", width: "60rem"}}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDApJfX9uQ4tKv1JDggGmxBWGfyuzsPycs",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div> */}
        {/* <p>
            HouseNo:{CarDetails.house_no}
            <br></br>Street: {CarDetails.street}
            <br></br>Pincode:{CarDetails.pincode}
            <br></br>Landmark: {CarDetails.landmark}
            <br></br>Lattitude: {CarDetails.lat}
            <br></br>Longitude: {CarDetails.long}
          </p> */}
        {/* </div> */}
        <button className="addcarbtn" onClick={SubmitHandler}>
          ADD A CAR
        </button>
        <div style={{ marginTop: "3%" }}>
          <Loader
            type="Oval"
            color="#03588c"
            height="70"
            width="70"
            visible={Loading}
            style={{
              width: "50%",
              height: "100",
              zIndex: 3000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default AddCarComponent;