import Image from 'next/image';

const recurringEvents = [
  {
    image: '/images/events/weekly-meeting.jpg',
    alt: 'Students gathered for weekly Bible study and fellowship',
    title: 'Bible Study & Fellowship',
    time: 'Every Thursday at 8:00 PM',
    description: 'Join us for discussion, prayer, and fellowship. All are welcome.',
  },
  {
    image: '/images/events/divine-liturgy.jpg',
    alt: 'Students and parishioners at divine liturgy',
    title: 'Great Vespers & Divine Liturgy',
    time: 'Vespers: Saturdays at 5:00 PM\nLiturgy: Sundays at 9:30 AM',
    description: 'Join us for worship at St. Nicholas Orthodox Church.',
  },
];

export default function Events() {
  return (
    <div className="content-shell max-w-5xl py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">Events</h1>
        <p className="page-copy">
          Join us for worship, fellowship, study, and special events throughout the year.
        </p>
      </section>

      <section className="page-section">
        <div className="page-intro mb-8">
          <h2 className="section-heading">Recurring Events</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {recurringEvents.map((event) => (
            <article key={event.title} className="retro-box">
              <Image
                src={event.image}
                alt={event.alt}
                width={800}
                height={500}
                className="mb-5 h-64 w-full rounded-2xl object-cover"
              />
              <h3 className="font-retro mb-2 text-2xl text-cozy-dark">{event.title}</h3>
              <p className="mb-2 whitespace-pre-line font-semibold text-cozy-dark">{event.time}</p>
              <p className="page-copy text-base">{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="retro-box text-center">
          <h2 className="section-heading mb-4">Special & Upcoming Events</h2>
          <p className="page-copy mx-auto mb-8 max-w-2xl">
            Keep an eye on the calendar for feast days, service opportunities, meals, and trips
            throughout the semester.
          </p>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=fc12eba4c5f22cf289e5751d898b3d1caf248f74a1a351eaae11f1b6bc4f579d%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ border: 0 }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="OCF Events Calendar"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="mx-auto w-full max-w-full rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}
