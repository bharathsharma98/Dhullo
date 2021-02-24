export const addItemsToCart = (CartItems, CartItemToAdd) => {
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

export const removeFromCart = (CartItems, RemoveItem) => {
const filteredItems= CartItems.filter(item=>(item.id!==RemoveItem.id ))
  return  filteredItems
};
