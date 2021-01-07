import { combineReducers } from "redux";

import tokenReducer from './tokenReducer'
import userReducer from './userReducer'


const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer
});

export default rootReducer;