const jwt = require("jsonwebtoken");

// This function verifies a JWT token and returns the decoded payload if valid.
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    return decoded; // Token is valid, return the decoded payload
  } catch (err) {
    // Token verification failed (e.g., expired, tampered)
    return null;
  }
}

module.exports = verifyToken;
