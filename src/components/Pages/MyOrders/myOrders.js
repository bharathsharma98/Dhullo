import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlternateSub from "../../UI/content/ActiveSubscriptionComponent/alternateSub";
import './myOrders.css'
const MyOrders = () => {
      const cars = useSelector((state) => state.user.cars);
     const orders = useSelector((state) => state.user.orders);
     let activemerge = [];
     let pastmerge = [];
     if (orders.length !== 0) {
       let carStart = 0;
       let orderStart = 0;
       for (carStart = 0; carStart < cars.length; carStart = carStart + 1) {
         for (
           orderStart = 0;
           orderStart < orders.length;
           orderStart = orderStart + 1
         ) {
           if (cars[carStart].id === orders[orderStart].order.carId) {
             if (orders[orderStart].order.status === "Active")
               activemerge.push({ ...cars[carStart], ...orders[orderStart] });
             else pastmerge.push({ ...cars[carStart], ...orders[orderStart] });
           }

           //dailystatus update here
         }
       }
     }
    return (
      <div className="myOrderMainContainer">
        <div className="ActiveOrdersContainer">
          <h1>Active Orders</h1>
          {activemerge.length === 0 ? (
            <h1 style={{ textAlign: "center" }}>No Orders yet</h1>
          ) : (
            activemerge.map((oneorder) => (
              <div className="oneOrderBox" key={oneorder.id}>
                <section className="subbar">
                  <AlternateSub
                    package={oneorder.order.package}
                    duration={oneorder.order.packageDuration}
                    startDate={oneorder.order.orderDate}
                    events={oneorder.order.dailyStatus}
                  />
                </section>
                <div className="  rightOrder">
                  <div>
                    <p className="h4">{oneorder.details}</p>
                  </div>
                  <div>
                    <p className="h4">{oneorder.order.service}</p>
                  </div>
                  <div>
                    <p className="h4">{oneorder.order.package}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="PastOrderContainer">
          <h1>Past Orders</h1>
          {pastmerge.length === 0 ? (
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
}
export default MyOrders;