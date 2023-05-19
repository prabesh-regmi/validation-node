import express from "express";

const authRouter = express.Router();

authRouter.get("/", signup);

export default authRouter;
