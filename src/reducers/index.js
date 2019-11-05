import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsReducer } from "./friends";
import { friendsContainerReducer } from "./friendsContainer";

export const rootReducer = combineReducers({
  profile: profileReducer,
  friends: friendsReducer,
  friendsList: friendsContainerReducer
});
