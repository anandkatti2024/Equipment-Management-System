import express from "express";
import * as controller from "../controllers/maintenanceController.js";

const router = express.Router();

router.post("/", controller.create);
router.get("/equipment/:id", controller.getByEquipment);

export default router;
