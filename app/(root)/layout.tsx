import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./globals.module.css"
import Header from "../ui/components/Header/Header"
import Footer from "../ui/components/Footer/Footer"

export const metadata: Metadata = {
  title: "EnergyREX's Portfolio",
  description: "EnergyREX's developer portfolio",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className} lang="en">
      <body className={styles.mainBody}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
