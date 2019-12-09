import { default as connectVK } from "@vkontakte/vk-connect";
const FETCH_PROFILE_BEGIN = "FETCH_PROFILE_BEGIN";
const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export function fetchProfile(id) {
  return async dispatch => {
    dispatch({
      type: FETCH_PROFILE_BEGIN,
      payload: id
    });
    try {
      let token = await connectVK.sendPromise("VKWebAppGetAuthToken", {
        app_id: 7210429,
        scope: "friends, status"
      });
      let response = await connectVK.sendPromise("VKWebAppCallAPIMethod", {
        method: "users.get",
        request_id: "users_test",
        params: {
          user_ids: id,
          fields: "photo_200",
          v: "5.103",
          access_token: token.access_token
        }
      });

      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: response.response[0]
      });
    } catch (error) {
      dispatch({
        type: FETCH_PROFILE_FAILURE,
        error: new Error(error)
      });
    }
  };
}
