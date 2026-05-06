import Image from 'next/image';
import { site } from '@/content/site';

export default function PrayerResources() {
  return (
    <div className="content-shell max-w-3xl py-10 sm:py-16">
      <section className="page-intro mb-10">
        <h1 className="page-title text-center">{site.prayer.intro.title}</h1>
        <p className="page-copy mx-auto text-center">{site.prayer.intro.description}</p>
        <div className="my-6 flex justify-center">
          <Image src="/images/angeldivider.png" alt="" width={240} height={32} className="h-8 w-auto" />
        </div>
      </section>

      <div className="space-y-10">
        {site.prayer.sections.map((section) => (
          <section key={section.title} className="page-panel">
            <h2 className="section-heading mb-6 text-[1.6rem]">{section.title}</h2>
            <ul className="resource-list">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link font-semibold"
                  >
                    {item.label}
                  </a>
                  <p className="mt-1 text-[0.93rem] leading-[1.6] text-cozy-dark">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
