import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/NavBar";

export const metadata: Metadata = {
  title: "Fade CLient Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
