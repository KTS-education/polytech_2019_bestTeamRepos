const FRIENDS_LOADED = "FRIENDS_LOADED";

export const friendsLoaded = payload => {
  return {
    type: FRIENDS_LOADED,
    payload
  };
};
