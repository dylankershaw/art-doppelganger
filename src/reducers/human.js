import { SET_HUMAN } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case SET_HUMAN:
      return "";
    default:
      return state;
  }
}
