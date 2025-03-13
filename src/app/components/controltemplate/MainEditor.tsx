// interface MainEditorProps {
//   backGroungColor?: string;
// }
// const MainEditor = ({ backGroungColor }: MainEditorProps) => {
//   return (
//     <main className={`"flex-grow p-4 ${backGroungColor}"`}>latifa</main>
//   );
// };

// export default MainEditor;
interface MainEditorProps {
  backgroundColor?: string;
  children?: React.ReactNode; // استلام المكوّن كـ prop
}

const MainEditor = ({
  children,
}: MainEditorProps) => {
  return (
    <main className={`flex-grow p-4`}>
      {children ? children : <p>No template selected</p>}
    </main>
  );
};

export default MainEditor;
