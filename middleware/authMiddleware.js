// authMiddleware.js
import mongoose from "mongoose"; 
import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
// import { verifyJWT } from "../utils/tokenUtils.js";
export const authenticateUser = (req, res, next) => {
  req.user = { 
    userId: "507f1f77bcf86cd799439011", // Replace with an actual user ID from your database
    role: "user", // Assign a mock role, adjust as needed
    testUser: true // Set this to true or false as needed for testing
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
