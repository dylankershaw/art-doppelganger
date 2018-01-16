import { combineReducers } from "redux";

import humanReducer from "./human";
import dogReducer from "./dog";

const rootReducer = combineReducers({
  dog: dogReducer,
  human: humanReducer
});

export default rootReducer;
