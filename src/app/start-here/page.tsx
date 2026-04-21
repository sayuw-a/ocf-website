import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

export default function StartHerePage() {
  return (
    <div className="content-shell start-here-shell py-10 sm:py-16">
      <section className="start-hero">
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

      {/* Newcomer steps — steps list beside a photo on wider screens */}
      <section className="page-section">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-14">
          <div>
            <div className="home-section-intro home-section-intro-left mb-8">
              <p className="home-eyebrow">{site.startHere.newcomerSteps.eyebrow}</p>
              <h2 className="home-section-title">{site.startHere.newcomerSteps.title}</h2>
            </div>
            <ol className="start-step-list">
              {site.startHere.newcomerSteps.steps.map((step) => (
                <li key={step.title} className="start-step-item">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Photo — hidden on small screens, visible at lg */}
          <div className="relative hidden aspect-[3/4] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_10px_28px_rgba(90,68,38,0.09)] lg:block">
            <Image
              src="/images/community-4.png"
              alt="OCF students relaxing together outdoors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="start-two-column">
          <article className="start-panel">
            <p className="home-eyebrow">{site.startHere.whereThingsHappen.eyebrow}</p>
            <h2 className="home-section-title">{site.startHere.whereThingsHappen.title}</h2>
            <p className="page-copy">
              {site.startHere.whereThingsHappen.description1}
            </p>
            <p className="page-copy mt-4">
              {site.startHere.whereThingsHappen.description2}
            </p>
            <Link href="/events" className="home-inline-link">
              {site.startHere.whereThingsHappen.ctaInline}
            </Link>
          </article>

          <article className="start-panel">
            <p className="home-eyebrow">{site.startHere.plainLanguage.eyebrow}</p>
            <h2 className="home-section-title">{site.startHere.plainLanguage.title}</h2>
            <p className="page-copy">
              {site.startHere.plainLanguage.description1}
            </p>
            <p className="page-copy mt-4">
              {site.startHere.plainLanguage.description2}
            </p>
            <Link href="/resources/catechism" className="home-inline-link">
              {site.startHere.plainLanguage.ctaInline}
            </Link>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="start-faq">
          <div className="home-section-intro">
            <p className="home-eyebrow">{site.startHere.faq.eyebrow}</p>
            <h2 className="home-section-title">{site.startHere.faq.title}</h2>
          </div>
          <div className="start-faq-list">
            {site.startHere.faq.items.map((item) => (
              <details key={item.question} className="start-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
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

      <section className="page-section">
        <div className="home-contact">
          <div>
            <p className="home-eyebrow">{site.startHere.cta.eyebrow}</p>
            <h2 className="home-section-title">{site.startHere.cta.title}</h2>
            <p className="page-copy">{site.startHere.cta.description}</p>
          </div>
          <div className="home-contact-actions">
            <a href={`mailto:${site.contact.email}`} className="btn-primary">
              {site.startHere.cta.ctaEmail}
            </a>
            <a
              href={site.contact.groupMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {site.startHere.cta.ctaGroupMe}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
