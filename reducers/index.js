import { combineReducers } from "redux";

import tokenReducer from './tokenReducer'
import userReducer from './userReducer'
import tournamentReducer from './tournamentReducer'



const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  tournaments: tournamentReducer
});

export default rootReducer;