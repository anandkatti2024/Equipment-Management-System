import * as service from "../services/equipmentService.js";

export const getAll = async (req, res) => {
  const data = await service.getAllEquipment();
  res.json(data);
};

export const create = async (req, res) => {
  const data = await service.createEquipment(req.body);
  res.status(201).json(data);
};

export const update = async (req, res) => {
  try {
    const data = await service.updateEquipment(req.params.id, req.body);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const remove = async (req, res) => {
  await service.deleteEquipment(req.params.id);
  res.json({ message: "Deleted successfully" });
};
