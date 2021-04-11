import {
  addcarfunc,
  removecarfunc,
  addSchedulesFunc,
  editcarfunc,
  updateWithOrder
} from "./userConditions.js";

const INITIAL_STATE = {
  UserSignedIn: false,
  customer: [],
  cars: [],
  orders: [],
  schedules: [],
  temp: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        UserSignedIn: true,
        customer: action.payload,
      };
    case "LOGGED_OUT":
      return {
        ...state,
        UserSignedIn: false,
        customer: [],
        cars: [],
        orders: [],
        schedules: [],
        temp: "",
      };
    case "EDIT_USER":
      return {
        ...state,
        customer: [],
        customer:action.payload
      };
    case "ADD_CAR":
      return {
        ...state,

        cars: addcarfunc(state.customer, action.payload),
      };

    case "EDIT_CAR":
      return {
        ...state,

        cars: editcarfunc(state.customer, action.payload),
      };

    case "RETAIN":
      return {
        ...state,
      };
    case "REMOVE_CAR":
      return {
        ...state,

        cars: removecarfunc(state.customer, action.payload),
      };
    case "UPDATE_CAR":
      return {
        ...state,
        temp: action.payload,
      };
    case "ADD_ORDER":
      return {
        ...state,
        cars: updateWithOrder(state.customer,action.payload),
      };
    case "ADD_SCHEDULE":
      return {
        ...state,
        schedules: addSchedulesFunc(state.orders, action.payload),
      };
    default:
      return state;
  }
};
export default userReducer;
