import { combineReducers } from "redux";

import doppelgangerReducer from './doppelganger'
import humanReducer from "./human";

const rootReducer = combineReducers({
  human: humanReducer,
  doppelganger: doppelgangerReducer
});

export default rootReducer;
