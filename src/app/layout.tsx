// "use client";
// import { usePathname } from "next/navigation";

// import "./globals.css";

// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const isTemplatePage =
//     pathname.startsWith("/templates/") ||
//     pathname.startsWith("/controltemplate");

//   return (
//     <html lang="en">
//       <body>
//         {!isTemplatePage && <Navbar />}
//         <main> {children}</main>
//         {!isTemplatePage && <Footer />}
//       </body>
//     </html>
//   );
// }
import { auth } from "@/auth";
import "./globals.css";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import SessionProvider from "@components/SessionProvider";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // Get the session from NextAuth
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
