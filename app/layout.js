import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Zia Diamonds | Fine Diamond Jewelry",
  description: "Luxury, premium diamond jewelry. Crafted to perfection.",
  metadataBase: new URL("https://agentic-c974e6fc.vercel.app"),
  openGraph: {
    title: "Zia Diamonds",
    description: "Luxury, premium diamond jewelry.",
    url: "https://agentic-c974e6fc.vercel.app",
    siteName: "Zia Diamonds",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[--color-onyx] antialiased selection:bg-[--color-gold]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
