const HEADER_FRIENDS_LOADED = "HEADER_FRIENDS_LOADED";

export const headerFriendsLoaded = headerFriendsList => {
  return {
    type: HEADER_FRIENDS_LOADED,
    payload: headerFriendsList
  };
};
