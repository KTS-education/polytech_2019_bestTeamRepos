import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsHeaderReducer } from "./friendsHeader";
import { friendsContainerReducer } from "./friendsContainer";
import { accountInfoHeaderReducer } from "./accountInfoHeader";

export const rootReducer = combineReducers({
  profile: profileReducer,
  headerFriendsList: friendsHeaderReducer,
  accountInfoHeader: accountInfoHeaderReducer,
  friendsList: friendsContainerReducer
});
