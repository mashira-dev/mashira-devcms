import "./styles.css";
import Image from "next/image";
import Navbar from "../(frontend)/navbar";
import SmoothScrollProvider from "../(frontend)/SmoothScrollProvider";
import rightA from "../../../public/images/rightArrow.png"
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

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

const aspekta = localFont({
  src: [
    { path: "../../../public/fonts/Aspekta/Aspekta-300.woff2", weight: "300", style: "normal" },
    { path: "../../../public/fonts/Aspekta/Aspekta-400.woff2", weight: "400", style: "normal" },
    { path: "../../../public/fonts/Aspekta/Aspekta-500.woff2", weight: "500", style: "normal" },
    { path: "../../../public/fonts/Aspekta/Aspekta-600.woff2", weight: "600", style: "normal" },
    { path: "../../../public/fonts/Aspekta/Aspekta-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-aspekta",
  display: "swap",
});

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${hankenGrotesk.variable} ${playfairDisplay.variable} ${aspekta.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}