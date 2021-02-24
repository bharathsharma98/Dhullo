import { addcarfunc, removecarfunc,  } from "./userConditions.js";

const INITIAL_STATE = {
  UserSignedIn: false,
  customer: [],
  cars: [],
  orders:[],
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
        orders:[],
        temp: "",
      };
    case "ADD_CAR":
      return {
        ...state,
        
        cars: addcarfunc(state.cars, action.payload),
         
      };

    case "RETAIN":
      return {
        ...state,
      };
    case "REMOVE_CAR":
      return {
        ...state,
        UserSignedIn: true,
        cars: removecarfunc(state.cars, action.payload),
      };
    case "UPDATE_CAR":
      return {
        ...state,
        temp: action.payload,
      };
      case "ADD_ORDER":
        return {
          ...state,
          orders: [...state.orders, action.payload],
          
          
        };
    default:
      return state;
  }
};
export default userReducer;
