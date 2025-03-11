import { redirect } from "next/navigation";

export const metadata = {
  title: "Home | My Portfolio",
};

export default function Home() {
  return redirect("/home");;
}
