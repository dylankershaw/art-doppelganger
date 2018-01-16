import { combineReducers } from "redux";

import humanReducer from "./human";
import artsyReducer from "./artsy";

const rootReducer = combineReducers({
  human: humanReducer,
  artsy: artsyReducer
});

export default rootReducer;
