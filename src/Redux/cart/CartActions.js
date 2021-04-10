export const CartToggle = () => {
  return {
    type: "CART_TOGGLE",
  };
};

export const AddToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
export const RemoveFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };


};
export const UpdateFromCart = (item) => {
  return {
    type: "UPDATE_FROM_CART",
    payload: item,
  };
}
export const emptyCart = ( ) => {
  return {
    type: "EMPTY_CART",
     
  };


};