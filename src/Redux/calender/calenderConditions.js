 

 
export const addEvents = (CartItems, CartItemToAdd) => {
  const existingCartItem = CartItems.find(
    (CartItem) =>
      ( 
        CartItem.mycar === CartItemToAdd.mycar) &&
      ( 
        CartItem.category === CartItemToAdd.category)
  );

  if (existingCartItem) {
    alert("already added to cart")
    return(CartItems)
  }

  return [...CartItems, CartItemToAdd];
};

   
    
 
 