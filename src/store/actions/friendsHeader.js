import { default as connectVK } from "@vkontakte/vk-connect";

const HEADER_FRIENDS_SUCCESS = "HEADER_FRIENDS_SUCCESS";
const HEADER_FRIENDS_BEGIN = "HEADER_FRIENDS_BEGIN";
const HEADER_FRIENDS_FAILURE = "HEADER_FRIENDS_FAILURE";

export function fetchHeaderFriends() {
  return async dispatch => {
    dispatch({
      type: HEADER_FRIENDS_BEGIN
    });
    try {
      let token = await connectVK.sendPromise("VKWebAppGetAuthToken", {
        app_id: 7210429,
        scope: "friends,status"
      });
      let response = await connectVK.sendPromise("VKWebAppCallAPIMethod", {
        method: "friends.get",
        request_id: "friends",
        params: {
          count: 3,
          order: "random",
          fields: "photo_100",
          v: "5.103",
          access_token: token.access_token
        }
      });
      dispatch({
        type: HEADER_FRIENDS_SUCCESS,
        payload: response.response.items
      });
    } catch (error) {
      dispatch({
        type: HEADER_FRIENDS_FAILURE,
        error: new Error(error)
      });
    }
  };
}
