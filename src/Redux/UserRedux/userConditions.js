import { editCar } from "./UserActions";

 

export const addcarfunc = (customer, newcar) => {
  customer.cars.push(newcar)
};
// export const addaddressfunc = (prevaddress, newaddress) => {
//   return [...prevaddress, newaddress];
// };
export const removecarfunc = (customer, cartoberemoved) => {
 
 const items = customer.cars.filter((item) => item.id !== cartoberemoved);
  customer.cars = []
  items.map((item) => customer.cars.push(item));
 
};
export const addSchedulesFunc = (prevSchedules, newId) => {
  if (prevSchedules === undefined && newId === null && prevSchedules.length === null) {
    return [prevSchedules,newId]
  }
  else {
    for (let i = 0;i < prevSchedules.length; i++) {
      if (prevSchedules[i].id !== newId.id)
     return [...prevSchedules, newId];
      else  return prevSchedules;
    }
  }
  
  
 
};
export const updateWithOrder = (prevCustomer, newOrder) => {
 
  for (let i = 0; i < prevCustomer.cars.length; i++) {
    
      if (prevCustomer.cars[i].id === newOrder.carId) {
        prevCustomer.cars[i].orders.push(newOrder);
      }

  }

  
  
};
export const editcarfunc = (prevCustomer, editedCar) => {
const updatedCars = prevCustomer.cars.map((onecar) =>
  onecar.id === editedCar.id ? editedCar : onecar
);
  prevCustomer.cars = [];
  updatedCars.map(car=>prevCustomer.cars.push(car))
}
 
// export const removeaddressfunc = (prevaddress, addresstoberemoved) => {
//   const items = prevaddress.filter((item) => item.id !== addresstoberemoved);

//   return items;
// };
