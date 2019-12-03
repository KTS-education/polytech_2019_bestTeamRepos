import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsHeaderReducer } from "./friendsHeader";
import { friendsContainerReducer } from "./friendsContainer";
import { accountInfoHeaderReducer } from "./accountInfoHeader";
import { searchContainerReducer } from "./getSearchResults";

export const rootReducer = combineReducers({
  profile: profileReducer,
  headerFriendsList: friendsHeaderReducer,
  accountInfoHeader: accountInfoHeaderReducer,
  friendsList: friendsContainerReducer,
  searchList: searchContainerReducer
});
