import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import RecoilContextProvider from "./recoil-provider";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";

const satoshi = localFont({
  display: "swap",
  src: [
    {
      path: "../../pubic/fonts/santoshi.ttf",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Blockpocket",
  description: "A web3 Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-satoshi antialiased",
          satoshi.variable,
        )}
      >
        <RecoilContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
