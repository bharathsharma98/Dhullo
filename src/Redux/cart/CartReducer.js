import { addItemsToCart } from "./cartConditions";
import { removeFromCart } from "./cartConditions";

const INITIAL_STATE = {
  CartToggle: false,
  CartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CART_TOGGLE":
      return {
        CartToggle: !state.CartToggle,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        CartItems: addItemsToCart(state.CartItems, action.payload),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        CartItems: removeFromCart(state.CartItems, action.payload),
      };
    case "LOGGED_OUT":
      return {
        ...state,
        CartItems: [],
      };

    default:
      return state;
  }
};
export default CartReducer;
