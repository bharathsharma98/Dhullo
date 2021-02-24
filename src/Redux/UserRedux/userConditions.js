export const addcarfunc = (prevcars, newcar) => {
  return [...prevcars, newcar];
};
// export const addaddressfunc = (prevaddress, newaddress) => {
//   return [...prevaddress, newaddress];
// };
export const removecarfunc = (prevcars, cartoberemoved) => {
  const items = prevcars.filter((item) => item.id !== cartoberemoved);

  return items;
};

 
// export const removeaddressfunc = (prevaddress, addresstoberemoved) => {
//   const items = prevaddress.filter((item) => item.id !== addresstoberemoved);

//   return items;
// };
