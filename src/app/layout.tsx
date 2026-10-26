import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';

const display = localFont({ src: './fonts/gasoek-one.ttf', variable: '--font-display', display: 'swap' });
const body = localFont({ src: './fonts/plus-jakarta-sans.ttf', variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'The Roam Report — A little further',
  description: 'An interactive road trip. Long walks, wrong turns, and everyday discoveries.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
