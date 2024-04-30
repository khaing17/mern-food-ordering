import express from "express";
import { createUser } from "../../controllers/user.controller";
import { jwtCheck } from "../../middleware/auth";

const router = express.Router();

router.route("/").post(jwtCheck, createUser);

export default router;
