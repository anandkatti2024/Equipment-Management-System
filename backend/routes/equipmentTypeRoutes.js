import express from "express";
import EquipmentType from "../models/EquipmentType.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const types = await EquipmentType.find();
  res.json(types);
});

export default router;
    