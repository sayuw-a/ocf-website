import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'OCF at UVA',
    template: '%s | OCF at UVA',
  },
  description: 'Orthodox Christian Fellowship at the University of Virginia',
  openGraph: {
    title: 'OCF at UVA',
    description: 'Orthodox Christian Fellowship at the University of Virginia',
    siteName: 'OCF at UVA',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="site-shell">
          <Navigation />
          <div className="site-main">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
