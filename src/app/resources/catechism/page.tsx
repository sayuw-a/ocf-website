import Image from 'next/image';
import { site } from '@/content/site';

export default function CatechismResources() {
  return (
    <div className="content-shell max-w-3xl py-10 sm:py-16">
      <section className="page-panel">
        <h1 className="page-title text-center">{site.catechism.intro.title}</h1>
        <p className="page-copy text-center">
          {site.catechism.intro.description}
        </p>
        <div className="my-6 flex justify-center">
          <Image src="/images/angeldivider.png" alt="" width={240} height={32} className="h-8 w-auto" />
        </div>
        <ul className="resource-list">
          {site.catechism.items.map((resource) => (
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
