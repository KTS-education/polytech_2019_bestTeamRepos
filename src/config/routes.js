export default {
  mainPage: "/",
  friendListPage: "/friends",
  profile: {
    path: "/profile/:id",
    create: id => `/profile/${id}`,
    // createWhatIwantPath: `/profile/:id/what-i-want`,
    // createWhatIwant: id => `/profile/${id}/what-i-want`,
    createFromMePath: `/profile/:id/from-me`,
    createFromMe: id => `/profile/${id}/from-me`
  }
};
