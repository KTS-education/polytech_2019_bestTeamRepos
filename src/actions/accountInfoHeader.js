const ACCOUNT_INFO_LOADED = "ACCOUNT_INFO_LOADED";

export const accountInfoLoaded = ({ id, first_name, last_name, photo_100 }) => {
  return {
    type: ACCOUNT_INFO_LOADED,
    payload: {
      id,
      first_name,
      last_name,
      photo_100
    }
  };
};
