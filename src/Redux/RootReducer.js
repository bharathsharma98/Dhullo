import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //sessionstorage can be used here


import userReducer from "./UserRedux/UserReducer";
 
import CartReducer from './cart/CartReducer';
import calenderReducer from './calender/calenderReducer';
 
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart",  "user","calender", ], //remove from whitelist to remove persist
};

const RootReducer = combineReducers({
  user: userReducer,
  
  cart: CartReducer,
  calender: calenderReducer,
   
});

export default persistReducer(persistConfig, RootReducer);
