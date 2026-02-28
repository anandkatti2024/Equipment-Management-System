import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import equipmentRoutes from "./routes/equipmentRoutes.js";
import maintenanceRoutes from "./routes/maintenanceRoutes.js";
import equipmentTypeRoutes from "./routes/equipmentTypeRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/equipment", equipmentRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/equipment-types", equipmentTypeRoutes);
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
