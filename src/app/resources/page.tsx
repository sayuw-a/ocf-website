import Link from 'next/link';
import { site } from '@/content/site';

export default function Resources() {
  return (
    <div className="content-shell max-w-5xl py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">{site.resources.intro.title}</h1>
        <p className="page-copy">
          {site.resources.intro.description}
        </p>
      </section>

      <section className="page-section">
        <div className="page-chip-row">
          <Link href="/resources/catechism" className="btn-secondary">
            {site.resources.chips.catechism}
          </Link>
          <Link href="/resources/prayer" className="btn-secondary">
            {site.resources.chips.prayer}
          </Link>
        </div>

        {site.resources.sections.map((section) => (
          <div key={section.title} className="mb-12 last:mb-0">
            <h2 className="section-heading mb-6 text-2xl">{section.title}</h2>
            <div className="page-grid-wide">
              {section.items.map((item) => (
                <article key={item.title} className="page-panel">
                  <h3 className="font-display mb-2 text-[1.7rem] font-semibold leading-tight text-cozy-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-cozy-dark">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link"
                  >
                    {item.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
