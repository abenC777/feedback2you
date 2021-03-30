import { FETCH_SURVEYS } from "../actions/types";

const surveysReducer = (state = [], actions) => {
  switch (actions.type) {
    case FETCH_SURVEYS:
      return actions.payload;
    default:
      return state;
  }
};

export default surveysReducer;
