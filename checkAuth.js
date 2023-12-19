const checkAuth = (req, res, next) => {
  if (req.path == "/admin") {
    next();
  } else {
    res.send("Access Denied");
  }
};

module.exports = checkAuth;
