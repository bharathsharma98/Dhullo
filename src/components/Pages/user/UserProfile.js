import React, {  useState } from "react";
import profile from "../../../Image/profilepic.svg";
import edit from "../../../Image/edit.svg";
import Loader from "react-loader-spinner";
import emptycart from "../../../Image/emptycart.png";
import { useDispatch, useSelector } from "react-redux";
 
import { removeCar } from "../../../Redux/UserRedux/UserActions";
import "./UserProfile.css";
import history from '../../../history/history'
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
 
 
 
// import moment from "moment";

// var myDate = moment().toDate();
// var today = moment(myDate.date, "YYYY-MM-DD HH:mm:ss");
//let tommorow = moment("2020-12-02T00:00:00.000Z");
const editCar = (onecar) => {
  history.push('/addcar',onecar)
}
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
            <h3 style={{ textAlign: 'center',marginTop:'3%' }}>Delete this car?</h3>
            <div className="promptbuttoncontainer">
            <button className="promptbuttonNo" onClick={onClose}>
            <h3>No</h3>
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
              <h3>Yes</h3>
              
            </button>
            </div>
           
          </div>
        );
      },
    });
    setLoading(false);
 
  }
 

  return (
    <div className="userprofilecomponent">
      <div className="profiledetailscontainer">
        <img className="profileimg" src={profile} alt="profileimage"></img>
        <h2>{`Hi ${user.name}`}</h2>
        <section className="mobile">
          <h4>{`${user.mobileNo}`}</h4>
          <Link to="/edituser">
            <img style={{marginTop:'1rem'}} src={edit} alt="icon"></img>
          </Link>
        </section>
      </div>
 
      <h1  style={{textAlign:'center'}}>Car Details</h1>
      <div className="personaldeatils">
        {user.cars.length === 0 ? (
          <Link to="/addcar">Add A Car</Link>
        ) : (
          user.cars.map((onecar) => (
            <div key={onecar.details} className="cars">
              <div className="carImage">
                <img src={emptycart} alt={emptycart}></img>
              </div>
              <div className="carname" style={{ marginTop: "1rem" }}>
                <h2> {onecar.details}</h2>
              </div>

              <div className="addresscar" style={{ marginTop: "2rem" }}>
                <label> {onecar.houseName}</label>

                <label> {onecar.streetName}</label>
                <label> {onecar.pincode}</label>
              </div>

              <div className="editicon">
                <Link path to="/addcar">
                  <img
                    style={{ marginTop: "2rem" }}
                    onClick={() => editCar(onecar)}
                    src={edit}
                    alt="icon"
                  ></img>
                </Link>
              </div>

              <div className="carbuttoncontainer">
                <button
                  style={{ marginTop: "2rem" }}
                  className="carbuttonsremove"
                  onClick={() => deletecar(onecar.id)}
                >
                  remove
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
      
      {/* <div className="activesub">
        <h1 className="h3">Active Subscription</h1>
        {/* {activemerge.map((merge) => (
          <div key={merge.id}>
            <div className="sunscriptionliststatus">
              <div className="cardetailsinActive">
                <h4 className="h4">{merge.details}</h4>
                <h4 className="h4">{merge.order.service}</h4>
                <h4 className="h4">{merge.order.package}</h4>
              </div>

              <section className="subbar">
                <AlternateSub
                  package={merge.order.package}
                  duration={merge.order.packageDuration}
                  startDate={merge.order.orderDate}
                  events={merge.order.dailyStatus}
                />
              </section>
            </div>
          </div>
        ))} */}
      {/* <hr className="line"></hr>
      </div> */}

      {/* <div className="pastordercomponent">
        <div className="pastorderheader">
          <h1 className="h3">Past orders</h1>
        </div>

        {pastmerge.map((merge) => {
          return (
            <div className="onepastorderbox" key={merge.id}>
              <h3 className="h3">{merge.details}</h3>
              <h4 className="h4">{merge.order.service}</h4>
              <h4 className="h4">{merge.order.package}</h4>
              <section className="pastbuttoncontainer">
                <button className="addorderbutton">Add to Cart</button>
              </section>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
export default UserProfile;
