import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    equipment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
    maintenanceDate: { type: Date, required: true },
    notes: String,
    performedBy: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("MaintenanceLog", schema);
