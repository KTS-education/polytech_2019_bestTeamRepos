import { combineReducers } from "redux";
import { profileReducer } from "./profile";
import { friendsHeaderReducer } from "./friendsHeader";
import { friendsContainerReducer } from "./friendsContainer";
import { accountInfoHeaderReducer } from "./accountInfoHeader";
import { searchContainerReducer } from "./getSearchResults";
import { giftsListReducer } from "./updateGiftsList";
import { userIdReducer } from "./userId";

export const rootReducer = combineReducers({
  profile: profileReducer,
  headerFriendsList: friendsHeaderReducer,
  accountInfoHeader: accountInfoHeaderReducer,
  friendsList: friendsContainerReducer,
  searchList: searchContainerReducer,
  giftsList: giftsListReducer,
  userId: userIdReducer
});
