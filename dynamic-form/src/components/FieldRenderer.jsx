const FieldRenderer = ({ field, value, onChange }) => {
    const handleChange = (e) => {
      const val = field.type === "checkbox" ? e.target.checked : e.target.value;
      onChange(field.name, val);
    };
  
    return (
      <div className="space-y-1">
        <label className="block text-gray-700 font-medium">{field.label}</label>
  
        {field.type === "text" || field.type === "number" ? (
          <input
            type={field.type}
            value={value || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : field.type === "select" ? (
          <select
            value={value || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md"
          >
            <option value="">Select</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : field.type === "radio" ? (
          <div className="flex space-x-4">
            {field.options.map((opt) => (
              <label key={opt} className="flex items-center space-x-1">
                <input
                  type="radio"
                  name={field.name}
                  value={opt}
                  checked={value === opt}
                  onChange={handleChange}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        ) : field.type === "checkbox" ? (
          <input type="checkbox" checked={value || false} onChange={handleChange} />
        ) : null}
      </div>
    );
  };
  
  export default FieldRenderer;
  