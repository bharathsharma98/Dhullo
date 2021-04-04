import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //sessionstorage can be used here


import userReducer from "./UserRedux/UserReducer";
 import errorReducer from "./Error/errorReducer";
import CartReducer from './cart/CartReducer';
import calenderReducer from './calender/calenderReducer';
import LoginReducer from './LoginToggle/LoginReducer'
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user", "calender", "error",], //remove from whitelist to remove persist
};

const RootReducer = combineReducers({
  user: userReducer,
  error:errorReducer,
  cart: CartReducer,
  calender: calenderReducer,
  loginToggle:LoginReducer
   
});

export default persistReducer(persistConfig, RootReducer);
