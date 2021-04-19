const INITIAL_STATE = {
  errorMessage:null
};
const setErrorMessage = (message) => {
    if (typeof message === "object") return "No Internet Connection.";
    else if (message.includes("Invalid credentials"))
      return "INVALID CREDENTIALS";
   else if (message.includes("User already exists..Login instead."))
     return "Customer exists already, please login instead";
 
  
}
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
       errorMessage:setErrorMessage(action.payload)
      };
    case "RESET_ERROR":
      return {
        errorMessage:null
      };

    default:
      return state;
  }
};
export default errorReducer;
