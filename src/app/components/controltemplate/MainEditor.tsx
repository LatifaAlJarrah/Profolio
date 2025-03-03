interface MainEditorProps {
  backGroungColor?: string;
}
const MainEditor = ({ backGroungColor }: MainEditorProps) => {
  return (
    <main className={`"flex-grow p-4 ${backGroungColor}"`}>{/* Main editing area */}</main>
  );
};

export default MainEditor;
