import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: "700",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className={`${dancingScript.className} text-4xl font-black`}>
      Profolio
    </div>
  );
}