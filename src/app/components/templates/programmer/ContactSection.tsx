// "use client";
// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     // Add form submission logic here (e.g., send to API)
//   };

//   return (
//     <div>
//       {/* Left Side - Contact Info */}
//       <div className="grid grid-cols-12 justify-between items-center py-5">
//         <div className="col-span-12 lg:col-span-4 text-white p-8">
//           <h3 className="text-3xl font-bold">let&apos;s connect</h3>
//           <p className="text-2xl text-[#828282]">
//             i&apos;m currently looking for new opportuntities , my inbox is
//             always open , whether you have a question or just want to say hi ,
//             i&apos;ll try my best to get back to you
//           </p>
//           <div className="flex">
//             <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
//             <FontAwesomeIcon icon={faLinkedin} className="w-12 h-12" />
//           </div>
//         </div>
//       </div>
//       <div className="col-span-1"></div>
//       {/* Right Side - Contact Form */}
//       <div className="col-span-12 lg:col-span-4 mt-0 sm:mt-8 h-full">
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-white text-2xl font-medium">
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="jacob@google.com"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white text-2xl font-medium">
//               Subject
//             </label>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Just saying hi"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-white text-2xl">
//               Message
//             </label>
//             <textarea
//               name="message"
//               placeholder="Let's talk about....."
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navyBlue bg-transparent"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#497D74] text-white py-2 rounded-lg hover:bg-white hover:text-navyBlue hover:border hover:border-navyBlue transition"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here (e.g., send to API)
  };

  return (
    <div className="grid grid-cols-12 gap-x-10 py-10 text-white">
      {/* 🔹 القسم الأيسر - معلومات التواصل */}
      <div className="col-span-12 lg:col-span-5 flex flex-col justify-center p-8">
        <h3 className="text-4xl font-bold mb-4">Let&apos;s Connect</h3>
        <p className="text-lg text-gray-400 leading-relaxed">
          I&apos;m currently looking for new opportunities. My inbox is always
          open, whether you have a question or just want to say hi. I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 h-10 text-gray-300 hover:text-white transition"
            />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-10 h-10 text-gray-300 hover:text-white transition"
            />
          </a>
        </div>
      </div>

      {/* 🔹 فراغ في المنتصف للموازنة */}
      <div className="hidden lg:block col-span-1"></div>

      {/* 🔹 القسم الأيمن - نموذج التواصل */}
      <div className="col-span-12 lg:col-span-6">
        <form
          className="space-y-6 bg-opacity-10 p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-xl font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="jacob@google.com"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xl font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Just saying hi"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-white"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-xl font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Let's talk about..."
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent text-white"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#497D74] text-white py-3 rounded-lg hover:bg-teal-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
