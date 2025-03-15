// import React from "react";
// import { render } from "react-dom";
// import { Icon1 } from "./Icon1";
// import { Icon2 } from "./Icon2";

// export function Component() {
//   return (
//     <>
//       <style>{`div {
//   box-sizing: border-box;
//   transition-property: all;
//   transition-duration: 0.075s;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   border: 0px solid rgb(229, 231, 235);

// }
// a {
//   box-sizing: border-box;
//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   text-decoration: none;

// }
// span {
//   box-sizing: border-box;
//   transition-property: all;
//   transition-duration: 0.075s;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   border: 0px solid rgb(229, 231, 235);

// }
// button {
//   box-sizing: border-box;
//   font-family: "JetBrains Mono", "JetBrains Mono Fallback";
//   font-feature-settings: normal;
//   font-variation-settings: normal;
//   font-size: 16px;
//   letter-spacing: normal;
//   text-transform: none;
//   appearance: button;
//   background-color: rgba(0, 0, 0, 0);
//   cursor: pointer;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 0px;

// }
// svg {
//   box-sizing: border-box;
//   display: block;
//   vertical-align: middle;
//   transition-property: all;
//   transition-duration: 0.075s;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   border: 0px solid rgb(229, 231, 235);

// }
// path {
//   box-sizing: border-box;
//   transition-property: all;
//   transition-duration: 0.075s;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   border: 0px solid rgb(229, 231, 235);

