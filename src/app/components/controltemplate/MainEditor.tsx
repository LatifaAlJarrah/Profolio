interface MainEditorProps {
  children?: React.ReactNode;
}

const MainEditor = ({ children }: MainEditorProps) => {
  return (
    <main className={`flex-grow overflow-y-auto w-2/3`}>
      {children ? children : <p>No template selected</p>}
    </main>
  );
};

export default MainEditor;