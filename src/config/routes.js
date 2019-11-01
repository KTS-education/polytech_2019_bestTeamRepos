export default {
  MainPage: "/",
  FriendListPage: "/friends",
  Profile: {
    path: "/profile/:id",
    create: id => `/profile/${id}`,
    createWhatIwant: id => `/profile/${id}/what-i-want`,
    createFromMe: id => `/profile/${id}/from-me`
  }
};
