export const isLogged = (customer) => {
  return {
    type: "LOGGED_IN",
    payload: customer,
  };
};
export const isLoggedout = (customer) => {
  return {
    type: "LOGGED_OUT",
  };
};
export const editUser = (customer) => {
  return {
    type: "EDIT_USER",
    payload:customer
  };
};
export const addCar = (carArray) => {
  return {
    type: "ADD_CAR",
    payload: carArray,
  };
};
export const editCar = (carObject) => {
  return {
    type: "EDIT_CAR",
    payload: carObject,
  };
};
export const removeCar = (carobj) => {
  return {
    type: "REMOVE_CAR",
    payload: carobj,
  };
};
export const addOrder = (orderobj) => {
  return {
    type: "ADD_ORDER",
    payload: orderobj,
  };
 
};
 export const addSchedules = (eventobj) => {
   return {
     type: "ADD_SCHEDULE",
     payload: eventobj,
   };
 };
export const updateCar = (tempobj) => {
  return {
    type: "UPDATE_CAR",
    payload: tempobj,
  };
};

export const RetainUser = (carArray) => {
  return {
    type: "RETAIN",
  };
};
