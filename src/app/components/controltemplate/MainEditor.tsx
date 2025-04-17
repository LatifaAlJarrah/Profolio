interface MainEditorProps {
  children?: React.ReactNode;
}

const MainEditor = ({ children }: MainEditorProps) => {
  return (
    <main className={`flex-grow overflow-y-auto w-3/4`}>
      {children ? children : <p>No template selected</p>}
    </main>
  );
};

export default MainEditor;