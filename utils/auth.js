import { sign, verify } from "jsonwebtoken";

// Generate a token
export const generateToken = (payload) => {
  const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};

// Verify the token and return decoded value
export const decodeToken = (token) =>
  verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // err
    if (err) {
      return null;
    }
    // decoded undefined
    return decoded;
  });
