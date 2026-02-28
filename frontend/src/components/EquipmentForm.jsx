import { useState, useEffect } from "react";

export default function EquipmentForm({
  types,
  onSubmit,
  initialData,
  errorMessage
}) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    status: "Inactive",
    lastCleanedDate: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
   <div className="bg-white shadow-lg rounded-xl p-6 mb-10 border">

  <h2 className="text-2xl font-semibold mb-6 text-gray-700">
    {initialData ? "Edit Equipment" : "Add Equipment"}
  </h2>

  {errorMessage && (
    <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
      {errorMessage}
    </div>
  )}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <input
      className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      placeholder="Equipment Name"
      name="name"
      value={form.name}
      onChange={handleChange}
    />

  <select
  className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
  name="type"
  value={form.type}
  onChange={handleChange}
>
  <option value="">Select Type</option>
  <option value="Laptop">Laptop</option>
  <option value="Printer">Printer</option>
   <option value="Scanner">Scanner</option>
   <option value="Monitor">Monitor</option>
</select>

    <select
      className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      name="status"
      value={form.status}
      onChange={handleChange}
    >
      <option>Active</option>
      <option>Inactive</option>
      <option>Under Maintenance</option>
    </select>

    <input
      type="date"
      className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
      name="lastCleanedDate"
      value={form.lastCleanedDate}
      onChange={handleChange}
    />

  </div>

  <button
    onClick={() => onSubmit(form)}
    className="mt-6 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg shadow"
  >
    Save Equipment
  </button>

</div>
  );
}