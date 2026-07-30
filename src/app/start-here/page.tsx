import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

export default function StartHerePage() {
  return (
    <div className="content-shell start-here-shell py-10 sm:py-16">
      <section className="start-hero">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div>
            <p className="home-eyebrow">{site.startHere.hero.eyebrow}</p>
            <h1 className="home-title">{site.startHere.hero.title}</h1>
            <p className="home-lede">{site.startHere.hero.lede}</p>
            <div className="home-actions">
              <a href={`mailto:${site.contact.email}`} className="btn-primary">
                {site.startHere.hero.ctaEmail}
              </a>
              <a
                href={site.contact.groupMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {site.startHere.hero.ctaGroupMe}
              </a>
              <Link href="/events" className="home-inline-link">
                {site.startHere.hero.ctaInline}
              </Link>
            </div>
          </div>

          {/* Icon of Christ the Bridegroom */}
          <div className="mx-auto flex w-full max-w-[220px] justify-center lg:mx-0 lg:max-w-[420px] lg:justify-end">
            <Image
              src="/images/christ-bridegroom.jpg"
              alt="Icon of Christ the Bridegroom — 'Behold, the Bridegroom comes in the middle of the night'"
              width={300}
              height={375}
              sizes="(min-width: 1024px) 420px, 220px"
              className="h-auto w-full rounded-[16px] shadow-[0_12px_40px_rgba(90,68,38,0.18)]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="start-grid">
          {site.startHere.quickAnswers.map((item) => (
            <article key={item.question} className="start-card">
              <h2>{item.question}</h2>
              {'attribution' in item ? (
                <blockquote className="mt-3 border-l-2 border-amber-700/40 pl-4">
                  <p className="text-[1.02rem] leading-[1.75] text-stone-700 italic">{item.answer}</p>
                  <cite className="mt-3 block text-[0.82rem] font-medium not-italic uppercase tracking-[0.1em] text-stone-500">
                    {item.attribution}
                  </cite>
                </blockquote>
              ) : (
                <p>{item.answer}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="start-section">
          <div className="home-section-intro home-section-intro-left">
            <p className="home-eyebrow">{site.startHere.helpfulLinks.eyebrow}</p>
            <h2 className="home-section-title">{site.startHere.helpfulLinks.title}</h2>
          </div>
          <div className="start-link-grid">
            {site.startHere.helpfulLinks.links.map((item) => (
              <Link key={item.href} href={item.href} className="start-link-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="home-inline-link">{site.startHere.helpfulLinks.openPage}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
