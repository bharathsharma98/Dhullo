import React, { Component } from 'react';
import Axios from "../../../../src/axios-orders"
import Servicepage from '../../UI/content/servicepage'
class services extends Component {

  // state = {
  //     washing: 0,
  //     detailing : 0,
  //     totalPrice : 0,
  //     date: Date('13-06-2020')
  // }

  // clickWashHandler = () =>{
  //   this.setState((prevstate,props)=>{
  //     return{
  //     washing:prevstate.washing + 1,
  //     totalPrice: prevstate.totalPrice + 399
  //     }
  //   })
  // }
  // clickDetailHandler = () =>{
  //   this.setState((prevstate,props)=>{
  //     return{
  //     detailing: prevstate.detailing + 1,
  //     totalPrice: prevstate.totalPrice + 1299
  //   }
  //   })
  // }
  // clickOrderHandler = ()=>{
  //   const order ={
  //     washing: this.state.washing,
  //     detailing: this.state.detailing,
  //     totalPrice: this.state.totalPrice,
  //     customer: {
  //       name: 'Harnesh',
  //       email: 'shet.har@test.com',
  //       address:{
  //         Bldg: 'Prestige',
  //         Street:'Sarjapur',
  //         City: 'Bangalore',
  //         Code :'432343'
  //       },
  //       carDetails:{
  //         carType :'SUV',
  //         carMake: 'Honda',
  //         carModel: 'CR-V',
  //         carNumber: 'KA 20 1256'
  //       }

  //     },
  //     scheduleDate: Date
  //   }
  //   Axios.post('/orders.json', order)
  //   .then(response => console.log(response))
  //   .catch(error =>console.log(error))
  // }

  render() {
    return (
      <div className="w4">
        <Servicepage/>
      </div>
    //   <div>
    //     {/* <h1>Service Page</h1>
    //     <button onClick ={this.clickWashHandler}>Add washing to cart</button>
    //     <button onClick ={this.clickDetailHandler}>Add Detailing to cart</button>
    //     <button onClick ={this.clickOrderHandler}>Order</button> */}
    // </div>
    );
  }
}

export default services;