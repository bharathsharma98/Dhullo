import { set } from "date-fns";
import MyOrders from "../../components/Pages/MyOrders/myOrders";

export const addcarfunc = (prevcars, newcar) => {
  return [...prevcars, newcar];
};
// export const addaddressfunc = (prevaddress, newaddress) => {
//   return [...prevaddress, newaddress];
// };
export const removecarfunc = (prevcars, cartoberemoved) => {
  const items = prevcars.filter((item) => item.id !== cartoberemoved);

  return items;
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
