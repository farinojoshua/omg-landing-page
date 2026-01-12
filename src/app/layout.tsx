import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Oh My Grill - All You Can Eat BBQ Restaurant",
  description: "Oh My Grill - Restoran All You Can Eat BBQ terbaik dengan 7 outlet di Jakarta, Bekasi, Depok & Bogor. Nikmati unlimited grilled meat mulai dari Rp 99.000!",
  keywords: "all you can eat, AYCE, BBQ, grill, restoran, Jakarta, Bekasi, Depok, Bogor, unlimited meat",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
