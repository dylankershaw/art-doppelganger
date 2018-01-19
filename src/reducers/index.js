import { combineReducers } from "redux";

import doppelgangerReducer from './doppelganger'
import humanReducer from "./human";
import artsyReducer from "./artsy";

const rootReducer = combineReducers({
  human: humanReducer,
  artsy: artsyReducer,
  doppelganger: doppelgangerReducer
});

export default rootReducer;
