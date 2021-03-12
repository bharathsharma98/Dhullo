const INITIAL_STATE = {
  errorMessage:''
};
const setErrorMessage = (message) => {
 
    if (message.message.includes("Unexpected token < in JSON at position 0"))
      return  "INVALID CREDENTIALS";
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
