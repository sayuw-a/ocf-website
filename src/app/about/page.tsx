import Image from 'next/image';
import { site } from '@/content/site';

export default function About() {
  return (
    <div className="content-shell py-10 sm:py-16">

      <section className="page-intro mb-10">
        <h1 className="page-title">{site.about.intro.title}</h1>
        <p className="page-copy mx-auto text-center">
          {site.about.intro.description}
        </p>
      </section>

      {/* Full-width group banner */}
      <div className="relative mb-14 h-[260px] overflow-hidden rounded-[28px] border border-stone-200/60 shadow-[0_12px_32px_rgba(90,68,38,0.10)] sm:h-[360px] lg:h-[420px]">
        <Image
          src="/images/retreat-mountains.jpg"
          alt="OCF students gathered at a retreat in the Blue Ridge Mountains"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

      <section className="page-section page-duo">
        <div className="page-panel">
          <h2 className="section-heading mb-4 text-2xl">{site.about.mission.heading}</h2>
          <p className="page-copy text-base">
            {site.about.mission.quote}
          </p>
        </div>
        <div className="page-panel">
          <h2 className="section-heading mb-4 text-2xl">{site.about.history.heading}</h2>
          <p className="page-copy text-base">
            {site.about.history.text}
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-intro mb-8">
          <h2 className="section-heading">{site.about.officers.heading}</h2>
          <p className="page-copy">
            {site.about.officers.description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {site.about.officers.list.map((officer) => (
            <article key={officer.role} className="overflow-hidden rounded-[22px] border border-stone-200/60 bg-white/70 shadow-[0_8px_24px_rgba(90,68,38,0.07)]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={officer.photo}
                  alt={officer.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="p-6">
                <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-amber-700">{officer.role}</p>
                <h3 className="font-display mb-3 text-[1.4rem] font-semibold leading-tight text-cozy-dark">{officer.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-cozy-dark">{officer.bio}</p>
                <a href={`mailto:${officer.email}`} className="site-link text-sm">
                  {officer.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Photo row — life together, unique to this page */}
      <section className="page-section">
        <div className="mb-8">
          <p className="home-eyebrow">Life together</p>
          <h2 className="home-section-title">What OCF actually looks like</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/liturgy-standing.jpg"
              alt="OCF students standing in prayer during Divine Liturgy"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/community-2.png"
              alt="Students planting trees together during a service day"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/choir-chanting.jpg"
              alt="OCF students chanting together during a Liturgy"
              fill
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/community-6.png"
              alt="OCF students gathered around a table outdoors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
