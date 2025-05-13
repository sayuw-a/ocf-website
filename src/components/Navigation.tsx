import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-cozy-dark shadow-md font-retro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white tracking-wider mr-10">
            OCF at UVA
          </Link>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
              About
            </Link>
            <Link href="/events" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
              Events
            </Link>
            {/* Dropdown for Resources */}
            <div className="relative group">
              <div className="flex flex-col">
                <Link href="/resources" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors cursor-pointer">
                  Resources
                  <svg className="ml-1 w-4 h-4 fill-current text-white group-hover:text-cozy-accent transition-colors" viewBox="0 0 20 20">
                    <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
                  </svg>
                </Link>
                <div className="absolute left-0 top-full w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  <div className="py-1">
                    <Link href="/resources/catechism" className="block px-4 py-2 text-cozy-dark hover:bg-cozy-blue hover:text-cozy-dark transition-colors">Catechism Resources</Link>
                    <Link href="/resources/prayer" className="block px-4 py-2 text-cozy-dark hover:bg-cozy-blue hover:text-cozy-dark transition-colors">Prayer Resources</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* End Dropdown */}
          </div>
        </div>
      </div>
    </nav>
  );
} 