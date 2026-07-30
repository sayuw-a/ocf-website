import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import HomeGallery from '@/components/HomeGallery';

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
        <HomeGallery
          eyebrow={site.home.lifeTogether.eyebrow}
          title={site.home.lifeTogether.title}
          photos={site.home.lifeTogether.photos}
        />
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
