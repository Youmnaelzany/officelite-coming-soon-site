import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "officelite App",
  description: "officelite App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${kumbhSans.className} mx-auto flex h-screen w-full max-w-7xl flex-col bg-[#FAFAFA] antialiased`}
      >
        <header className="flex items-center justify-center px-4 pt-12 sm:items-start sm:justify-start sm:px-6 sm:pt-[4.5rem] lg:px-8 lg:pt-20">
          <Link href={"/"}>
            <Image
              src={"/assets/shared/logo.svg"}
              alt="logo"
              width={155}
              height={30}
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
