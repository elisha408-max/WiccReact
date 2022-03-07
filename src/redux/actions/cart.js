import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/index";

export const addToCart = (item, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      item,
      quantity
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
