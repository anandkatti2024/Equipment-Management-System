import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Under Maintenance"],
      default: "Inactive",
    },

    lastCleanedDate: { type: Date, required: true },
  },
  { timestamps: true },
);

export default mongoose.model("Equipment", schema);
