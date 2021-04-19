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
  

    const user = useSelector((state) => state.user.customer);
  const packages = ['WASHING','DETAILING','SANITIZATION']
  const [ myCar,setCar] = useState(user.cars[0]?.details)
  const [myOrder,setMyOrder] = useState('WASHING')

  const filteredCars = user.cars.filter(
    (car) => car.details === myCar 
  );
  console.log(filteredCars)

  const filteredServices = filteredCars[0]?.orders?.filter(
    (oneCar) => oneCar.service === 'WASHING'
  );
  const [rightData, setRightData] = useState({
    service: "",
    package: "",
    filteredOrders:[]
  });
  const DoubleClickHandler = (day,event) => {
 
    const filteredOrders = superdailyStatus.filter(
      (dailyjob) =>
        moment(dailyjob.start).format("YYYY-MM-DD") ===
        moment(day).format("YYYY-MM-DD")
    );
    
    console.log(filteredOrders)
    setRightData({
 
      service: event.service,
      serviceStatus: event.serviceStatus,
      package: event.serviceType,
      filteredOrders :filteredOrders,
    });
     
  }
  const superdailyStatus = [];
  if(filteredCars !== undefined){
      filteredCars.map((car) =>
        car.orders?.map((order) =>
          order.dailySchedules?.map((l) => superdailyStatus.push(l))
        )
      );
      console.log(superdailyStatus);
  console.log(filteredServices)}
  
 
  return (
    <div>
      {user.cars.length === 0 ? (
        <h1 style={{ height: "100vh" }}>No Cars Yet</h1>
      ) : (
        <div className="myOrderMainContainer">
          <div className="myOrders-picker-container">
            <div className="myOrders-cars-picker">
              {user.cars?.map((oneCar) => (
                <div
                  onClick={() => setCar(oneCar.details)}
                  id="carPicker"
                  key={oneCar.id}
                  style={
                    oneCar.details === myCar
                      ? {
                          backgroundColor: "#03588C",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                      : {
                          background: "none",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }
                  }
                >
                  <p>{oneCar.details}</p>
                </div>
              ))}
            </div>
            {/* <div className="myOrders-service-picker">
          {myCar.orders?.map((mypackage) => (
            <div
              style={
                mypackage === myOrder
                  ? { backgroundColor: "#91c3d9", color: "white" }
                  : { background: "none" }
              }
              id="packagePicker"
              key={mypackage}
              onClick={() => setMyOrder(mypackage)}
            >
              {mypackage}
            </div>
          ))}
        </div> */}
          </div>
          <div className="carCard">
            <div key={myCar.id} className="oneOrderBox">
              <div className="ActiveOrdersContainer">
                <div className="leftOrder">
                  <AlternateSub
                    superdailyStatus={superdailyStatus}
                    doubleClickHandler={DoubleClickHandler}
                  />
                </div>
                <div className="rightOrder">
                  <div style={{ display: "flex" }}>
                    <p id="myOrdersTopic">Car Name</p>
                    <p>:</p>
                    <p>{myCar}</p>
                  </div>
                  {rightData.filteredOrders.length === 0 ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h2>NO ORDERS THIS DAY</h2>
                    </div>
                  ) : (
                    <div>
                      {rightData.filteredOrders.map((oneOrder) => (
                        <div>
                          <div style={{ display: "flex" }}>
                            <p id="myOrdersTopic">Service</p>
                            <p>:</p>
                            <p>{oneOrder?.service}</p>
                          </div>
                          {oneOrder?.service === "WASHING" &&
                          oneOrder?.service !== "DETAILING" ? <div style={{ display: "flex" }}>
                              <p id="myOrdersTopic">Package</p>
                              <p>:</p>
                              <p>
                                {oneOrder?.serviceType === "One Time"
                                  ? "ONE TIME"
                                  : filteredServices[0]?.package}
                              </p>  </div>: null
                            
                           
                          }
                          <div>
                            {oneOrder.service === "DETAILING" ? (
                              <div style={{ display: "flex" }}>
                                <p id="myOrdersTopic">Package</p>
                                <p>:</p>
                                <p>{oneOrder.serviceSurface}</p> 
                              </div>
                            ) : null}
                          </div>

                          <div style={{ display: "flex" }}>
                            <p id="myOrdersTopic">Date</p>
                            <p>:</p>
                            <p>
                              {moment(oneOrder?.start).toString().substr(0, 11)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* {rightData.package === "ONE TIME" ? null : (
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
                        )} */}
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default MyOrders;
