import FieldRenderer from "./FieldRenderer";

const RepeatableSection = ({ field, values, onChange }) => {
  const addEntry = () => onChange([...values, {}]);

  const removeEntry = (index) => {
    const updated = [...values];
    updated.splice(index, 1);
    onChange(updated);
  };

  const updateEntry = (index, name, value) => {
    const updated = [...values];
    updated[index] = { ...updated[index], [name]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <label className="text-gray-800 font-medium">{field.label}</label>
      {values.map((entry, idx) => (
        <div key={idx} className="border p-4 rounded-md bg-gray-50 relative">
          {field.fields.map((subField) => (
            <FieldRenderer
              key={subField.name}
              field={subField}
              value={entry[subField.name]}
              onChange={(name, value) => updateEntry(idx, name, value)}
            />
          ))}
          <button
            onClick={() => removeEntry(idx)}
            className="text-sm text-red-500 mt-2 hover:underline absolute top-2 right-4"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addEntry}
        className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        Add {field.label}
      </button>
    </div>
  );
};

export default RepeatableSection;
