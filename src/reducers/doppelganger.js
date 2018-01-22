import { SET_DOPPELGANGER, CLEAR_DOPPELGANGER } from "../actions";

export default function (state = { found: true, url: "" }, action) {
  switch (action.type) {
    case SET_DOPPELGANGER:
      return action.payload
    case CLEAR_DOPPELGANGER:
      return action.payload
    default:
      return state;
  }
}
