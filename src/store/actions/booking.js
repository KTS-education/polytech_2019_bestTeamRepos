import { api } from "@src/api.js";

export function bookProduct(productId, userId) {
  return async () => {
    try {
      const { response } = await api(`/api/user/friends`, "POST", {
        ids: [userId]
      });
      console.log(response, userId);
      const result = await api("/api/wishlist/book", "POST", {
        id: productId,
        user_id: response.friends[0]._id
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
}

export function unbookProduct(productId, userId) {
  return async () => {
    try {
      const { response } = await api(`/api/user/friends`, "POST", {
        ids: [userId]
      });
      const result = await api("/api/wishlist/unbook", "POST", {
        id: productId,
        user_id: response.friends[0]._id
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
}
