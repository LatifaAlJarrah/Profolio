interface MainEditorProps {
  backgroundColor?: string;
  children?: React.ReactNode; // استلام المكوّن كـ prop
}

const MainEditor = ({
  children,
}: MainEditorProps) => {
  return (
    <main className={`flex-grow`}>
      {children ? children : <p>No template selected</p>}
    </main>
  );
};

export default MainEditor;
