import React, { useState } from "react";
import profile from "../../../Image/profilepic.svg";
import edit from "../../../Image/edit.svg";
import Loader from "react-loader-spinner";
import emptycart from "../../../Image/emptycart.png";
import { useDispatch, useSelector } from "react-redux";
import SUV from "../../../Image/Suv.png";
import PREMIUM from "../../../Image/Premium.png";
import SEDAN from "../../../Image/Sedan.png";
import HATCHBACK from "../../../Image/Hatchback.png";
import { removeCar } from "../../../Redux/UserRedux/UserActions";
import "./UserProfile.css";
import history from "../../../history/history";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// import moment from "moment";

// var myDate = moment().toDate();
// var today = moment(myDate.date, "YYYY-MM-DD HH:mm:ss");
//let tommorow = moment("2020-12-02T00:00:00.000Z");
const editCar = (onecar) => {
  history.push("/addcar", onecar);
};
function UserProfile() {
  const user = useSelector((state) => state.user.customer);
  const cars = useSelector((state) => state.user.customer.cars);

  const dispatch = useDispatch();

  const [Loading, setLoading] = useState(false);

  function deletecar(carId) {
    console.log(carId, "should be deleted");
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <p style={{ textAlign: "center", marginTop: "3%" }}>
              Delete this car?
            </p>
            <div className="promptbuttoncontainer">
              <button className="promptbuttonNo" onClick={onClose}>
                <small>No</small>
              </button>
              <button
                className="promptbuttonYes"
                onClick={() => {
                  setLoading(true);
                  fetch(`http://localhost:5000/api/cars/${carId}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: carId,
                    }),
                  })
                    .then((res) => {
                      dispatch(removeCar(carId));
                      console.log(cars);
                      setLoading(false);
                    })

                    .catch((err) => console.log(err));
                  onClose();
                }}
              >
                <small>Yes</small>
              </button>
            </div>
          </div>
        );
      },
    });
    setLoading(false);
  }
  const [imageurl] = useState({
    SUV: SUV,
  });

  return (
    <div className="userprofilecomponent">
      <div className="profiledetailscontainer">
        <img className="profileimg" src={profile} alt="profileimage"></img>

        <h2>{`Hi ${user.name}`}</h2>
        <section className="mobileUserProfile">
          <h4>{`${user.mobileNo}`}</h4>
          <Link to="/edituser">
            <img style={{ marginTop: "1rem",marginLeft:'-2rem' }} src={edit} alt="icon"></img>
          </Link>
        </section>
      </div>

      <h1 style={{ textAlign: "center" }}>Car Details</h1>
      <div className="personaldeatils">
        {user.cars.length === 0 ? (
          <Link to="/addcar">Add A Car</Link>
        ) : (
          user.cars.map((onecar) => (
            <div key={onecar.details} className="cars">
              <div className="carImage">
                <img
                  src={
                    onecar.carType === "SUV"
                      ? SUV
                      : null || onecar.carType === "SEDAN"
                      ? SEDAN
                      : null || onecar.carType === "HATCHBACK"
                      ? HATCHBACK
                      : null || onecar.carType === "PREMIUM"
                      ? PREMIUM
                      : null
                  }
                  alt={emptycart}
                ></img>
              </div>

              <div className="addresscar" style={{ marginTop: "" }}>
                <h2> {onecar.details}</h2>
                <p>{onecar.houseName} </p>
                <p>{onecar.streetName} </p>
                <p>{onecar.pincode}</p>
              </div>

              <div className="editicon">
                <Link to={{
                  pathname: "/addcar",
                state:onecar}}>
                  <img
                    style={{ marginTop: "2rem" }}
                    
                    src={edit}
                    alt="icon"
                  ></img>
                </Link>
              </div>

              <div className="carbuttonsremove">
                <button
                  style={{ marginTop: "1rem" }}
                  onClick={() => deletecar(onecar.id)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))
        )}
        <Loader
          type="Oval"
          color="#03588c"
          height="70"
          width="70"
          visible={Loading}
          style={{
            width: "100%",
            height: "100",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
}
export default UserProfile;
