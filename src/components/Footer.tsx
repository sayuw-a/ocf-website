import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-4 border-amber-200 bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Orthodox Christian Fellowship</h3>
            <p className="text-sm leading-6 text-stone-200">
              Although this organization has members who are University of Virginia
              students and may have University employees associated or engaged in
              its activities and affairs, the organization is not a part of or an
              agency of the University. It is a separate and independent
              organization, which is responsible for and manages its own
              activities and affairs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-stone-200 hover:text-amber-50">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-stone-200 hover:text-amber-50">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-stone-200 hover:text-amber-50">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-stone-200">
              <li>
                Email:{' '}
                <a className="underline underline-offset-4 hover:text-amber-50" href="mailto:ann4mb@virginia.edu">
                  ann4mb@virginia.edu
                </a>
              </li>
              <li>University of Virginia</li>
              <li>Charlottesville, VA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-stone-300">
          <p>&copy; {new Date().getFullYear()} Orthodox Christian Fellowship at UVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
