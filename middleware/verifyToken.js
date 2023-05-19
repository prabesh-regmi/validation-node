import { verify } from "jsonwebtoken";
import { decodeToken } from "../utils/auth";
import sendJsonResponse from "../utils/sendJsonResponse";
import throwError from "../services/throwError";

const authenticate = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  try {
    if (!token) {
      throwError(403, "No token provided!");
    }
    const decoded = decodeToken(token);
    req.userId = decoded.id;
    // Find user with that id
    req.user = {};
    req.isAuthenticate = () => !!req.user;
    return next();
  } catch (err) {
    next(err);
  }
};
export default authenticate;
