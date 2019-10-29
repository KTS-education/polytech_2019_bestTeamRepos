export default {
  MainPage: "/",
  FriendListPage: "/friends",
  MyPage: "/mypage",
  FriendPage: {
    path: "/myfriendspage/:id",
    create: id => `/myfriendspage/${id}`
  },
  MyPageIwant: "/mypage/what-i-want",
  FriendPageFromMe: "/myfriendspage/from-me"
};
