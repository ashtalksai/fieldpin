import type { Metadata } from "next";
import { Libre_Baskerville, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fieldpin — Offline Field Reporting for Park Rangers",
  description:
    "Fieldpin works offline, exactly where rangers work. Drop a pin, log the sighting, take the photo — it all syncs the moment signal returns.",
  metadataBase: new URL("https://fieldpin.ashketing.com"),
  openGraph: {
    title: "Fieldpin — Offline Field Reporting for Park Rangers",
    description: "Field data that doesn't wait for Wi-Fi. Drop a pin, fill a ranger-specific form, walk away. It syncs when you're back in range.",
    url: "https://fieldpin.ashketing.com",
    siteName: "Fieldpin",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fieldpin — Offline Field Reporting for Park Rangers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldpin — Offline Field Reporting for Park Rangers",
    description: "Field data that doesn't wait for Wi-Fi.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
