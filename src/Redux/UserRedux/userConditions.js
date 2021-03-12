 

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
export const updateOrderFunc = (prevOrders, newEvents) => {
  console.log(prevOrders)
  console.log(newEvents)
  for (let i = 0; i < prevOrders.length; i++){
    for (let j = 0; j <newEvents.length; j++) {
      if (prevOrders[i].carId === newEvents[j].carId) {
         prevOrders[i].NewSchedules = newEvents[j]
       }
    }
  }
    
 
};

 
// export const removeaddressfunc = (prevaddress, addresstoberemoved) => {
//   const items = prevaddress.filter((item) => item.id !== addresstoberemoved);

//   return items;
// };
