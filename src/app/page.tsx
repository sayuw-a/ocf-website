import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';

export default function Home() {
  return (
    <div className="content-shell home-shell">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">{site.home.hero.eyebrow}</p>
          <h1 className="home-title">{site.home.hero.title}</h1>
          <p className="home-lede">{site.home.hero.lede}</p>

          <div className="home-actions">
            <Link href="/start-here" className="btn-primary">
              {site.home.hero.ctaPrimary}
            </Link>
            <Link href="/events" className="btn-secondary">
              {site.home.hero.ctaSecondary}
            </Link>
            <a href={`mailto:${site.contact.email}`} className="home-inline-link">
              {site.home.hero.ctaEmail}
            </a>
          </div>

          <div className="home-answer-row" aria-label={site.home.hero.qaAriaLabel}>
            {site.home.quickAnswers.map((item) => (
              <div key={item.question} className="home-answer-item">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero-visual" aria-label={site.home.hero.visualAriaLabel}>
          <div className="home-hero-photo home-hero-photo-large">
            <Image
              src="/images/group-2023.jpg"
              alt={site.home.hero.photoLargeAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="home-hero-photo home-hero-photo-small">
            <Image
              src="/images/cookout-2025.jpg"
              alt={site.home.hero.photoSmallAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="home-hero-note">
            <p className="home-card-kicker">{site.home.hero.cardKicker}</p>
            <p>{site.home.hero.cardDescription}</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-proof-shell">
          <div className="home-section-intro home-section-intro-left">
            <p className="home-eyebrow">{site.home.whatWeDo.eyebrow}</p>
            <h2 className="home-section-title">{site.home.whatWeDo.title}</h2>
            <p className="page-copy">{site.home.whatWeDo.description}</p>
          </div>

          <div className="home-proof-grid">
            {site.home.galleryMoments.map((item) => (
              <article key={item.image} className="home-proof-card">
                <div className="home-proof-photo">
                  <Image src={`/images/${item.image}`} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="home-proof-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-guidance">
          <div className="home-guidance-intro">
            <p className="home-eyebrow">{site.home.firstStep.eyebrow}</p>
            <h2 className="home-section-title">{site.home.firstStep.title}</h2>
            <p className="page-copy">{site.home.firstStep.description}</p>
          </div>

          <ol className="home-step-list">
            {site.home.firstVisitSteps.map((item, index) => (
              <li key={item.label} className="home-step-row">
                <div className="home-step-badge">{index + 1}</div>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="home-invite-band">
          <div>
            <p className="home-eyebrow">{site.home.newHere.eyebrow}</p>
            <h2 className="home-section-title">{site.home.newHere.title}</h2>
            <p className="page-copy">{site.home.newHere.description}</p>
          </div>
          <div className="home-band-actions">
            <Link href="/start-here" className="btn-primary">
              {site.home.newHere.ctaPrimary}
            </Link>
            <Link href="/about" className="home-inline-link">
              {site.home.newHere.ctaInline}
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-story-layout">
          <div className="home-story-copy">
            <p className="home-eyebrow">{site.home.whatItFeelsLike.eyebrow}</p>
            <h2 className="home-section-title">{site.home.whatItFeelsLike.title}</h2>
            <p className="page-copy">{site.home.whatItFeelsLike.description}</p>

            <div className="home-moment-list">
              {site.home.visitMoments.map((item) => (
                <article key={item.title} className="home-moment-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home-story-photos">
            <div className="home-story-photo-tall">
              <Image
                src="/images/liturgy-2025.jpg"
                alt={site.home.storyPhotos.tallAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="home-story-photo-wide">
              <Image
                src="/images/pascha-2025.jpg"
                alt={site.home.storyPhotos.wideAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-contact">
          <div>
            <p className="home-eyebrow">{site.home.readyToCome.eyebrow}</p>
            <h2 className="home-section-title">{site.home.readyToCome.title}</h2>
            <p className="page-copy">{site.home.readyToCome.description}</p>
          </div>
          <div className="home-contact-actions">
            <a href={`mailto:${site.contact.email}`} className="btn-primary">
              {site.home.readyToCome.ctaEmail}
            </a>
            <a
              href={site.contact.groupMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {site.home.readyToCome.ctaGroupMe}
            </a>
            <Link href="/about" className="home-inline-link">
              {site.home.readyToCome.ctaInline}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
