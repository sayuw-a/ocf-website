import { site } from '@/content/site';

export default function CatechismResources() {
  return (
    <div className="content-shell max-w-5xl py-10 sm:py-16">
      <section className="page-intro mb-12">
        <h1 className="page-title text-center">{site.catechism.intro.title}</h1>
        <p className="page-copy mx-auto text-center">{site.catechism.intro.description}</p>
      </section>

      <div className="space-y-10">
        {site.catechism.sections.map((section) => (
          <section key={section.title} className="page-panel">
            <h2 className="section-heading mb-6 text-[1.6rem]">{section.title}</h2>
            <div className="space-y-8">
              {section.subsections.map((sub, subIdx) => (
                <div key={subIdx}>
                  {sub.title ? (
                    <h3 className="mb-3 text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-stone-500">
                      {sub.title}
                    </h3>
                  ) : null}
                  <ul className="space-y-2">
                    {sub.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex flex-wrap items-baseline gap-x-2 text-[0.98rem] leading-relaxed">
                        {'author' in item && (
                          <span className="font-medium text-stone-800">{item.author}:</span>
                        )}
                        {item.links.map((link, linkIdx) => (
                          <span key={link.href} className="inline-flex items-baseline gap-x-2">
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="site-link"
                            >
                              {link.label}
                            </a>
                            {linkIdx < item.links.length - 1 && (
                              <span className="text-stone-400" aria-hidden="true">|</span>
                            )}
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
