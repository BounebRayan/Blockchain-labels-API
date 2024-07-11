import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WalletLabels API Reference",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#15171C] px-14 py-3 text-white sticky text-[14px] font-medium top-0 flex items-center justify-between z-50 border-solid border-white border-opacity-25 border-b-[0.5px]">
          <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="size-6" preserveAspectRatio="none" viewBox="0 0 500 500" width="1em" height="1em"><path stroke="currentColor" stroke-width="35" d="m155.568 339.027 183.448-183.448M162.416 439.5h176.168c56.287 0 101.916-45.629 101.916-101.916V161.416c0-56.287-45.629-101.916-101.916-101.916H162.416C106.129 59.5 60.5 105.129 60.5 161.416v176.168c0 56.287 45.629 101.916 101.916 101.916Z"></path></svg>
            <h1 className="text-xl font-semibold pl-1.5">WalletLabels</h1>
          </div>
          <nav>
            <a href="/" className="text-white mx-3">Guide</a>
            <a href="/reference" className="text-white mx-3">Playground</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
