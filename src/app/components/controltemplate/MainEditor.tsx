// interface MainEditorProps {
//   backgroundColor?: string;
//   children?: React.ReactNode; // استلام المكوّن كـ prop
// }

// const MainEditor = ({
//   children,
// }: MainEditorProps) => {
//   return (
//     <main className={`flex-grow`}>
//       {children ? children : <p>No template selected</p>}
//     </main>
//   );
// };

// export default MainEditor;
"use client";
import { useState } from "react";

interface MainEditorProps {
  backgroundColor?: string;
  children?: React.ReactNode;
}

const MainEditor = ({
  backgroundColor = "#f5f5f5",
  children,
}: MainEditorProps) => {
  // Estado para controlar el zoom
  const [zoom, setZoom] = useState(1);

  // Manejadores para el zoom
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.1, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.1, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <div className="main-editor-container" style={{ backgroundColor }}>
      <div className="main-editor-toolbar">
        <div className="zoom-controls">
          <button onClick={handleZoomOut} className="zoom-button">
            -
          </button>
          <span className="zoom-level">{Math.round(zoom * 100)}%</span>
          <button onClick={handleZoomIn} className="zoom-button">
            +
          </button>
          <button onClick={handleResetZoom} className="zoom-reset">
            Reset
          </button>
        </div>
      </div>
      <div
        className="main-editor-content"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: "top center",
        }}
      >
        {children ? (
          children
        ) : (
          <div className="no-template-message">No template selected</div>
        )}
      </div>
    </div>
  );
};

export default MainEditor;