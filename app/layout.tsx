import Navigation from '@/components/navigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LexdenMarine - Dry bulk commodity purchasing and trading',
  description: 'Comprehensive procurement and trading of dry bulk commodities',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}