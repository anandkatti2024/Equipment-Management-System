import * as service from "../services/maintenanceService.js";

export const create = async (req, res) => {
  const data = await service.addMaintenance(req.body);
  res.status(201).json(data);
};

export const getByEquipment = async (req, res) => {
  const data = await service.getMaintenanceByEquipment(req.params.id);
  res.json(data);
};
