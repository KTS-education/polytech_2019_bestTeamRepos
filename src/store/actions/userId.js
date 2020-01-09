import { api } from "@src/api.js";
import { default as connectVK } from "@vkontakte/vk-connect";

const USER_ID_BEGIN = "USER_ID_BEGIN";
const USER_ID_SUCCESS = "USER_ID_SUCCESS";
const USER_ID_FAILURE = "USER_ID_FAILURE";

export function apiAuth() {
  return async dispatch => {
    dispatch({
      type: USER_ID_BEGIN
    });
    try {
      let data = await connectVK.sendPromise("VKWebAppGetUserInfo", {
        params: {
          v: "5.103"
        }
      });
      let result = await api(
        `/api/user/auth${window.location.search}`,
        "POST",
        data
      );
      dispatch({
        type: USER_ID_SUCCESS,
        payload: {
          api_id: result.response.user_id,
          vk_id: data.id,
          api_token: result.response.token
        }
      });
    } catch (error) {
      dispatch({
        type: USER_ID_FAILURE,
        error: new Error(error)
      });
    }
  };
}
