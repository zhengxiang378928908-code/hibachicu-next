import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hibachi CU - Mobile Hibachi Catering & Private Hibachi Chef at Home",
  description: "Mobile Hibachi Catering & Private Hibachi Chef at Home. Private Chef · Live Fire Show · Perfect for Parties, Backyards & Vacation Rentals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Mulish:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
