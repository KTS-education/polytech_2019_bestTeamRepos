const USER_ID = "USER_ID";

export const userIdLoaded = userId => {
  return {
    type: USER_ID,
    payload: userId
  };
};
