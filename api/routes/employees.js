import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/employees.js";

const router = express.Router();

router.get("/employees", getUsers);

router.post("/employees", addUser);

router.put("/employees/:id", updateUser);

router.delete("/employees/:id", deleteUser);

export default router;
