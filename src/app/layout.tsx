import { auth } from "@/auth";
import "./globals.css";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
// import SessionProvider from "@components/SessionProvider";
import { SessionProvider } from "next-auth/react";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // Get the session from NextAuth
  console.log(session)
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
