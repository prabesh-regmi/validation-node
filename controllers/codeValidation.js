const { default: generateRandomNumber } = require("../utils/randomNumber");

var VERIFICATION_CODE;
const sendValidationCode = async (req, res, next) => {
  const randomNumber = generateRandomNumber();
  VERIFICATION_CODE = randomNumber;
  res.status(200).send({ message: randomNumber });
};

const validateValidationCode = async (req, res, next) => {
  const { code } = req.body;
  try {
    if (!code) {
      return res.status(400).json({ error: "Invalid code" });
    }
    // Check if the code is 6 digits long and the last digit is not 7
    if (code.toString().length != 6) {
      return res.status(400).json({ error: "Code must be of 6 digits" });
    }
    if (code.toString().slice(-1) === "7") {
      return res.status(400).json({ error: "Code should not end with 7" });
    }
    if (code == VERIFICATION_CODE) {
      res.status(200).json({ message: "Verification successful" });
    } else {
      res.status(400).json({ error: "Invalid code" });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { sendValidationCode, validateValidationCode };
