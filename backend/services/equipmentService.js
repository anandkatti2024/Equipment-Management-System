import Equipment from "../models/Equipment.js";

export const getAllEquipment = async () => {
  return await Equipment.find().populate("type");
};

export const createEquipment = async (data) => {
  return await Equipment.create(data);
};

export const updateEquipment = async (id, data) => {
  if (data.status === "Active") {
    const lastCleaned = new Date(data.lastCleanedDate);
    const diffDays =
      (Date.now() - lastCleaned.getTime()) / (1000 * 60 * 60 * 24);

    if (diffDays > 30) {
      throw new Error(
        "Equipment cannot be Active if last cleaned date is older than 30 days.",
      );
    }
  }

  return await Equipment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteEquipment = async (id) => {
  return await Equipment.findByIdAndDelete(id);
};
