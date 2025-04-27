interface ButtonsSectionProps {
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
}

const ButtonsSection = ({ onSave, onLoad, onReset }: ButtonsSectionProps) => {
  return (
    <div className="flex flex-col justify-between mb-4 gap-4 font-mono">
      <button
        onClick={onSave}
        className="text-white bg-green-600 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
      >
        Save
      </button>
      <button
        onClick={onLoad}
        className="text-white bg-blue-500 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
      >
        Load saved data
      </button>
      <button
        onClick={onReset}
        className="text-white bg-red-600 w-1/3 md:w-full p-2 rounded-lg text-center font-bold"
      >
        Reset
      </button>
    </div>
  );
};

export default ButtonsSection;
