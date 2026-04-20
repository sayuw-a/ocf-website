import Link from 'next/link';
import { site } from '@/content/site';

export default function Footer() {
  return (
    <footer className="border-t border-amber-200/30 bg-[#152f52] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-display text-[1.35rem] font-semibold">{site.footer.orgName}</h3>
            <p className="text-[0.98rem] leading-7 text-stone-200">
              {site.footer.disclaimer}
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-display text-[1.2rem] font-semibold">{site.footer.quickLinksHeading}</h3>
            <ul className="space-y-2 text-[0.98rem]">
              {site.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-200 hover:text-amber-50">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-[1.2rem] font-semibold">{site.footer.contactHeading}</h3>
            <ul className="space-y-2 text-[0.98rem] text-stone-200">
              <li>
                {site.footer.contactEmailLabel}{' '}
                <a className="underline underline-offset-4 hover:text-amber-50" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </li>
              <li>{site.footer.locationLine1}</li>
              <li>{site.footer.locationLine2}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-[0.96rem] text-stone-300">
          <p>&copy; {new Date().getFullYear()}{site.footer.copyrightSuffix}</p>
        </div>
      </div>
    </footer>
  );
}
