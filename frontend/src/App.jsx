import { useEffect, useState } from "react";
import api from "./lib/api";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import MaintenanceModal from "./components/MaintenanceModal";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [types, setTypes] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [error, setError] = useState("");
  const [maintenanceItem, setMaintenanceItem] = useState(null);

  const fetchData = async () => {
    const eqRes = await api.get("/equipment");
    setEquipment(eqRes.data);

    const typeRes = await api.get("/equipment-types"); // must add backend route
    setTypes(typeRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingItem) {
        await api.put(`/equipment/${editingItem._id}`, formData);
      } else {
        await api.post("/equipment", formData);
      }

      setEditingItem(null);
      setError("");
      fetchData();

    } catch (err) {
      setError(err.response?.data?.message);
    }
  };

  const handleDelete = async (id) => {
    await api.delete(`/equipment/${id}`);
    fetchData();
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10">
  <div className="max-w-6xl mx-auto px-6">

    <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
      Equipment Management System
    </h1>

    {/* Form */}
    <EquipmentForm
      types={types}
      onSubmit={handleSubmit}
      initialData={
        editingItem && {
          name: editingItem.name,
          type: editingItem.type?._id,
          status: editingItem.status,
          lastCleanedDate:
            editingItem.lastCleanedDate?.split("T")[0]
        }
      }
      errorMessage={error}
    />

    {/* Table */}
    <EquipmentTable
      equipment={equipment}
      onEdit={setEditingItem}
      onDelete={handleDelete}
      onMaintenance={setMaintenanceItem}
    />

    <MaintenanceModal
      equipment={maintenanceItem}
      onClose={() => setMaintenanceItem(null)}
    />

  </div>
</div>
  );
}

export default App; 