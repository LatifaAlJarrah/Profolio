import { auth } from "@/auth";
import "./globals.css";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import { SessionProvider } from "next-auth/react";
import { ErrorProvider } from "./context/ErrorContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth(); // Get the session from NextAuth
  return (
    <html lang="en">
      <body>
        <ErrorProvider>
          <SessionProvider session={session}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SessionProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
