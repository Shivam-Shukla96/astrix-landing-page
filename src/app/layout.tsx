import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgImg from "../../public/bgImg.png";
import { DesktopEventBg } from "@/components/BgImage";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Astrix",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        style={{
          // add bg image Results.png from public folder
          // backgroundImage: `url('${bgImg.src}')`,
          backgroundSize: "cover",
          // background: "#14191F",
          width: "100%",
          // padding: "10px 20px", // add padding to the body
          maxWidth: "1920px",
          // margin: "auto",
         
        }
      }
      >
        <div className="relative ">
        <DesktopEventBg/>
        <div className="relative ">
        <Navbar />
        {children}
        <Footer />
        </div>
        </div>

      </body>
    </html>
  );
}
