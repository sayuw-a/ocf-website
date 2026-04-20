'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';

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
    `rounded-full px-4 py-2 text-[0.98rem] font-medium tracking-[0.01em] transition-colors ${
      isActive(href)
        ? 'bg-amber-50/12 text-amber-50'
        : 'text-stone-200 hover:bg-white/7 hover:text-amber-50'
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-amber-200/35 bg-[#183b67] text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-[2rem] font-semibold tracking-[0.005em] text-stone-50">
          {site.nav.logo}
        </Link>

        <button
          type="button"
          className="rounded-full border border-amber-50/20 px-4 py-2 text-[0.98rem] font-medium tracking-[0.01em] text-stone-50 sm:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {site.nav.menuButton}
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          {site.nav.primaryLinks.map((link) => (
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
              {site.nav.resourcesDropdown}
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
                className="absolute right-0 top-[calc(100%+0.5rem)] w-60 rounded-2xl border border-stone-200 bg-stone-50 p-2 text-sm text-stone-900 shadow-[0_14px_28px_rgba(32,24,14,0.12)]"
              >
                {site.nav.resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-[0.98rem] font-medium hover:bg-amber-50"
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
        <div id="mobile-site-nav" className="border-t border-white/10 bg-[#183b67] px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-2">
            {site.nav.primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <details className="rounded-3xl bg-white/5 px-2 py-2">
              <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-[0.98rem] font-medium tracking-[0.01em] text-stone-50">
                {site.nav.resourcesDropdown}
              </summary>
              <div className="mt-2 flex flex-col gap-2 px-2 pb-2">
                {site.nav.resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-2 text-[0.98rem] text-stone-200 hover:bg-white/10 hover:text-amber-50"
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
