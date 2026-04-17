import "./styles.css";
import Image from "next/image";
import Navbar from "../(frontend)/navbar";
import rightA from "../../../public/images/rightArrow.png"
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${hankenGrotesk.variable} ${playfairDisplay.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}