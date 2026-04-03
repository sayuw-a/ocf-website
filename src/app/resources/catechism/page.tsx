import Image from 'next/image';

const resources = [
  {
    title: 'How Can I Know God?; Fr. Thomas Hopko',
    href: '/pdfs/How-Can-I-Know-God.pdf',
    description: 'What does it take to know God?',
  },
  {
    title: 'The Orthodox Church; Fr. Kallistos Ware',
    href: 'https://a.co/d/hhMSyzH',
    description: 'A primer on the Orthodox Church that has been beneficial to many converts.',
  },
  {
    title: 'The Faith We Hold; Archbishop Paul of Finland',
    href: 'https://a.co/d/cR29ViY',
    description: 'A short synoptic introduction to the faith.',
  },
  {
    title: 'The Orthodox Faith; Fr. Thomas Hopko',
    href: 'https://www.oca.org/orthodoxy/the-orthodox-faith',
    description: 'A deeper dive into Orthodox belief, worship, and sacramental life.',
  },
];

export default function CatechismResources() {
  return (
    <div className="mx-auto max-w-3xl py-10 sm:py-16">
      <section className="retro-box">
        <h1 className="page-title text-center">Catechism Resources</h1>
        <p className="page-copy text-center">
          Explore foundational texts and guides for inquirers and for anyone looking to deepen their
          understanding of the Orthodox faith.
        </p>
        <div className="my-6 flex justify-center">
          <Image src="/images/angeldivider.png" alt="" width={240} height={32} className="h-8 w-auto" />
        </div>
        <ul className="space-y-5">
          {resources.map((resource) => (
            <li key={resource.title}>
              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="site-link font-semibold"
              >
                {resource.title}
              </a>
              <p className="mt-1 text-sm text-cozy-dark">{resource.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
