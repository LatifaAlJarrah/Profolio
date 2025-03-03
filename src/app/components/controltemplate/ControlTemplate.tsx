import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";

const ControlTemplate = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <MainEditor />
      </div>
    </div>
  );
};

export default ControlTemplate;
