const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  // Check for token
  if (!token)
    return res.status(401).json({ msg: "No token, authorizaton denied" });
  try {
    // Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    // Add Admin from payload
    req.admin = decoded;
    req.partner = decoded;
    req.member = decoded;
    req.consultancy = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
