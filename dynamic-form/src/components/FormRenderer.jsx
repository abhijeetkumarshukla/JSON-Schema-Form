import FieldRenderer from "./FieldRenderer";
import RepeatableSection from "./RepeatableSection";
import { motion, AnimatePresence } from "framer-motion";

const FormRenderer = ({ step, formData, setFormData }) => {
  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
        {step.fields.map((field) =>
          field.type === "repeatable" ? (
            <RepeatableSection
              key={field.name}
              field={field}
              values={formData[field.name] || []}
              onChange={(val) => handleChange(field.name, val)}
            />
          ) : (
            <FieldRenderer
              key={field.name}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FormRenderer;
