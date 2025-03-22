"use client"; // ضروري لجعل الكود يعمل في الـ Client Side
import { useSearchParams } from "next/navigation";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainEditor from "./MainEditor";
import { templates } from "../data/templates";

const ControlTemplate = () => {
  const searchParams = useSearchParams(); // استخدام `useSearchParams` بدلاً من `useRouter`
  const templateName = searchParams.get("template"); // جلب قيمة `template` من الـ URL

  // البحث عن التمبليت المناسب
  const selectedTemplate = templates.find((t) => t.name === templateName);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <MainEditor>
          {selectedTemplate?.Component ? (
            <selectedTemplate.Component />
          ) : (
            <p>Template not found</p>
          )}
        </MainEditor>
      </div>
    </div>
  );
};

export default ControlTemplate;
