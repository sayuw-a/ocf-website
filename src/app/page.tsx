import Image from 'next/image';
import Link from 'next/link';

const recentEvents = [
  {
    image: 'cookout-2025.jpg',
    title: '2025 Spring Cookout',
    description: 'Saying goodbye to our graduating fourth years Josh and Megnot.',
  },
  {
    image: 'liturgy-2025.jpg',
    title: 'Last Divine Liturgy of the Year',
    description: 'A joyful final liturgy of the semester with Fr. Robert at St. Nicholas.',
  },
  {
    image: 'pascha-2025.jpg',
    title: 'Pascha 2025',
    description: 'Christ is Risen. We are grateful to St. Nicholas for welcoming us in celebration.',
  },
];

const galleryImages = [
  { image: 'community-1.png', alt: 'OCF members gathered for fellowship outdoors' },
  { image: 'community-2.png', alt: 'Students spending time together after an OCF event' },
  { image: 'community-3.png', alt: 'OCF community photo during the semester' },
  { image: 'community-4.png', alt: 'Students gathered in conversation and community' },
  { image: 'community-5.png', alt: 'OCF members together at a campus event' },
  { image: 'community-6.png', alt: 'Students smiling together at an OCF gathering' },
  { image: 'community-7.png', alt: 'OCF community spending time together outside' },
  { image: 'community-8.png', alt: 'Students at an OCF event celebrating together' },
  { image: 'group-2023.jpg', alt: 'Group photo from a previous OCF year' },
  { image: 'cookout-2025.jpg', alt: 'Students at the 2025 spring cookout' },
  { image: 'liturgy-2025.jpg', alt: 'OCF students at divine liturgy in 2025' },
  { image: 'pascha-2025.jpg', alt: 'Pascha celebration with the OCF community in 2025' },
  { image: 'volleyball.jpg', alt: 'OCF members playing volleyball together' },
  { image: 'jmu-hangout.jpg', alt: 'Students gathering for a regional hangout' },
  { image: 'pascha.jpg', alt: 'A past Pascha celebration with the OCF community' },
];

export default function Home() {
  return (
    <div className="content-shell">
      <section className="page-section">
        <div className="retro-box mx-auto max-w-3xl text-center">
          <Image
            src="/images/logo.png"
            alt="Orthodox Christian Fellowship at UVA logo"
            width={88}
            height={88}
            className="mx-auto mb-4"
            priority
          />
          <h1 className="page-title">Welcome to OCF at UVA</h1>
          <p className="page-copy mx-auto max-w-2xl">
            We are a community of students at the University of Virginia seeking to live the timeless
            Christian faith of the Orthodox Church through prayer, fellowship, worship, and service.
            Everyone is welcome, whether you grew up Orthodox or are simply curious to learn more.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
            <Link href="/events" className="btn-secondary">
              See Events
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="retro-box">
          <div className="page-intro mb-8">
            <h2 className="section-heading">Recent Events</h2>
            <p className="page-copy">
              Prayer, fellowship, and life together shape our semester. Here are a few recent moments
              from the community.
            </p>
          </div>

          <div className="card-grid">
            {recentEvents.map((event) => (
              <article key={event.image} className="card-panel">
                <div className="relative mb-4 h-56 overflow-hidden rounded-2xl">
                  <Image
                    src={`/images/${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
                <h3 className="font-retro mb-2 text-2xl text-cozy-dark">{event.title}</h3>
                <p className="text-sm leading-6 text-cozy-dark">{event.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="retro-box">
          <details className="group">
            <summary className="list-none cursor-pointer">
              <div className="page-intro mb-0">
                <h2 className="section-heading">Our Community Gallery</h2>
                <p className="page-copy">
                  Open the gallery for more snapshots from worship, study, service, and time together.
                </p>
                <span className="btn-secondary mt-6">
                  <span className="group-open:hidden">Show More Photos</span>
                  <span className="hidden group-open:inline">Show Fewer Photos</span>
                </span>
              </div>
            </summary>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryImages.map((item, index) => (
                <div
                  key={item.image}
                  className={`relative aspect-square overflow-hidden rounded-2xl border-2 border-blue-200 bg-white shadow ${
                    index >= 8 ? 'hidden group-open:block' : ''
                  }`}
                >
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-200 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="page-section">
        <div className="retro-box mx-auto max-w-3xl text-center">
          <h2 className="section-heading">Contact Information</h2>
          <p className="page-copy mx-auto max-w-xl">
            We would love to meet you. Reach out by email or join our GroupMe to hear about upcoming
            events and gatherings.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:ann4mb@virginia.edu" className="btn-primary">
              Email Us
            </a>
            <a
              href="https://groupme.com/join_group/52539301/WUDGNm6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Join Our GroupMe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
