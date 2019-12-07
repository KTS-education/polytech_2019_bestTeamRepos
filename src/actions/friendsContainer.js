import { default as connectVK } from "@vkontakte/vk-connect";

const FETCH_FRIENDS_BEGIN = "FETCH_FRIENDS_BEGIN";
const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";

export const fetchFriendsBegin = () => ({
  type: FETCH_FRIENDS_BEGIN
});

export const fetchFriendsSuccess = payload => ({
  type: FETCH_FRIENDS_SUCCESS,
  payload
});

export const fetchFriendsFailure = payload => ({
  type: FETCH_FRIENDS_FAILURE,
  payload
});

export function fetchFriends(friendsCount = 5000) {
  return async dispatch => {
    dispatch(fetchFriendsBegin());
    const dataVK = await connectVK.sendPromise("VKWebAppGetAuthToken", {
      app_id: 7210429,
      scope: "friends,status"
    });
    const access_token = dataVK.access_token;
    const friendsData = await connectVK.sendPromise("VKWebAppCallAPIMethod", {
      method: "friends.get",
      request_id: "friends",
      params: {
        count: friendsCount,
        order: "name",
        fields: "photo_100",
        v: "5.103",
        access_token: access_token
      }
    });

    if (friendsData) {
      dispatch(fetchFriendsSuccess(friendsData.response.items));
    } else {
      dispatch(fetchFriendsFailure(friendsData.error));
    }
  };
}
