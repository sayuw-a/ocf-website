'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/content/site';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  // Close on click outside
  useEffect(() => {
    if (!resourcesOpen) return;
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [resourcesOpen]);

  // Close on Escape
  useEffect(() => {
    if (!resourcesOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setResourcesOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [resourcesOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname?.startsWith(href));

  const linkClass = (href: string) =>
    `rounded-full px-4 py-2 text-[0.98rem] font-medium tracking-[0.01em] transition-colors ${
      isActive(href)
        ? 'bg-amber-50/12 text-amber-50'
        : 'text-stone-200 hover:bg-white/7 hover:text-amber-50'
    }`;

  const dropdownLinkClass = (href: string) =>
    `block rounded-xl px-4 py-3 text-[0.98rem] font-medium transition-colors ${
      isActive(href)
        ? 'bg-amber-100 text-amber-900'
        : 'text-stone-800 hover:bg-amber-50 hover:text-stone-900'
    }`;

  const onResourcesSubpage = site.nav.resourceLinks.some((l) => isActive(l.href));

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
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`${linkClass('/resources')} inline-flex items-center gap-1`}
              aria-expanded={resourcesOpen}
              aria-controls="desktop-resources-menu"
              onClick={() => setResourcesOpen((open) => !open)}
            >
              {site.nav.resourcesDropdown}
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.25 7.5L10 12.25L14.75 7.5H5.25Z" />
              </svg>
            </button>
            <div
              id="desktop-resources-menu"
              role="menu"
              className={`absolute right-0 top-[calc(100%+0.5rem)] w-56 origin-top-right rounded-2xl border border-stone-200 bg-stone-50 p-2 shadow-[0_14px_28px_rgba(32,24,14,0.12)] transition-all duration-150 ${
                resourcesOpen
                  ? 'pointer-events-auto scale-100 opacity-100'
                  : 'pointer-events-none scale-95 opacity-0'
              }`}
            >
              {site.nav.resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  className={dropdownLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
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
            <details className="rounded-3xl bg-white/5 px-2 py-2" open={onResourcesSubpage}>
              <summary className="cursor-pointer list-none rounded-full px-4 py-2 text-[0.98rem] font-medium tracking-[0.01em] text-stone-50">
                {site.nav.resourcesDropdown}
              </summary>
              <div className="mt-2 flex flex-col gap-1 px-2 pb-2">
                {site.nav.resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-2xl px-4 py-2 text-[0.98rem] font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-white/15 text-amber-50'
                        : 'text-stone-200 hover:bg-white/10 hover:text-amber-50'
                    }`}
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
