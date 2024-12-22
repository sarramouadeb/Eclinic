const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // Check if the token exists and has the correct format (Bearer token)
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized, no token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded.userInfo; // Attach the decoded user information to the request object

    next(); // Call the next middleware
  } catch (err) {
    return res.status(403).json({ message: "Forbidden, invalid token" });
  }
};

module.exports = verifyJWT;
