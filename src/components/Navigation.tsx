'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
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
          </div>
        </div>
      ) : null}
    </nav>
  );
}
