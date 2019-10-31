export default {
  MainPage: "/",
  FriendListPage: "/friends",
  MyPage: "/mypage",
  FriendPage: {
    path: "/myfriendspage/:id",
    create: id => `/myfriendspage/${id}`
  },
  MyPageIwant: "/mypage/what-i-want",
  FriendPageFromMe: {
    path: `/myfriendspage/from-me/:id`,
    create: id => `/myfriendspage/from-me/${id}`
  }
};
