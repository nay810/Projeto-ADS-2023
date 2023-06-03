import express from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser
} from "../controllers/user.js";

import {validateUser}  from "../controllers/login.js";

const router = express.Router();

router.get("/cadastro", getUsers);

router.post("/cadastro", addUser);

router.put("/cadastro/:id", updateUser);

router.delete("/cadastro/:id", deleteUser);

router.post("/", validateUser);

export default router;