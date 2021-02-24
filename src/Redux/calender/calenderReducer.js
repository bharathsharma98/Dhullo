 
// import { addEvents } from "./calenderConditions.js";
// import {isLogged } from '../UserRedux/UserActions'
const INITIAL_STATE = {
  events: []
  
};

const calenderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PUSHEVENT":
      return {
        ...state,
       events: action.payload[0]
      };
    case 'LOGGED_OUT':
      return {
        ...state,
        events:[]
      }
    case 'GETPREVEVENT':
      return {
        ...state,
        events:action.payload
      }
    default:
      return state;
  }
};
export default calenderReducer;
