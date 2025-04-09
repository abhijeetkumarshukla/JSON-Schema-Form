import FormRenderer from "../components/FormRenderer";
import Stepper from "../components/Stepper";
import { formSchema } from "../data/formSchema";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOCAL_STORAGE_KEY = "dynamicFormData";

const Home = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  const [stepIndex, setStepIndex] = useState(0);
  const nextStep = () => setStepIndex((prev) => Math.min(prev + 1, formSchema.length - 1));
  const prevStep = () => setStepIndex((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  return (
    <main className="flex flex-col items-center py-16 px-4 bg-gradient-to-br from-sky-100 to-white min-h-[80vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={stepIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-xl bg-white/70 backdrop-blur-lg border border-sky-200 p-8 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-500"
        >
          <FormRenderer
            step={formSchema[stepIndex]}
            formData={formData}
            setFormData={setFormData}
          />
          <Stepper
            stepIndex={stepIndex}
            totalSteps={formSchema.length}
            onNext={nextStep}
            onPrev={prevStep}
            onSubmit={handleSubmit}
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Home;
