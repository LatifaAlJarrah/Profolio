import Header from "@/app/components/templates/developer/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export default function Layout({ children }) {
  return (
    <div className="bg-primarydev text-white font-jetBrainsMono leading-loose px-48">
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
