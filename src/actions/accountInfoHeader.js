import { default as connectVK } from "@vkontakte/vk-connect";
const ACCOUNT_INFO_BEGIN = "ACCOUNT_INFO_BEGIN";
const ACCOUNT_INFO_SUCCESS = "ACCOUNT_INFO_SUCCESS";
const ACCOUNT_INFO_FAILURE = "ACCOUNT_INFO_FAILURE";

export function fetchAccountInfo() {
  return async dispatch => {
    dispatch({
      type: ACCOUNT_INFO_BEGIN
    });
    try {
      let response = await connectVK.sendPromise("VKWebAppGetUserInfo", {
        params: {
          fields: "photo_100",
          v: "5.103"
        }
      });
      dispatch({
        type: ACCOUNT_INFO_SUCCESS,
        payload: response
      });
    } catch (error) {
      dispatch({
        type: ACCOUNT_INFO_FAILURE,
        error: new Error(error)
      });
    }
  };
}
