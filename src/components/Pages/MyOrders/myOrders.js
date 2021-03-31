import React, { useEffect } from "react";
import {   useSelector } from "react-redux";

import AlternateSub from "../../UI/content/ActiveSubscriptionComponent/alternateSub";
import "./myOrders.css";
const MyOrders = (props) => {
          useEffect(() => {
            document.body.scrollTop = 0;
            props.click();
          }, []);
  const user = useSelector((state) => state.user.customer);
  return (
    <div className="myOrderMainContainer">
      <div className="carCard">
        {user.cars.map((oneCar) => (
          <div key={oneCar.id} className="oneOrderBox">
            {oneCar.orders.length !== 0 ? (
              oneCar.orders.map((oneOrder) => (
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
                        <div>
                          <p>{oneCar.details}</p>
                        </div>
                        <div>
                          <p>{oneOrder.service}</p>
                        </div>
                        <div>
                          <p>{oneOrder.package}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div style={{ textAlign: "center" }}>
                <label>
                  No orders yet for:
                  <p style={{ color: "brown" }}>{oneCar.details}</p>{" "}
                </label>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyOrders;
