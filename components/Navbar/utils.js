const getUserInitials = (posts, username) => {
  const fullname = posts.find((post) => post.username === username)?.fullname;
  return fullname
    .match(/(\b\S)?/g)
    .join("")
    .match(/(^\S|\S$)?/g)
    .join("")
    .toUpperCase();
};

export { getUserInitials };
