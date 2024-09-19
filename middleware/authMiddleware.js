// authMiddleware.js

import { UnauthorizedError } from "../errors/customErrors.js";

export const authenticateUser = (req, res, next) => {
  // Bypass token verification for now
  req.user = { 
    userId: "507f1f77bcf86cd799439011", // Mock user ID, use a valid format (24-character hex string)
    role: "user", // Mock role, adjust as needed
    testUser: true // Mock flag for testing purposes
  };

  next();
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
