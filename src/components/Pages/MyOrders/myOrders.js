import React, { useEffect } from "react";
import {   useSelector } from "react-redux";
import moment from 'moment'
import AlternateSub from "../../UI/content/ActiveSubscriptionComponent/alternateSub";
import "./myOrders.css";

  const width = { matches: window.matchMedia("(min-width: 768px)").matches };
const MyOrders = (props) => {
    useEffect(() => {
      document.body.scrollTop = 0;
      !width.matches ? props.click() : (document.body.scrollTop = 0);
    }, []);
  
   
  const user = useSelector((state) => state.user.customer);
  return (
    <div className="myOrderMainContainer">
      <div className="carCard">
        {user.cars.map((oneCar) => (
          <div key={oneCar.id} className="oneOrderBox">
            {
              oneCar.orders?.length !== 0
                ? oneCar.orders?.map((oneOrder) => (
                    <div className="orderCard" key={oneOrder.id}>
                      {oneOrder === undefined ? null : (
                        <div
                          className="ActiveOrdersContainer"
                          key={oneOrder.id}
                        >
                          <div className="leftOrder">
                            <AlternateSub
                              package={oneOrder.package}
                              duration={oneOrder.duration}
                              startDate={oneOrder.startDate}
                              events={oneOrder.dailySchedules}
                            />
                          </div>

                          <div className="rightOrder">
                            <div style={{ display: "flex" }}>
                              <p id="myOrdersTopic">Car Name</p>
                              <p>:</p>
                              <p>{oneCar.details}</p>
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
                            {/* <div style={{ display: "flex" }}>
                              <p id="myOrdersTopic">Order Date</p>
                              <p>:</p>
                              <p>
                                {new Date(oneOrder.orderDate).toDateString()}
                              </p>
                            </div> */}
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
                : null
              // <div style={{ textAlign: "center" }}>
              //   <label>
              //     No orders yet for:
              //     <p style={{ color: "brown" }}>{oneCar.details}</p>{" "}
              //   </label>
              // </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyOrders;
