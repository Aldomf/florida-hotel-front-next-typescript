import type { Metadata } from "next";
import { Inter, Jost, Open_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-jost",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florida Hotel",
  description: "Experience luxury and comfort at Florida Hotel, your perfect getaway destination with world-class amenities, exquisite dining, and exceptional service.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
