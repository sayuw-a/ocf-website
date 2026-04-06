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
          OCF at UVA is a group of students trying to live Orthodox Christian life together while we
          are in college. We pray, study, spend time together, go to church, ask real questions, and
          try to make room for anyone who is looking for that kind of community.
        </p>
      </section>

      <section className="page-section page-duo">
        <div className="page-panel">
          <h2 className="section-heading mb-4 text-2xl">Our Mission</h2>
          <p className="page-copy text-base">
            Our hope is simple: to help students stay close to Christ and not try to do Orthodox life
            alone during college. That means prayer, fellowship, church life, study, service, and the
            ordinary work of caring for one another.
          </p>
        </div>
        <div className="page-panel">
          <h2 className="section-heading mb-4 text-2xl">Our History</h2>
          <p className="page-copy text-base">
            OCF at UVA was founded in 2005 and has been a home for Orthodox students for many years.
            We are also part of the wider OCF network across North America, which means students here
            are connected to a much larger fellowship beyond Charlottesville.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-intro mb-8">
          <h2 className="section-heading">Our Team</h2>
          <p className="page-copy">
            These are some of the students helping keep things moving this year. If you reach out, you
            are talking to another student, not a front desk.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {officers.map((officer) => (
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
