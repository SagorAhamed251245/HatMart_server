const cookie = require("cookie"); // Replace with your actual cookie library
const verifyToken = require("./verifyJWT");

// This function verifies a JWT token obtained from cookies and returns the decoded payload if valid.
function verifyUser(req) {
  const cookies = cookie.parse(req.headers.cookie || ""); // Parse cookies from the request headers

  const verify = verifyToken(cookies);
  if (verify.role === "user") {
    return true;
  }
}

module.exports = verifyUser;
