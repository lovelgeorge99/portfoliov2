import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovel George",
  description:
    "Portfolio website for Lovel George to showcase his projects and skills",
  generator: "lovelgeorge.com",
  icons: {
    icon: "/my-pic.png",
    apple: "/my-pic.png",
    shortcut: "/my-pic.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

import "./globals.css";
