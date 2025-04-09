import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavbarGuest from "@/components/NavbarGuest";
import NavbarUser from "@/components/NavbarUser";
import SignUpPage from "@/app/signup/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NavyGo App", // Example Title
  description: "Your NavyGo Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        {/* <NavbarGuest /> */}
        {/* <NavbarUser /> */}
        <main className="flex-grow">
          {children}
        </main>
        {/* <Footer /> */}

        {/* <SignUpPage /> */}
      </body>
    </html>
  );
}