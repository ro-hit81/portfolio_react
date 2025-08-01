import type { Metadata } from "next";
import "./globals.css";
import SatelliteBackground from "./components/SatelliteBackground";

export const metadata: Metadata = {
  title: "Rohit Khati | EO & AI Expert",
  description: "Portfolio of Rohit Khati - Expert in Earth Observation and Artificial Intelligence",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <SatelliteBackground />
        {children}
      </body>
    </html>
  );
}
