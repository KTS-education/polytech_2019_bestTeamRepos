const FRIENDS_LOADED = "FRIENDS_LOADED";

export const friendsLoaded = friendList => {
  return {
    type: FRIENDS_LOADED,
    payload: friendList
  };
};
