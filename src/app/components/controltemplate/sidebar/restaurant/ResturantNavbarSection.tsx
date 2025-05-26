// import { TemplateData } from "@/app/types/templateData";

// interface ResturantNavbarSectionProps {
//   templateData: TemplateData;
//   onChange: (key: string, value: string) => void;
//   onNavLinkChange: (index: number, field: string, value: string) => void;
// }

// const ResturantNavbarSection: React.FC<ResturantNavbarSectionProps> = ({
//   templateData,
//   onChange,
//   onNavLinkChange,
// }) => {
//   return (
//     <>
//       <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
//         <h3 className="text-lg font-normal text-center">Navbar</h3>
//       </div>
//       <div className="px-8">
//         <label className="block mb-2">
//           Restaurant Name (Logo):
//           <input
//             type="text"
//             value={templateData.logoName || ""}
//             onChange={(e) => onChange("logoName", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
//           />
//         </label>
//         <label className="block mb-2">
//           Logo Highlight Color:
//           <input
//             type="color"
//             value={templateData.logoColor || "#ffcc00"}
//             onChange={(e) => onChange("logoColor", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent"
//           />
//         </label>
//         <label className="block mb-2">
//           Navbar Background:
//           <input
//             type="color"
//             value={templateData.navbarColor || "#000000"}
//             onChange={(e) => onChange("navbarColor", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent"
//           />
//         </label>
//         <label className="block mb-2">
//           Navigation Links Color:
//           <input
//             type="color"
//             value={templateData.navigationLinksColor || "#ffffff"}
//             onChange={(e) => onChange("navigationLinksColor", e.target.value)}
//             className="p-1 border rounded-md w-full bg-transparent"
//           />
//         </label>
//         {templateData.navigationLinks?.map((link, index) => (
//           <div key={index} className="text-primary my-2">
//             Link {index + 1}
//             <div  className="mb-2 flex gap-6">
//               <label className="block text-charcoalGray">
//                 Name
//                 <input
//                   type="text"
//                   value={link.name}
//                   onChange={(e) =>
//                     onNavLinkChange(index, "name", e.target.value)
//                   }
//                   className="p-1 border rounded-md w-full bg-transparent text-black"
//                 />
//               </label>
//               <label className="block text-charcoalGray">
//                 URL
//                 <input
//                   type="text"
//                   value={link.link}
//                   onChange={(e) =>
//                     onNavLinkChange(index, "link", e.target.value)
//                   }
//                   className="p-1 border rounded-md w-full bg-transparent text-black "
//                 />
//               </label>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ResturantNavbarSection;
import { TemplateData } from "@/app/types/templateData";
import { FaTrash } from "react-icons/fa";

interface ResturantNavbarSectionProps {
  templateData: TemplateData;
  onChange: (key: string, value: string) => void;
  onNavLinkChange: (index: number, field: string, value: string) => void;
  onNavLinkDelete: (index: number) => void;
}

const ResturantNavbarSection: React.FC<ResturantNavbarSectionProps> = ({
  templateData,
  onChange,
  onNavLinkChange,
  onNavLinkDelete,
}) => {
  return (
    <>
      <div className="flex flex-col bg-lightGrayShade2 p-2 rounded-lg mb-4 mx-8">
        <h3 className="text-lg font-normal text-center">Navbar</h3>
      </div>
      <div className="px-8">
        <label className="block mb-2">
          Restaurant Name (Logo):
          <input
            type="text"
            value={templateData.logoName || ""}
            onChange={(e) => onChange("logoName", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent text-charcoalGray"
          />
        </label>
        <label className="block mb-2">
          Logo Highlight Color:
          <input
            type="color"
            value={templateData.logoColor || "#ffcc00"}
            onChange={(e) => onChange("logoColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        <label className="block mb-2">
          Navbar Background:
          <input
            type="color"
            value={templateData.navbarColor || "#000000"}
            onChange={(e) => onChange("navbarColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        <label className="block mb-2">
          Navigation Links Color:
          <input
            type="color"
            value={templateData.navigationLinksColor || "#ffffff"}
            onChange={(e) => onChange("navigationLinksColor", e.target.value)}
            className="p-1 border rounded-md w-full bg-transparent"
          />
        </label>
        {templateData.navigationLinks?.map((link, index) => (
          <div key={index} className="text-primary my-2">
            <div className="flex justify-between items-center mb-2">
              <span>Link {index + 1}</span>
              <button
                onClick={() => onNavLinkDelete(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
                aria-label={`Delete Link ${index + 1}`}
              >
                <FaTrash />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
              </button>
            </div>
            <div className="mb-2 flex gap-6">
              <label className="block text-charcoalGray">
                Name
                <input
                  type="text"
                  value={link.name}
                  onChange={(e) =>
                    onNavLinkChange(index, "name", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-black"
                />
              </label>
              <label className="block text-charcoalGray">
                URL
                <input
                  type="text"
                  value={link.link}
                  onChange={(e) =>
                    onNavLinkChange(index, "link", e.target.value)
                  }
                  className="p-1 border rounded-md w-full bg-transparent text-black"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResturantNavbarSection;