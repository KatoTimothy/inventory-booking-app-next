import type { Metadata } from "next";
import Header from "./ui/header";
import "./globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Inventory booking app",
  description: "Dashboard for managing Company inventory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-cream-200 `}>
        <div className=" ">
          <Header />
          <div className="max-w-5xl mx-auto px-4 ">{children}</div>
        </div>
      </body>
    </html>
  );
}
