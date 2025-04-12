"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SetPasswordPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/set-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("تم تعيين كلمة المرور بنجاح!");
      setTimeout(() => router.push("/"), 2000);
    } else {
      setMessage(data.error || "حدث خطأ");
    }
  };

  if (!session) return <p>يجب أن تكون مسجل دخول</p>;

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">تعيين كلمة مرور</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          className="w-full border p-2 rounded mb-3"
          placeholder="أدخل كلمة مرور جديدة"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          حفظ
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
}
