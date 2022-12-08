import { DECREASE, INCREASE } from "./ActionContstant";
import { combineReducers } from "redux";

const initstate = {
  count: 0,
};

const reducers = (state = initstate, actions) => {
  switch (actions.type) {
    case INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  initChange: reducers,
});
export default rootReducer;
