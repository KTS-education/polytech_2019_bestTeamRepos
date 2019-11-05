import f1 from "@data/YourFriendsInfo/img/friend2.png";
import f2 from "@data/YourFriendsInfo/img/friend1.png";
import f3 from "@data/YourFriendsInfo/img/friend3.png";

const initialState = {
  friends: [f1, f2, f3]
};

export const friendsReducer = (state = initialState) => state;
