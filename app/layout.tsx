import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Tech - Explore the Frontiers of Artificial Intelligence",
  description: "Your Journey to Tomorrow Begins Here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}

