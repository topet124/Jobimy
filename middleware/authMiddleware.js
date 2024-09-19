import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
// import { verifyJWT } from "../utils/tokenUtils.js"; 

export const authenticateUser = (req, res, next) => {
  // Bypass token verification
  req.user = { 
    userId: "mockUserId", // Assign a mock user ID
    role: "user", // Assign a mock role, adjust as needed
    testUser: true // You can set this to false or true
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
