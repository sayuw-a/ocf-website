import Image from 'next/image';
import { site } from '@/content/site';

export default function Events() {
  return (
    <div className="content-shell max-w-5xl py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">{site.events.intro.title}</h1>
        <p className="page-copy">
          {site.events.intro.description}
        </p>
      </section>

      <section className="page-section">
        <div className="page-intro mb-8">
          <h2 className="section-heading">{site.events.recurring.heading}</h2>
        </div>
        <div className="page-grid-wide">
          {site.events.recurring.list.map((event) => (
            <article key={event.title} className="page-panel">
              <Image
                src={event.image}
                alt={event.alt}
                width={800}
                height={500}
                className="mb-5 h-64 w-full rounded-2xl object-cover"
              />
              <h3 className="font-display mb-2 text-[1.7rem] font-semibold leading-tight text-cozy-dark">
                {event.title}
              </h3>
              <p className="mb-2 whitespace-pre-line font-semibold text-cozy-dark">{event.time}</p>
              <p className="page-copy text-base">{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-panel text-center">
          <h2 className="section-heading mb-4">{site.events.special.heading}</h2>
          <p className="page-copy mx-auto mb-8 max-w-2xl">
            {site.events.special.description}
          </p>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=fc12eba4c5f22cf289e5751d898b3d1caf248f74a1a351eaae11f1b6bc4f579d%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title={site.events.special.calendarTitle}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mx-auto w-full max-w-full rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}
