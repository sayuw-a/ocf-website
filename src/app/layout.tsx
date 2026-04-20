import type { Metadata } from 'next';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { site } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: site.meta.defaultTitle,
    template: site.meta.titleTemplate,
  },
  description: site.meta.description,
  openGraph: {
    title: site.meta.siteName,
    description: site.meta.description,
    siteName: site.meta.siteName,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@400;500;700&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&display=swap"
        />
      </head>
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
