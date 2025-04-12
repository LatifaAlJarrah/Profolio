import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Modal from "@/components/Modal"; // افترض أن لديك مكون مودال جاهز

function GoogleIcon() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 533.5 544.3"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M533.5 278.4c0-17.4-1.6-34.1-4.7-50.3H272v95.1h146.9c-6.3 33.9-25.2 62.7-53.7 82v68.1h86.8c50.8-46.8 81.5-115.8 81.5-194.9z"
        fill="#4285f4"
      />
      <path
        d="M272 544.3c72.6 0 133.6-24.1 178.2-65.3l-86.8-68.1c-24.1 16.1-55 25.6-91.4 25.6-70 0-129.3-47.2-150.5-110.4H33v69.7c44.7 88.1 137.2 148.5 239 148.5z"
        fill="#34a853"
      />
      <path
        d="M121.5 325.9c-10.4-30.6-10.4-63.6 0-94.2V162H33c-43.8 87.7-43.8 191.5 0 279.2l88.5-69.3z"
        fill="#fbbc04"
      />
      <path
        d="M272 107.7c39.5-.6 77.4 13.9 106.6 39.8l79.4-79.4C405.3 24.3 340.6-1.1 272 0 170.2 0 77.7 60.4 33 148.5l88.5 69.7C142.7 154.9 202 107.7 272 107.7z"
        fill="#ea4335"
      />
    </svg>
  );
}

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
   const { data: session, status } = useSession();
   const router = useRouter();
   const [showPasswordModal, setShowPasswordModal] = useState(false);

   // التحقق من الجلسة
   useEffect(() => {
     if (session) {
       if (!session.user.password) {
         setShowPasswordModal(true);
       } else {
         // توجيه مباشرة إلى صفحة الـ projects إذا كان عنده كلمة مرور
         router.push("/projects");
       }
     }
   }, [session]);

   // دالة التعامل مع تسجيل الدخول عبر جوجل
   const handleGoogleLogin = () => {
     signIn("google");
   };

   // دالة إرسال كلمة المرور الجديدة بعد إدخالها
   const handleSetPassword = async (password: string) => {
     // إرسال كلمة المرور إلى السيرفر وتحديثها
     const response = await fetch("/api/set-password", {
       method: "POST",
       body: JSON.stringify({ password }),
     });
     if (response.ok) {
       // بعد تحديد الباسوورد، توجيه إلى صفحة الـ projects
       router.push("/projects");
     }
   };
  return (
    <Button
      // onClick={() => signIn("google")}
      onClick={handleGoogleLogin}
      className="w-full p-2 rounded shadow-[0_4px_4px_#D8D8D8] my-2 text-white  px-6 py-3  flex items-center gap-2 font-mono"
    >
      {showPasswordModal && (
        <Modal
          onClose={() => setShowPasswordModal(false)}
          onSubmit={handleSetPassword}
        />
      )}
      <GoogleIcon />
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
