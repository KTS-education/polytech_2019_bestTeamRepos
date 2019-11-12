import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsHeaderReducer } from "./friendsHeader";
import { friendsContainerReducer } from "./friendsContainer";

export const rootReducer = combineReducers({
  profile: profileReducer,
  headerFriendsList: friendsHeaderReducer,
  friendsList: friendsContainerReducer
});
