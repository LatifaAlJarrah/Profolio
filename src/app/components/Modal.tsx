import { useState } from "react";

interface ModalProps {
  onClose: () => void;
  onSubmit: (password: string) => void;
}

export default function Modal({ onClose, onSubmit }: ModalProps) {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (password.length < 6) {
      alert("كلمة المرور يجب أن تكون 6 أحرف أو أكثر");
      return;
    }
    onSubmit(password);
    onClose();
  };

  return (
    <div className="modal">
      <h2>تعيين كلمة المرور</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="أدخل كلمة المرور"
      />
      <button onClick={handleSubmit}>إرسال</button>
      <button onClick={onClose}>إغلاق</button>
    </div>
  );
}
