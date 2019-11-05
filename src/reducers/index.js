import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsReducer } from "./friends";

export const rootReducer = combineReducers({
  profile: profileReducer,
  friends: friendsReducer
});
