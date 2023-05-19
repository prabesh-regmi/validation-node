import {
  sendValidationCode,
  validateValidationCode,
} from "../controllers/codeValidation";

const router = require("express").Router();

router.get("/", sendValidationCode);
router.post("/", validateValidationCode);

export default router;
