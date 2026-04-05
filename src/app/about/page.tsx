const officers = [
  { role: 'President', name: 'John Dujmovic', email: 'ann4mb@virginia.edu' },
  { role: 'Vice President', name: 'Doria Aractingi', email: 'pcz3vw@virginia.edu' },
  { role: 'Treasurer', name: 'Benjamin Tang', email: 'qak6ty@virginia.edu' },
  { role: 'Social Chair', name: 'Abby Elias', email: 'ryp9cj@virginia.edu' },
];

export default function About() {
  return (
    <div className="content-shell py-10 sm:py-16">
      <section className="page-intro">
        <h1 className="page-title">About OCF at UVA</h1>
        <p className="page-copy">
          The Orthodox Christian Fellowship at the University of Virginia is a welcoming community of
          students who seek to live out the timeless Christian faith of the Orthodox Church. We open
          our doors to anyone interested in the preserved truths and traditions of the Apostolic
          Church.
        </p>
      </section>

      <section className="page-section grid gap-8 md:grid-cols-2">
        <div className="retro-box">
          <h2 className="section-heading mb-4 text-2xl">Our Mission</h2>
          <p className="page-copy text-base">
            Our mission is to foster spiritual growth, fellowship, and service among Orthodox
            Christian students and all who are curious about the Orthodox faith. We gather for
            prayer, worship, study, and community service, striving to be a light of Christ on
            Grounds and beyond.
          </p>
        </div>
        <div className="retro-box">
          <h2 className="section-heading mb-4 text-2xl">Our History</h2>
          <p className="page-copy text-base">
            Founded in 2005, OCF at UVA has been a home for Orthodox Christian students for many
            years, providing a place to connect, worship, and grow in faith. We are part of the
            national OCF network, which supports Orthodox students on college campuses across North
            America.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-intro mb-8">
          <h2 className="section-heading">Our Team</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {officers.map((officer) => (
            <article key={officer.role} className="retro-box text-center">
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
