import React, { useEffect, useState } from "react";
import {   useSelector } from "react-redux";
import moment from 'moment'
import AlternateSub from "../../UI/content/ActiveSubscriptionComponent/alternateSub";
import "./myOrders.css";
import sanitization from '../../../Image/sanitization.svg';
import detailing from '../../../Image/detailing.svg';
  const width = { matches: window.matchMedia("(min-width: 768px)").matches };
const MyOrders = (props) => {
    useEffect(() => {
      document.body.scrollTop = 0;
      !width.matches ? props.click() : (document.body.scrollTop = 0);
    }, []);
  const packages = ['WASHING','DETAILING','SANITIZATION']
  const [ myCar,setCar] = useState('MG Hector')
  const [myOrder,setMyOrder] = useState('WASHING')
  const user = useSelector((state) => state.user.customer);
  const filteredCars = user.cars.filter(
    (car) => car.details === myCar 
  );
  console.log(filteredCars)

  const filteredServices = filteredCars[0]?.orders.filter(
    (oneCar) => oneCar.service === myOrder
  );
console.log(filteredServices)
  return (
    <div className="myOrderMainContainer">
      <div className="myOrders-picker-container">
        <div className="myOrders-cars-picker">
          {user.cars?.map((oneCar) => (
            <div
              onClick={() => setCar(oneCar.details)}
              id="carPicker"
              key={oneCar.id}
            >
              {oneCar.details}
            </div>
          ))}
        </div>
        <div className="myOrders-service-picker">
          {packages?.map((mypackage) => (
            <div
              id="packagePicker"
              key={mypackage}
              onClick={() => setMyOrder(mypackage)}
            >
              {mypackage}
            </div>
          ))}
        </div>
      </div>
      <div className="carCard">
        <div key={myCar.id} className="oneOrderBox">
          {
            filteredServices?.length !== 0 ? (
              filteredServices?.map((oneOrder) => (
                <div className="orderCard" key={oneOrder.id}>
                  {oneOrder === undefined ? null : (
                    <div className="ActiveOrdersContainer" key={oneOrder.id}>
                      <div className="leftOrder">
                        <AlternateSub
                          package={oneOrder.package}
                          duration={oneOrder.duration}
                          startDate={oneOrder.startDate}
                          events={oneOrder.dailySchedules}
                        />
                      </div>

                      <div className="rightOrder">
                        <div
                          className="orderImageContainer"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: "center",
                          }}
                        >
                          {oneOrder.service === "SANITIZATION" ? (
                            <img src={sanitization}></img>
                          ) : null}
                        </div>
                        <div
                          className="orderImageContainer"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: "center",
                          }}
                        >
                          {oneOrder.service === "DETAILING" ? (
                            <img src={detailing}></img>
                          ) : null}
                        </div>
                        <div style={{ display: "flex" }}>
                          <p id="myOrdersTopic">Car Name</p>
                          <p>:</p>
                          <p>{myCar}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <p id="myOrdersTopic">Service</p>
                          <p>:</p>
                          <p>{oneOrder.service}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <p id="myOrdersTopic">Package</p>
                          <p>:</p>
                          <p>{oneOrder.package}</p>
                        </div>
                        {oneOrder.package === "ONE TIME" ? null : (
                          <div style={{ display: "flex" }}>
                            <p id="myOrdersTopic">Duration</p>
                            <p>:</p>
                            <p>{oneOrder.packageDuration}</p>
                          </div>
                        )}

                        <div style={{ display: "flex" }}>
                          <p id="myOrdersTopic">Service Date</p>
                          <p>:</p>
                          <p>
                            {new Date(oneOrder.serviceStartDate)
                              .toDateString()
                              .substr(3)}
                          </p>
                        </div>

                        {oneOrder.package === "ONE TIME" ? null : (
                          <div style={{ display: "flex" }}>
                            <p id="myOrdersTopic">Days Remaining</p>
                            <p>:</p>
                            <p>
                              {Math.floor(
                                (new Date().getTime() -
                                  new Date(
                                    oneOrder.serviceStartDate
                                  ).getTime()) /
                                  (1000 * 3600 * 24)
                              )}
                            </p>
                          </div>
                        )}
                        <div id="event-indication-container">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div id="red-indication"></div>
                            <p>Missed</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div id="green-indication"></div>
                            <p>Done</p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div id="gray-indication"></div>
                            <p>Pending</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
                <h1>No Orders</h1>
              </div>
            )
            // <div style={{ textAlign: "center" }}>
            //   <label>
            //     No orders yet for:
            //     <p style={{ color: "brown" }}>{oneCar.details}</p>{" "}
            //   </label>
            // </div>
          }
        </div>
      </div>
    </div>
  );
};
export default MyOrders;
