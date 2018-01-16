import { SET_DOPPELGANGER } from "../actions";

export default function(state = { url: "" }, action) {
  switch (action.type) {
    case SET_DOPPELGANGER:
      return {};
    default:
      return state;
  }
}
