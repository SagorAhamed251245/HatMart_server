const cookie = require("cookie");
const verifyToken = require("./verifyJWT");

function verifyAdmin(req) {
  const cookies = cookie.parse(req.headers.cookie || "");
  if (!cookies.jwtToken) {
    console.log("JWT token cookie not found.");
    return false;
  }

  const verify = verifyToken(cookies.jwtToken);
  console.log("🚀 ~ file: verifyAdmin.js:12 ~ verifyAdmin ~ verify:", verify);

  if (verify && verify.role === "admin") {
    return true;
  }
}

module.exports = verifyAdmin;
