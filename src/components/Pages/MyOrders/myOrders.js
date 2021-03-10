import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSchedules } from "../../../Redux/UserRedux/UserActions";
import AlternateSub from "../../UI/content/ActiveSubscriptionComponent/alternateSub";
import "./myOrders.css";
const MyOrders = () => {
  const cars = useSelector((state) => state.user.cars);
  const orders = useSelector((state) => state.user.orders);
  const schedules = useSelector((state) => state.user.schedules);
  const activeOrders = [];
  const dispatch = useDispatch();
  useEffect(() => {
    let i = 0,
      j = 0,
      k = 0;
    let tempArray = [];
    while (i < orders.length) {
      tempArray = [];
      for (j = 0; j < orders[i].dailySchedules.length; j++) {
        fetch(
          `http://localhost:5000/api/scheduledJobs/${orders[i].dailySchedules[j]}`
        )
          .then((response) => response.json())
          .then((result) => {
            tempArray.push(result);
          });
      }
      orders[i].newSchedules = tempArray;

      console.log(orders[i]);
   
      dispatch(addSchedules(orders[i]));
         i++;
    }
  }, []);

  let pastmerge: [];
  return (
    <div className="myOrderMainContainer">
      <div className="ActiveOrdersContainer">
        <h1>Active Orders</h1>
        {schedules.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>No Orders yet</h1>
        ) : (
          schedules.map((oneorder) => (
            <div className="oneOrderBox" key={oneorder.id}>
              <section className="subbar">
                <AlternateSub
                  package={oneorder.package}
                  duration={oneorder.duration}
                  startDate={oneorder.startDate}
                  events={oneorder.newSchedules}
                />
              </section>
              <div className="  rightOrder">
                <div>
                  <p className="h4">{oneorder.packageDuration}</p>
                </div>
                <div>
                  <p className="h4">{oneorder.service}</p>
                </div>
                <div>
                  <p className="h4">{oneorder.package}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="PastOrderContainer">
        <h1>Past Orders</h1>
        {0 === 0 ? (
          <h1 style={{ textAlign: "center" }}>No orders yet</h1>
        ) : (
          pastmerge.map((merge) => {
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
          })
        )}
      </div>
    </div>
  );
};
export default MyOrders;
