import { Inter, Geostar_Fill } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  adjustFontFallback: false,
});
export const geostarFill = Geostar_Fill({
  weight: "400",
  subsets: ["latin"],
  display: "auto",
  adjustFontFallback: true,
});
