import express from "express";
import employeesRoutes from "./routes/employees.js";
import userRoutes from "./routes/users.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", employeesRoutes);

app.listen(8800);