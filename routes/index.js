import express from "express";

const router = express.Router();

// Import other Routes
import authRouter from "./auth";
import authenticate from "../middleware/verifyToken";
import validationRouter from "./validation.route";

router.use("/auth", [authenticate], authRouter);
router.use("/verify", validationRouter);

router.get("/", (req, res) => {
  res.status(200).send("API Routes");
});

export default router;
