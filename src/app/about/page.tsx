import { site } from '@/content/site';

export default function About() {
  return (
    <div className="content-shell py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">{site.about.intro.title}</h1>
        <p className="page-copy">
          {site.about.intro.description}
        </p>
      </section>

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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {site.about.officers.list.map((officer) => (
            <article key={officer.role} className="page-panel-soft text-center">
              <h3 className="font-display mb-3 text-[1.7rem] font-semibold leading-tight text-cozy-dark">
                {officer.role}
              </h3>
              <p className="text-cozy-dark">
                {officer.name}
                <br />
                <a href={`mailto:${officer.email}`} className="site-link">
                  {officer.email}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
