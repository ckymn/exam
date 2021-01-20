const userGet = async (req, res, next) => {
  await res.status(200).json({
    success: true,
  });
};

const userGet_search = async (req, res, next) => {
  const user = await User.find((user) => user.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: "User not found." });

  res.send("/api/user/search");
};
module.exports = {
  userGet,
  userGet_search,
};
