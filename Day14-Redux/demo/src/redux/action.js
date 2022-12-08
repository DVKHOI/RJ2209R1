import { DECREASE, INCREASE } from "./ActionContstant";

export const increase = (data) => {
  return {
    type: INCREASE,
    payload: data,
  };
};
export const decrease = (data) => {
  return {
    type: DECREASE,
    payload: data,
  };
};
