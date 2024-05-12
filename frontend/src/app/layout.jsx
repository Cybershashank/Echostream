import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PrelineScript from "./PrelineLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Echo Stream",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
