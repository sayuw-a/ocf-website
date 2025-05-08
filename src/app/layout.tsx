import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, VT323 } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });
const vt323 = VT323({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OCF at UVA',
  description: 'Orthodox Christian Fellowship at the University of Virginia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} ${vt323.className}`}>{children}</body>
    </html>
  );
} 