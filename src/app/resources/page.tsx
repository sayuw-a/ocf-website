import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-light font-sans">
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="retro-title text-4xl sm:text-5xl lg:text-6xl mb-4">Resources</h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-cozy-dark">
              Explore Orthodox Christian faith, find local parishes, and discover helpful links for your spiritual journey.
            </p>
          </div>

          {/* Learning Resources */}
          <div className="mb-16">
            <h2 className="retro-title text-2xl mb-6">Learn About Orthodoxy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Official OCF Website</h3>
                <a href="https://www.ocf.net/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">ocf.net</a>
                <p className="text-cozy-dark mt-2">National Orthodox Christian Fellowship resources, programs, and events.</p>
              </div>
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Phronema Initiative</h3>
                <a href="https://www.ancientfaith.com/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">https://www.thephronemainitiative.org/</a>
                <p className="text-cozy-dark mt-2">Free access to Orthodox Christian texts.</p>
              </div>
            </div>
          </div>

          {/* Local Parishes */}
          <div className="mb-16">
            <h2 className="retro-title text-2xl mb-6">Local Parishes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">St. Nicholas Orthodox Church</h3>
                <a href="https://stnicholascharlottesville.org/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">stnicholascharlottesville.org</a>
                <p className="text-cozy-dark mt-2">Our home parish in Charlottesville, VA.</p>
              </div>
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Holy Transfiguration Greek Orthodox Church</h3>
                <a href="https://stphilaret.com/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">https://www.transfiguration.va.goarch.org/</a>
                <p className="text-cozy-dark mt-2">Another Orthodox parish in the Charlottesville area.</p>
              </div>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="retro-title text-2xl mb-6">Helpful Links</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Learning the Tones</h3>
                <a href="https://orthodoxwiki.org/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">https://www.oca.org/liturgics/learning-the-tones</a>
                <p className="text-cozy-dark mt-2">An OCA guide to learning the tones. At St. Nicks, we use the Obikhod.</p>
              </div>
              <div className="retro-box">
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">NewRome Press</h3>
                <a href="https://www.goarch.org/" target="_blank" rel="noopener noreferrer" className="text-cozy-accent underline">https://newromepress.com/</a>
                <p className="text-cozy-dark mt-2">Browse their catalog. All their books are works of art.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 