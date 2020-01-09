export default {
  mainPage: "/",
  friendListPage: "/friends",
  profile: {
    path: "/profile/:id",
    create: id => `/profile/${id}`,
    createFromMePath: `/profile/:id/from-me`,
    createFromMe: id => `/profile/${id}/from-me`
  }
};
