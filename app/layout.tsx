import type { Metadata } from "next";
import Header from "./ui/header";
import "./globals.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Inventory Booking dashboard",
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
        <div>
          <Header />
          <div className="container px-4 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
