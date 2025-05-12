// src/app/components/ui/ErrorBox.tsx
import { useEffect, useState } from "react";

interface ErrorBoxProps {
  message: string;
  onClose: () => void;
}

const ErrorBox = ({ message, onClose }: ErrorBoxProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        onClose();
      }, 5000); // يتقفل بعد 5 ثواني تلقائياً
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-red-600">خطأ</h3>
          <button
            onClick={() => {
              setIsOpen(false);
              onClose();
            }}
            className="text-red-600 hover:text-red-800"
          >
            ×
          </button>
        </div>
        <p className="text-gray-700">{message}</p>
        <button
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          إغلاق
        </button>
      </div>
    </div>
  );
};

export default ErrorBox;
