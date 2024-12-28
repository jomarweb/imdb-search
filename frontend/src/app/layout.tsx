import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IMDb Search",
  description: "Search for movies on IMDb",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans min-h-screen">
        <header className="bg-black text-white">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-yellow-500 font-bold text-lg"><Link href="/">IMDb</Link></div>
              {/* ...existing code... */}
            </div>
           
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
