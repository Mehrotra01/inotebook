const jwt = require("jsonwebtoken");

const SECRET = "gumgumnopistol";

const fetchUser = (req, res, next) => {
  try {
    // get thr user form the jwt token and add id to req objext
    const token = req.header("auth-header");
    if (!token) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
    const data = jwt.verify(token, SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).send("Please authenticate using a valid token");
  }
};

module.exports = fetchUser;
