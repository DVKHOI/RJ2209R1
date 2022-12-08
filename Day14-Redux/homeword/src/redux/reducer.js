import { combineReducers } from "redux";
import { ADD_TO_CART_SUCCESS, FETCH_PRODUCT_SUCCESS } from "./ActionContant";

const initState = {
  productList: [],
  cart: [],
};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        productList: [...action.payload],
      };
    case ADD_TO_CART_SUCCESS:
      const index = state.cart.findIndex((e) => e.id === action.payload.id);
      if (index < 0) {
        let newProduct = action.payload;
        newProduct.count = 1;
        state.cart.push(newProduct);
      } else {
        state.cart[index].count += 1;
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    default: {
      return state;
    }
  }
};
const rootReducer = combineReducers({
  myReducer: reducer,
});
export default rootReducer;
