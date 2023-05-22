import express from "express";
import validateUser  from "../controllers/login.js";

const router = express.Router();

router.post("/login", validateUser);

export default router;
