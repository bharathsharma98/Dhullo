import React from 'react'
import './totalprice.css'
export const TotalPrice = (props) => {
    return (
      <div className="totalPriceContainer">
        <table>
          <thead>
            <tr className="headerTable">
              <th>
                <h2>Total Price</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="SubtotalTable">
              <td id="td1">
                <h3> Sub Total </h3>
              </td>
              <td id="td2">
                <h3> : </h3>
              </td>
              <td id="td3">
                {" "}
                <h3>Rs {props.total}</h3>
              </td>
            </tr>
            <tr className="gstTbale">
              <td id="td1">
                <h3>GST (18%)</h3>
              </td>
              <td id="td2">
                <h3> : </h3>
              </td>
              <td id="td3">
                {" "}
                <h3>Rs {props.GST}</h3>
              </td>
            </tr>
            <hr></hr>
            <tr className="totalTable">
              <td id="td1">
                <h3>Total</h3>
              </td>
              <td id="td2">
                <h3> : </h3>
              </td>
              <td id="td3">
                <h3>Rs {props.total}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}