// authMiddleware.js
import mongoose from "mongoose"; 
import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
// import { verifyJWT } from "../utils/tokenUtils.js"; 

export const authenticateUser = (req, res, next) => {
  // Temporary bypass for token verification
  // Use a valid mock ObjectId and a sample role for testing purposes
  req.user = { 
    userId: mongoose.Types.ObjectId().toString(), // Generate a valid mock ObjectId
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
