import "./styles.css";
import Image from "next/image";
import Navbar from "../(frontend)/navbar";
import rightA from "../../../public/images/rightArrow.png"

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}