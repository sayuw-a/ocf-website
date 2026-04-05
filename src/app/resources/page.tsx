import Link from 'next/link';

const resourceSections = [
  {
    title: 'Learn About Orthodoxy',
    items: [
      {
        title: 'Official OCF Website',
        href: 'https://www.ocf.net/',
        label: 'Visit site',
        description: 'National Orthodox Christian Fellowship resources, programs, and events.',
      },
      {
        title: 'Phronema Initiative',
        href: 'https://www.thephronemainitiative.org/',
        label: 'Visit site',
        description: 'Free access to Orthodox Christian texts and formation resources.',
      },
    ],
  },
  {
    title: 'Local Parishes',
    items: [
      {
        title: 'St. Nicholas Orthodox Church',
        href: 'https://stnicholascharlottesville.org/',
        label: 'Visit site',
        description: 'Our home parish in Charlottesville, Virginia.',
      },
      {
        title: 'Holy Transfiguration Greek Orthodox Church',
        href: 'https://www.transfiguration.va.goarch.org/',
        label: 'Visit site',
        description: 'Another Orthodox parish in the Charlottesville area.',
      },
    ],
  },
  {
    title: 'Helpful Links',
    items: [
      {
        title: 'Learning the Tones',
        href: 'https://www.oca.org/liturgics/learning-the-tones',
        label: 'Visit guide',
        description: 'An OCA guide to learning the tones. At St. Nicks, we use the Obikhod.',
      },
      {
        title: 'Newrome Press',
        href: 'https://newromepress.com/',
        label: 'Browse books',
        description: 'Browse their catalog of Orthodox books and devotional resources.',
      },
    ],
  },
];

export default function Resources() {
  return (
    <div className="content-shell max-w-5xl py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">Resources</h1>
        <p className="page-copy">
          Explore Orthodox Christian faith, find local parishes, and discover helpful links for your
          spiritual journey.
        </p>
      </section>

      <section className="page-section">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Link href="/resources/catechism" className="btn-secondary">
            Catechism Resources
          </Link>
          <Link href="/resources/prayer" className="btn-secondary">
            Prayer Resources
          </Link>
        </div>

        {resourceSections.map((section) => (
          <div key={section.title} className="mb-12 last:mb-0">
            <h2 className="section-heading mb-6 text-2xl">{section.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.items.map((item) => (
                <article key={item.title} className="retro-box">
                  <h3 className="font-display mb-2 text-[1.7rem] font-semibold leading-tight text-cozy-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-cozy-dark">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-link"
                  >
                    {item.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
