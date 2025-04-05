"use client";
import { useState } from "react";

interface ColorPickerProps {
  defaultColor?: string;
  onChange?: (color: string) => void; // ✅ أضفنا دعم تغيير اللون
}

const ColorPicker = ({ defaultColor = "#FFFFFF", onChange }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    if (onChange) {
      onChange(e.target.value); // ✅ نرسل اللون الجديد للمكون الأب
    }
  };

  return (
    <div className="flex items-center justify-evenly bg-transparent gap-2 border rounded-lg px-2">
      <input
        id="color-input"
        type="color"
        className="w-6 h-6 cursor-pointer"
        value={color}
        onChange={handleColorChange}
      />
      <label htmlFor="color-input" className="text-sm text-gray-800">
        {color}
      </label>
    </div>
  );
};

export default ColorPicker;
