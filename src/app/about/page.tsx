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
          OCF at UVA is the fellowship organization for Orthodox Christians on Grounds. We try to make an environment where all are welcome to explore and grow in faith. The goal is
          to grow deeper as a Christian and through fellowship, become one that is "always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you" 1st Peter 3:15
        </p>
      </section>

      <section className="page-section page-duo">
        <div className="page-panel">
          <h2 className="section-heading mb-4 text-2xl">Our Mission</h2>
          <p className="page-copy text-base">
            Our hope is simple: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching."
            Hebrews 10:24-25
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
          <h2 className="section-heading">Officers</h2>
          <p className="page-copy">
            These are some of the students ensuring OCF runs smoothly. Please reach out if you have any questions!
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
