"use client";
import { useState, useEffect } from "react";

interface ColorPickerProps {
  label?: string;
  defaultColor?: string;
  onChange?: (color: string) => void;
}

const ColorPicker = ({
  label,
  defaultColor = "#FFFFFF",
  onChange,
}: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    if (onChange) {
      onChange(newColor);
    }
  };

  return (
    <div className="color-picker-container flex items-center gap-2">
      {label && <label className="color-picker-label text-sm">{label}</label>}
      <div className="color-picker-input-group flex items-center gap-2">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          className="color-picker-input w-8 h-8 border rounded"
        />
        <span className="color-picker-value text-sm">{color}</span>
      </div>
    </div>
  );
};

export default ColorPicker;