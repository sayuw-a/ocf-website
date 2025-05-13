import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

export default function CatechismResources() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-light font-sans">
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto py-12 px-4">
          <div className="retro-box">
            <h1 className="retro-title text-4xl text-purple-900 mb-4">Catechism Resources</h1>
            <p className="text-cozy-dark font-sans text-base mt-2">Explore foundational texts and guides to Orthodox Christian catechism, perfect for inquirers and those deepening their faith.</p>
            <div className="flex justify-center my-6">
              <img src="/images/angeldivider.png" alt="Angel Divider" className="h-8" />
            </div>
            <ul className="space-y-5 mt-6">
  <li>
    <Link href="/pdfs/How-Can-I-Know-God.pdf" target="_blank" className="text-purple-900 underline font-bold hover:text-purple-700">
      How Can I Know God?; Fr. Thomas Hopko
    </Link>
    <span className="text-gray-900 font-sans text-sm"> – What does it take to know God?</span>
  </li>
  <li>
    <Link href="https://a.co/d/hhMSyzH" target="_blank" className="text-purple-900 underline font-bold hover:text-purple-700">
      The Orthodox Church; Fr. Kallistos Ware
    </Link>
    <span className="text-gray-900 font-sans text-sm"> – A primer on the Orthodox Church that has been beneficial to many converts</span>
  </li>
  <li>
    <Link href="https://a.co/d/cR29ViY" target="_blank" className="text-purple-900 underline font-bold hover:text-purple-700">
      The Faith We Hold; Archbishop Paul of Finland
    </Link>
    <span className="text-gray-900 font-sans text-sm"> – A short synoptic book</span>
  </li>
  <li>
    <Link href="https://www.oca.org/orthodoxy/the-orthodox-faith" target="_blank" className="text-purple-900 underline font-bold hover:text-purple-700">
      The Orthodox Faith; Fr. Kallistos Ware
    </Link>
    <span className="text-gray-900 font-sans text-sm"> – A deeper dive on the sacraments of the Church</span>
  </li>
</ul>
          </div>
        </div>

      </main>
      <div className="relative">
        <Footer />
        <div className="absolute left-0 right-0 -top-10 z-10 h-20 w-full" style={{backgroundImage: 'url(/images/flowers2.png)', backgroundRepeat: 'repeat-x', backgroundPosition: 'top center', backgroundSize: 'auto 100%'}} />
      </div>
    </div>
  );
} 