import { SET_DOG } from "../actions";

export default function(state = "", action) {
  switch (action.type) {
    case SET_DOG:
      return "";
    default:
      return state;
  }
}
