interface MainEditorProps {
  children?: React.ReactNode;
}

const MainEditor = ({ children }: MainEditorProps) => {
  return <main>{children ? children : <p>No template selected</p>}</main>;
};

export default MainEditor;
