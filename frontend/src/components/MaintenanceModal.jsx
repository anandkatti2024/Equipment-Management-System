import { useEffect, useState } from "react";
import api from "../lib/api";

export default function MaintenanceModal({ equipment, onClose }) {
  const [logs, setLogs] = useState([]);
  const [form, setForm] = useState({
    maintenanceDate: "",
    notes: "",
    performedBy: ""
  });

  useEffect(() => {
    if (equipment) {
      api
        .get(`/maintenance/equipment/${equipment._id}`)
        .then(res => setLogs(res.data));
    }
  }, [equipment]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await api.post("/maintenance", {
      ...form,
      equipment: equipment._id
    });

    const res = await api.get(
      `/maintenance/equipment/${equipment._id}`
    );
    setLogs(res.data);
  };

  if (!equipment) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 w-2/3 rounded">

        <h2 className="text-xl font-bold mb-4">
          Maintenance - {equipment.name}
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="date"
            name="maintenanceDate"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="performedBy"
            placeholder="Performed By"
            className="p-2 border rounded"
            onChange={handleChange}
          />
          <input
            name="notes"
            placeholder="Notes"
            className="p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Add Maintenance
        </button>

        <div>
          <h3 className="font-semibold mb-2">History</h3>
          {logs.map(log => (
            <div key={log._id} className="border p-2 mb-2">
              <p>Date: {log.maintenanceDate.split("T")[0]}</p>
              <p>By: {log.performedBy}</p>
              <p>Notes: {log.notes}</p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}