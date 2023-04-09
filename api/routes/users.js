import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/user", getUsers);

router.post("/user", addUser);

router.put("/user/:id", updateUser);

router.delete("/user/:id", deleteUser);

export default router;
