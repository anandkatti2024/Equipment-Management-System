export default function EquipmentTable({
  equipment,
  onEdit,
  onDelete,
  onMaintenance
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border">

  <table className="w-full">

    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="p-4 text-left">Name</th>
        <th className="p-4 text-left">Type</th>
        <th className="p-4 text-left">Status</th>
        <th className="p-4 text-left">Last Cleaned</th>
        <th className="p-4 text-center">Actions</th>
      </tr>
    </thead>

    <tbody>
      {equipment.map((item, index) => (
        <tr
          key={item._id}
          className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
        >
          <td className="p-4">{item.name}</td>
          <td className="p-4">{item.type?.name}</td>
          <td className="p-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${item.status === "Active" ? "bg-green-100 text-green-600" :
              item.status === "Inactive" ? "bg-gray-200 text-gray-700" :
              "bg-yellow-100 text-yellow-600"}`}>
              {item.status}
            </span>
          </td>
          <td className="p-4">
            {item.lastCleanedDate?.split("T")[0]}
          </td>
          <td className="p-4 text-center space-x-2">

            <button
              onClick={() => onEdit(item)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(item._id)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Delete
            </button>

            <button
              onClick={() => onMaintenance(item)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
            >
              Maintenance
            </button>

          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>  
  );
}