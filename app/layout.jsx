import { GeistSans } from "geist/font";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Providers from "./Providers";
import { SessionProvider } from "next-auth/react";
import { NextAuthProvider } from "./Providers";

export const metadata = {
  title: "Brightly",
  description: "Bright e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NextAuthProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}
