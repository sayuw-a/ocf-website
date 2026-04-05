'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
];

const resourceLinks = [
  { href: '/resources', label: 'All Resources' },
  { href: '/resources/catechism', label: 'Catechism' },
  { href: '/resources/prayer', label: 'Prayer' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  const linkClass = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      isActive(href)
        ? 'bg-white/15 text-white'
        : 'text-white/85 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-blue-300 bg-purple-950/95 text-white shadow-md backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-retro text-3xl font-bold tracking-wider text-white">
          OCF at UVA
        </Link>

        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white sm:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className={`${linkClass('/resources')} inline-flex items-center gap-1`}
              aria-expanded={resourcesOpen}
              aria-controls="desktop-resources-menu"
              onClick={() => setResourcesOpen((open) => !open)}
            >
              Resources
              <svg
                className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>
            {resourcesOpen ? (
              <div
                id="desktop-resources-menu"
                className="absolute right-0 top-[calc(100%+0.5rem)] w-60 rounded-2xl border border-indigo-100 bg-white p-2 text-sm text-slate-900 shadow-2xl"
              >
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 font-medium hover:bg-indigo-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div id="mobile-site-nav" className="border-t border-white/10 bg-purple-950/95 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-2">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <details className="rounded-3xl bg-white/5 px-2 py-2">
              <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-sm font-semibold text-white">
                Resources
              </summary>
              <div className="mt-2 flex flex-col gap-2 px-2 pb-2">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
