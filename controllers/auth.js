import { generateToken } from "../utils/auth";
import sendJsonResponse from "../utils/sendJsonResponse";

const signIn = (req, res, next) => {
  const { username, password } = req.body;
  // Find if user exist with that username
  // Verify if the password is correct
  // Get user with that username and password
  const user = { id: 2 };
  // Generate token
  const accessToken = generateToken({ id: user.id });

  sendJsonResponse(res, 200, { user, accessToken });
};

const signUp = (req, res, next) => {
  const { username, password, fullName, age, email } = req.body;
  // Find if user exist with that username if already exits send user already exist message
  // Create new user
  const user = { id: 2 };

  // This will login user when sign up
  // Generate token
  const accessToken = generateToken({ id: user.id });

  sendJsonResponse(res, 200, { user, accessToken });
};
