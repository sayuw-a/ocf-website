import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-cozy-dark shadow-md font-retro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white tracking-wider">
                OCF at UVA
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
                About
              </Link>
              <Link href="/events" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
                Events
              </Link>
              <Link href="/resources" className="inline-flex items-center px-3 pt-1 text-base font-retro text-white hover:text-cozy-accent transition-colors">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 