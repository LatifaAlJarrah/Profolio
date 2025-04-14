// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SetPasswordPage() {
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters long");
//       return;
//     }

//     setLoading(true);
//     const res = await fetch("/api/set-password", {
//       method: "POST",
//       body: JSON.stringify({ password }),
//     });

//     setLoading(false);
//     if (res.ok) {
//       router.push("/projects");
//     } else {
//       alert("An error occurred, try again !");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//       >
//         <h1 className="text-xl font-bold mb-4">Create a password</h1>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <button
//           type="submit"
//           className="w-full bg-primary text-white py-2 rounded hover:text-primary hover:bg-white hover:border-[3px] hover:border-primary "
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save and continue"}
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetPasswordPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 💡 حالة للخطأ
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // تصفير الخطأ مع كل محاولة

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/set-password", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    setLoading(false);
    if (res.ok) {
      router.push("/projects");
    } else {
      setError("An error occurred, please try again!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-xl font-bold mb-4">Create a password</h1>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p> // ✅ عرض الخطأ
        )}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:text-primary hover:bg-white hover:border-[3px] hover:border-primary"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save and continue"}
        </button>
      </form>
    </div>
  );
}