// }
// `}</style>
//       <header
//         style={{
//           boxSizing: "border-box",
//           transitionProperty: "all",
//           transitionDuration: "0.075s",
//           transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//           paddingTop: "32px",
//           paddingBottom: "48px",
//           color: "rgb(255, 255, 255)",
//           border: "0px solid rgb(229, 231, 235)",
//           width: "100%",
//           backgroundColor: "rgb(28, 28, 34)",
//           fontSize: "16px",
//           lineHeight: "32px",
//           fontFamily: '"JetBrains Mono", "JetBrains Mono Fallback"',
//         }}
//       >
//         <div
//           style={{
//             width: "1200px",
//             marginRight: "160.4px",
//             marginLeft: "160.4px",
//             paddingRight: "15px",
//             paddingLeft: "15px",
//             maxWidth: "1200px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <a
//             href="/"
//             style={{
//               color: "rgb(255, 255, 255)",
//               transitionDuration: "0.075s",
//               border: "0px solid rgb(229, 231, 235)",
//             }}
//           >
//             <h1
//               style={{
//                 boxSizing: "border-box",
//                 fontSize: "36px",
//                 fontWeight: "600",
//                 transitionProperty: "all",
//                 transitionDuration: "0.075s",
//                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                 lineHeight: "40px",
//                 letterSpacing: "-1.8px",
//                 border: "0px solid rgb(229, 231, 235)",
//                 margin: "0px",
//               }}
//             >
//               sewarDev/><span style={{ color: "rgb(74, 165, 165)" }}>.</span>
//             </h1>
//           </a>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               rowGap: "32px",
//               columnGap: "32px",
//             }}
//           >
//             <nav
//               style={{
//                 boxSizing: "border-box",
//                 transitionProperty: "all",
//                 transitionDuration: "0.075s",
//                 transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
//                 display: "flex",
//                 rowGap: "32px",
//                 columnGap: "32px",
//                 border: "0px solid rgb(229, 231, 235)",
//               }}
//             >
//               <a
//                 href="/"
//                 style={{
//                   color: "rgb(74, 165, 165)",
//                   transitionDuration: "0.15s",
//                   fontWeight: "500",
//                   textTransform: "capitalize",
//                   borderTop: "0px solid rgb(74, 165, 165)",
//                   borderLeft: "0px solid rgb(74, 165, 165)",
//                   borderRight: "0px solid rgb(74, 165, 165)",
//                   borderBottom: "1.6px solid rgb(74, 165, 165)",
//                 }}
//               >
//                 home
//               </a>
//               <a
//                 href="#resume"
//                 style={{
//                   color: "rgb(255, 255, 255)",
//                   transitionDuration: "0.15s",
//                   fontWeight: "500",
//                   textTransform: "capitalize",
//                   border: "0px solid rgb(229, 231, 235)",
//                 }}
//               >
//                 resume
//               </a>
//               <a
//                 href="#work"
//                 style={{
//                   color: "rgb(255, 255, 255)",
//                   transitionDuration: "0.15s",
//                   fontWeight: "500",
//                   textTransform: "capitalize",
//                   border: "0px solid rgb(229, 231, 235)",
//                 }}
//               >
//                 work
//               </a>
//               <a
//                 href="#contact"
//                 style={{
//                   color: "rgb(255, 255, 255)",
//                   transitionDuration: "0.15s",
//                   fontWeight: "500",
//                   textTransform: "capitalize",
//                   border: "0px solid rgb(229, 231, 235)",
//                 }}
//               >
//                 contact
//               </a>
//             </nav>
//             <button
//               style={{
//                 fontWeight: "600",
//                 lineHeight: "24px",
//                 color: "rgb(74, 165, 165)",
//                 transitionProperty:
//                   "color, background-color, border-color, text-decoration-color, fill, stroke",
//                 transitionDuration: "0.3s",
//                 rowGap: "8px",
//                 columnGap: "8px",
//                 whiteSpaceCollapse: "collapse",
//                 textWrapMode: "nowrap",
//                 border: "0.8px solid rgb(74, 165, 165)",
//                 borderRadius: "9999px",
//                 padding: "12px",
//               }}
//             >
//               <Icon1 style={{ height: "20px", width: "20px" }} />
//               <span
//                 style={{
//                   position: "absolute",
//                   width: "1px",
//                   height: "1px",
//                   overflowX: "hidden",
//                   overflowY: "hidden",
//                   clip: "rect(0px, 0px, 0px, 0px)",
//                   whiteSpaceCollapse: "collapse",
//                   textWrapMode: "nowrap",
//                   padding: "0px",
//                   margin: "-1px",
//                 }}
//               >
//                 Toggle theme
//               </span>
//             </button>
//           </div>
//           <div style={{ display: "none" }}>
//             <button
//               type="button"
//               aria-haspopup="dialog"
//               aria-expanded="false"
//               aria-controls="radix-«R3db»"
//               style={{
//                 fontWeight: "400",
//                 lineHeight: "32px",
//                 color: "rgb(255, 255, 255)",
//                 transitionProperty: "all",
//                 transitionDuration: "0.075s",
//                 border: "0px solid rgb(229, 231, 235)",
//                 padding: "0px",
//               }}
//             >
//               <Icon2 style={{ fontSize: "32px", color: "rgb(74, 165, 165)" }} />
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// render(<Component />, document.getElementById("root"));
import React from "react";
import Link from "next/link";
import { Icon1 } from "./Icon1";
import { Icon2 } from "./Icon2";

export default function Header() {
  return (
    <header className="w-full bg-[#1C1C22] py-8 text-white">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-semibold">
          sewarDev<span className="text-[#4AA5A5]">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="text-[#4AA5A5] border-b-2 border-[#4AA5A5]">
            Home
          </Link>
          <Link href="#resume" className="hover:text-[#4AA5A5] transition">
            Resume
          </Link>
          <Link href="#work" className="hover:text-[#4AA5A5] transition">
            Work
          </Link>
          <Link href="#contact" className="hover:text-[#4AA5A5] transition">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <button className="flex items-center px-4 py-2 border border-[#4AA5A5] rounded-full text-[#4AA5A5] hover:bg-[#4AA5A5] hover:text-white transition">
          <Icon1 className="w-5 h-5" />
          <span className="sr-only">Toggle theme</span>
        </button>

        {/* Mobile Menu Button (Hidden by default) */}
        <button className="md:hidden text-[#4AA5A5] text-3xl">
          <Icon2 />
        </button>
      </div>
    </header>
  );
}
