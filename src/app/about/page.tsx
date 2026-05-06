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
import { site } from '@/content/site';

export default function About() {
  return (
    <div className="content-shell py-10 sm:py-16">

      <section className="page-intro mb-10">
        <h1 className="page-title">{site.about.intro.title}</h1>
        <p className="page-copy mx-auto text-center">
          {site.about.intro.description}
        </p>
      </section>

      {/* Full-width group banner */}
      <div className="relative mb-14 h-[260px] overflow-hidden rounded-[28px] border border-stone-200/60 shadow-[0_12px_32px_rgba(90,68,38,0.10)] sm:h-[360px] lg:h-[420px]">
        <Image
          src="/images/retreat-mountains.jpg"
          alt="OCF students gathered at a retreat in the Blue Ridge Mountains"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>

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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {site.about.officers.list.map((officer) => (
            <article key={officer.role} className="page-panel-soft text-center">
              <h3 className="font-display mb-3 text-[1.7rem] font-semibold leading-tight text-cozy-dark">
                {officer.role}
              </h3>
              <p className="text-cozy-dark">
                {officer.name}
              </p>
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

      {/* Photo row — life together, unique to this page */}
      <section className="page-section">
        <div className="mb-8">
          <p className="home-eyebrow">Life together</p>
          <h2 className="home-section-title">What OCF actually looks like</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/liturgy-standing.jpg"
              alt="OCF students standing in prayer during Divine Liturgy"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/community-2.png"
              alt="Students planting trees together during a service day"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/choir-chanting.jpg"
              alt="OCF students chanting together during a Liturgy"
              fill
              className="object-cover object-[center_30%]"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/80 shadow-[0_8px_22px_rgba(90,68,38,0.08)]">
            <Image
              src="/images/community-6.png"
              alt="OCF students gathered around a table outdoors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
