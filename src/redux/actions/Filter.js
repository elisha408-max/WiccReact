import { FILTER_ITEMS } from "../constants";

export const filterItems = (Price, Price1, Category) => {
  return {
    type: FILTER_ITEMS,
    payload: {
      Price,
      Price1,
      Category,
    },
  };
};
