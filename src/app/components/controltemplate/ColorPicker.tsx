// "use client";
// import { useState } from "react";

// interface ColorPickerProps {
//   defaultColor?: string;
//   onChange?: (color: string) => void; // ✅ أضفنا دعم تغيير اللون
// }

// const ColorPicker = ({ defaultColor = "#FFFFFF", onChange }: ColorPickerProps) => {
//   const [color, setColor] = useState(defaultColor);

//   const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setColor(e.target.value);
//     if (onChange) {
//       onChange(e.target.value); // ✅ نرسل اللون الجديد للمكون الأب
//     }
//   };

//   return (
//     <div className="flex items-center justify-evenly bg-transparent gap-2 border rounded-lg px-2">
//       <input
//         id="color-input"
//         type="color"
//         className="w-6 h-6 cursor-pointer"
//         value={color}
//         onChange={handleColorChange}
//       />
//       <label htmlFor="color-input" className="text-sm text-gray-800">
//         {color}
//       </label>
//     </div>
//   );
// };

// export default ColorPicker;
// "use client";
// import { useState, useEffect } from "react";

// interface ColorPickerProps {
//   label?: string;
//   defaultColor?: string;
//   onChange?: (color: string) => void;
// }

// const ColorPicker = ({
//   label,
//   defaultColor = "#FFFFFF",
//   onChange,
// }: ColorPickerProps) => {
//   const [color, setColor] = useState(defaultColor);

//   // Actualizar el color si cambia externamente
//   useEffect(() => {
//     setColor(defaultColor);
//   }, [defaultColor]);

//   const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newColor = e.target.value;
//     setColor(newColor);
//     if (onChange) {
//       onChange(newColor);
//     }
//   };

//   return (
//     <div className="color-picker-container">
//       {label && <label className="color-picker-label">{label}</label>}
//       <div className="color-picker-input-group">
//         <input
//           type="color"
//           value={color}
//           onChange={handleColorChange}
//           className="color-picker-input"
//         />
//         <span className="color-picker-value">{color}</span>
//       </div>
//     </div>
//   );
// };

// export default ColorPicker;

// src/components/controltemplate/ColorPicker.tsx
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