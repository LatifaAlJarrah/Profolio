import Link from "next/link";
import Logo from "../logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonName: string | null;
  description: string | null;
}

export default function Modal({
  isOpen,
  onClose,
  buttonName,
  description,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-md">
        <button onClick={onClose} className="float-right text-2xl font-bold">
          &times;
        </button>
        <div className=" justify-center items-center flex flex-col my-10">
          <Logo />
          <h2 className="text-sm font-normal my-4 text-charcoalGray">
            {description}
          </h2>
        </div>

        <form>
          <div className="mb-4">
            <div className="relative w-full">
              <input
                type="email"
                className="w-full p-3 pr-10 rounded shadow-[0_4px_4px_#D8D8D8] text-black text-sm placeholder:text-lightGrayShade focus:outline-none"
                required
                placeholder="Enter Your Email"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative w-full">
              <input
                type="password"
                className="w-full p-3 pr-10 rounded shadow-[0_4px_4px_#D8D8D8] text-black text-sm placeholder:text-lightGrayShade focus:outline-none"
                required
                placeholder="Enter Your Password"
              />
              <FontAwesomeIcon
                icon={faKey}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded my-4"
          >
            {buttonName}
          </button>
        </form>
        <div className="flex items-center justify-center space-x-6 w-full">
          <div className="h-px w-full bg-lightGrayShade"></div>{" "}
          {/* Left horizontal line */}
          <p className="text-gray-400">OR</p>
          <div className="h-px w-full bg-lightGrayShade"></div>{" "}
          {/* Right horizontal line */}
        </div>

        <div className="mt-4 text-center flex flex-col">
          <Link
            href="https://accounts.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-2 rounded shadow-[0_4px_4px_#D8D8D8] my-2"
          >
            Continue With Google
            <FontAwesomeIcon
              icon={faGoogle}
              className="w-6 h-6 text-charcoalGray float-right"
            />
          </Link>

          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-2 rounded shadow-[0_4px_4px_#D8D8D8] my-2"
          >
            Continue With Facebook
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 text-blue-600 float-right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

// import { createPortal } from "react-dom";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Logo from "../logo/Logo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faKey, faTimes } from "@fortawesome/free-solid-svg-icons";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   buttonName: string;
//   description: string;
// }

// export default function Modal({
//   isOpen,
//   onClose,
//   buttonName,
//   description,
// }: ModalProps) {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted || !isOpen) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-6 text-2xl text-gray-600"
//         >
//           <FontAwesomeIcon icon={faTimes} />
//         </button>

//         <div className="flex flex-col items-center mt-4">
//           <Logo />
//           <h2 className="text-sm font-normal my-4 text-gray-700">
//             {description}
//           </h2>
//         </div>

//         <form>
//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 type="email"
//                 className="w-full p-3 pr-12 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//                 placeholder="Enter Your Email"
//               />
//               <FontAwesomeIcon
//                 icon={faEnvelope}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <div className="relative">
//               <input
//                 type="password"
//                 className="w-full p-3 pr-12 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
//                 required
//                 placeholder="Enter Your Password"
//               />
//               <FontAwesomeIcon
//                 icon={faKey}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-primary text-white p-3 rounded-md my-4"
//           >
//             {buttonName}
//           </button>
//         </form>

//         <div className="flex items-center justify-center space-x-4 my-4 w-full">
//           <div className="h-px w-full bg-gray-300"></div>
//           <p className="text-gray-500">OR</p>
//           <div className="h-px w-full bg-gray-300"></div>
//         </div>

//         <div className="w-full flex flex-col space-y-3">
//           <Link
//             href="https://accounts.google.com"
//             className="flex items-center justify-center p-3 border rounded-md shadow-md text-gray-600 hover:bg-gray-100"
//           >
//             <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 mr-2" />
//             Continue With Google
//           </Link>
//           <Link
//             href="https://facebook.com"
//             className="flex items-center justify-center p-3 border rounded-md shadow-md text-gray-600 hover:bg-gray-100"
//           >
//             <FontAwesomeIcon
//               icon={faFacebook}
//               className="w-5 h-5 text-blue-600 mr-2"
//             />
//             Continue With Facebook
//           </Link>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }
