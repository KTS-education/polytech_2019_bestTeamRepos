const ACCOUNT_INFO_LOADED = "ACCOUNT_INFO_LOADED";

export const accountInfoLoaded = payload => {
  return {
    type: ACCOUNT_INFO_LOADED,
    payload
  };
};
