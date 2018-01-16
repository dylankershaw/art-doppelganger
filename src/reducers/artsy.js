import { SET_ARTSY_TOKEN } from "../actions";

export default function(state = { token: "" }, action) {
  switch (action.type) {
    case SET_ARTSY_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
