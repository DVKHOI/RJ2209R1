import axios from "axios";
// import { useDispatch } from "react-redux";
import { ADD_TO_CART_SUCCESS, FETCH_PRODUCT_SUCCESS } from "./ActionContant";

export const getAllProduct = () => {
  // const dispatch = useDispatch();
  return async (dispatch) => {
    const response = await axios.get("http://localhost:3000/products");
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: response.data,
    });
  };
};
export const addToCart = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload,
    });
  };
};
