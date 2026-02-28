import Equipment from "../models/Equipment.js";
import MaintenanceLog from "../models/MaintenanceLog.js";

export const addMaintenance = async (data) => {
  const log = await MaintenanceLog.create(data);

  // Business rule:
  // Set status to Active
  // Update lastCleanedDate

  await Equipment.findByIdAndUpdate(data.equipment, {
    status: "Active",
    lastCleanedDate: data.maintenanceDate,
  });

  return log;
};

export const getMaintenanceByEquipment = async (id) => {
  return await MaintenanceLog.find({ equipment: id });
};
