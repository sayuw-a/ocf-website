import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function PrayerResources() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-light font-sans">
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto py-12 px-4">
          <div className="retro-box">
            <h1 className="retro-title text-4xl text-purple-900 mb-4">Prayer Resources</h1>
            <p className="mb-1 text-lg">Find Orthodox Christian prayer books, guides, and resources to enrich your daily spiritual life.</p>
            <div className="flex justify-center my-4">
              <img src="/images/angeldivider.png" alt="Angel Divider" className="h-8" />
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="/pdfs/theotokosakathist.pdf" className="text-purple-900 underline font-bold hover:text-purple-700" target="_blank">Akathist to the Theotokos</Link> - A prayer to the Theotokos
              </li>
              <li>
                <Link href="/pdfs/9thHour.pdf" className="text-purple-900 underline font-bold hover:text-purple-700" target="_blank">Ninth Hour</Link> - Ninth Hour Prayer
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 