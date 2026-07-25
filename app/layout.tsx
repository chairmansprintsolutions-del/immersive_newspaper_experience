import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive Newspaper",
  description: "Interactive 3D Newspaper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
