import React, { useState } from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {}
});
export const CartContextProvider = props => {
  const [itemState, setItemState] = useState([]);
  const [totalCount, settotalcount] = useState(0);
  const addItemHandler = newItem => {
    console.log('new', newItem)
    const found = itemState.find(element => element.id === newItem.id);
    if (found) {
      const prevState = [...itemState];
      console.log('found',found)
      found.count = found.count + 1;
      found.size.push(newItem.size[0])
      setItemState(prevState);
    } else {
      setItemState(item => [
        ...item,
        { ...newItem, count: newItem.count + 1}
      ]);
    }
    settotalcount(totalCount + 1);
  };
  const totalAmount = itemState.reduce((curr, item) => {
    return (curr = curr + item.price * item.count);
  }, 0);
  const removeItemHandler = () => {
    console.log("remove");
  };
  const contextValue = {
    items: itemState,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    totalCount: totalCount
  };
  console.log(itemState);
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
