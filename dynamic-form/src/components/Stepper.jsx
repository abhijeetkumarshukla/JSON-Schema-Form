const Stepper = ({ stepIndex, totalSteps, onNext, onPrev, onSubmit }) => {
    const isLastStep = stepIndex === totalSteps - 1;
    const progress = ((stepIndex + 1) / totalSteps) * 100;
  
    return (
      <div className="mt-8 space-y-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
  
        <div className="flex justify-between mt-4">
          <button
            onClick={onPrev}
            disabled={stepIndex === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {isLastStep ? (
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };
  
  export default Stepper;
  