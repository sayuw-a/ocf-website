import Image from 'next/image';

const officers = [
  {
    role: 'President',
    name: 'Benjamin Tang',
    email: 'qak6ty@virginia.edu',
    bio: "Hi, I'm Ben, a rising 4th year studying Political Philosophy, Policy, and Law. Outside of OCF, I am also a cadet in the Army ROTC program here planning on commissioning as a JAG officer. I also like to sing and you can find me both serving in the choir ministry and in the Virginia Glee Club! Feel free to reach out if you ever want to grab a meal or need a ride anywhere.",
    photo: '/images/officers/ben-tang.jpg'
  },
  {
    role: 'Vice President',
    name: 'Abigail Elias',
    email: 'ryp9cj@virginia.edu',
    bio: "Hi, I'm Abby! I'm a rising third-year student at UVA studying biology & psychology. I'm planning on going into the medical field. Outside of OCF, I love volunteering with kids, hanging out with friends, working out, and traveling. A fun fact is that I studied abroad in Spain this past Spring semester so let me know if you have any questions! Feel free to reach out if you want school or pre-med advice, or just want to grab a meal!",
    photo: '/images/officers/abby-elias.jpg'
  },
  {
    role: 'Treasurer',
    name: 'Alexander Bills',
    email: 'zsx6bx@virginia.edu',
    bio: "I'm Alex, a 4th-year biomedical engineering major. For fun, I like to play basketball, video games, read, play violin, and work on my podcast Mindful Gaming. Reach out to me on GroupMe with questions about anything and everything, no judgment. All glory to God.",
    photo: '/images/officers/alex-bills.jpg'
  },
  {
    role: 'Secretary & Social Chair',
    name: 'Maria Koutsourais',
    email: 'bu2ur@virginia.edu',
    bio: "Hi! I'm Maria, a rising 3rd year studying Neuroscience and preparing for nursing school next year. When I'm not doing all the epic OCF things we do, you might catch me running/walking around grounds, hooping at AFC, or studying at O-hill. I also love playing the guitar, reading, baking, photography, drawing/painting, and pretty much anything creative I can put my hands on! Feel free to reach out if you ever wanna hang out!",
    photo: '/images/officers/maria-koutsourais.jpg'
  },
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
        <div className="grid gap-8 md:grid-cols-2">
          {officers.map((officer) => (
            <article key={officer.role} className="page-panel-soft">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={officer.photo}
                  alt={officer.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
              <h3 className="font-display mb-2 text-[1.5rem] font-semibold leading-tight text-cozy-dark">
                {officer.name}
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-3">{officer.role}</p>
              <p className="text-cozy-dark text-sm mb-3 leading-relaxed">
                {officer.bio}
              </p>
              <a href={`mailto:${officer.email}`} className="site-link text-sm">
                {officer.email}
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
