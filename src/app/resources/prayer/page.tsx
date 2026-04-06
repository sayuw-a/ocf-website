import Image from 'next/image';

const prayers = [
  {
    title: 'Akathist to the Theotokos',
    href: '/pdfs/theotokosakathist.pdf',
    description: 'A prayer service in honor of the Theotokos.',
  },
  {
    title: 'Ninth Hour',
    href: '/pdfs/9thHour.pdf',
    description: 'The Ninth Hour prayer service.',
  },
];

export default function PrayerResources() {
  return (
    <div className="content-shell max-w-3xl py-10 sm:py-16">
      <section className="page-panel">
        <h1 className="page-title text-center">Prayer Resources</h1>
        <p className="page-copy text-center">
          Find Orthodox Christian prayer books, guides, and resources to enrich your daily spiritual
          life.
        </p>
        <div className="my-6 flex justify-center">
          <Image src="/images/angeldivider.png" alt="" width={240} height={32} className="h-8 w-auto" />
        </div>
        <ul className="resource-list">
          {prayers.map((prayer) => (
            <li key={prayer.title}>
              <a
                href={prayer.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link font-semibold"
              >
                {prayer.title}
              </a>
              <p className="mt-1 text-sm text-cozy-dark">{prayer.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
