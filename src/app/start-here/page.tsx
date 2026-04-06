import Link from 'next/link';

const quickAnswers = [
  {
    question: 'Who is welcome?',
    answer:
      'Orthodox students, students from other Christian backgrounds, and students who are simply curious are all welcome. We aim to provide an environment open to anyone curious about the Christian faith.',
  },
  {
    question: 'What is Orthodoxy',
    answer:
      '"Right faith and good works; for whoever holds these two, the same is a good Christian, and has certain hope of eternal salvation, as the Scripture says (James 2.24): “You see then how that by good works a man is justified, and not by faith only”; and a little after (v. 6), “For as the body without the Spirit is dead; so faith without works is dead also.” Saint Paul affirms the same (1 Tim. 1.19): “Holding faith and a good conscience, which some having put away concerning faith, have made shipwreck.” And again (1 Tim. 3.9): “Holding the mystery of the faith in a pure conscience.”" The Orthodox Confession of St Peter Mogila',
  },
  {
    question: 'What should I do first?',
    answer:
      'The easiest first step is to join the GroupMe, send an email, or come to the next gathering. If you want, someone can help you know where to go and who to look for.',
  },
];

const newcomerSteps = [
  {
    title: '1. Reach out',
    body:
      'Email us or join the GroupMe if you want a name to look for, a quick answer about the week&apos;s plans',
  },
  {
    title: '2. Start with something simple',
    body:
      'A lot of students join us for Bible study or the evening Vesperal service on Saturday.',
  },
  {
    title: '3. Ask what you are actually wondering',
    body:
      'Questions about Orthodoxy, church background, or what happens at services are welcome.',
  },
];

const faqItems = [
  {
    question: 'Do I need to be Orthodox to come?',
    answer:
      'No. OCF is rooted in Orthodox Christianity, but students who are learning, visiting, or exploring are welcome to come and see.',
  },
  {
    question: 'What are events usually like?',
    answer:
      'It depends on the event. Some are prayerful and liturgical, like Vespers or Divine Liturgy. Others are more conversational, like Bible study, dinners, or fellowship nights.',
  },
  {
    question: 'Where do events happen?',
    answer:
      'Weekly fellowship events are usually on or near Grounds like at the Center for Christian Study on the Corner. Church services happen at St. Nicholas Orthodox Church in Charlottesville. Check the events page or GroupMe for the exact location each week.',
  },
  {
    question: 'What should I wear?',
    answer:
      'For fellowship events, casual clothing is fine. For church services, people usually dress a little more neatly (like a button-up and pants), but you do not need to own anything special to come.',
  },
  {
    question: 'Will I be the only new person there?',
    answer:
      'Usually no. Even when most people already know each other, new students come throughout the year, and OCF expects first-time visitors.',
  },
  {
    question: 'What if I know almost nothing about Orthodoxy?',
    answer:
      'That is okay. You do not need background knowledge to come. If you want a gentle place to start, the catechism resources page is a good next stop. As John 1:39 says: "“Come,” he replied, “and you will see.”"',
  },
];

const helpfulLinks = [
  {
    title: 'Events',
    description: 'Weekly gatherings, service times, and other events.',
    href: '/events',
  },
  {
    title: 'Catechism Resources',
    description: 'Both introductory materials and deeper theological answers.',
    href: '/resources/catechism',
  },
  {
    title: 'About OCF',
    description: 'Meet the chapter, its purpose, and the students leading it this year.',
    href: '/about',
  },
];

export default function StartHerePage() {
  return (
    <div className="content-shell start-here-shell py-10 sm:py-16">
      <section className="start-hero">
        <p className="home-eyebrow">Start Here</p>
        <h1 className="home-title">What most people want to know before they come for the first time.</h1>
        <p className="home-lede">
          This page is for first visits, practical questions, and the things people usually want to
          ask before showing up. If you are trying to figure out whether OCF is for you, what
          Orthodoxy is, where people meet, or how to get connected, start here.
        </p>
        <div className="home-actions">
          <a href="mailto:ann4mb@virginia.edu" className="btn-primary">
            Email a student leader
          </a>
          <a
            href="https://groupme.com/join_group/52539301/WUDGNm6m"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Join the GroupMe
          </a>
          <Link href="/events" className="home-inline-link">
            See what&apos;s happening this week
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="start-grid">
          {quickAnswers.map((item) => (
            <article key={item.question} className="start-card">
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="start-section">
          <div className="home-section-intro home-section-intro-left">
            <p className="home-eyebrow">What to do next</p>
            <h2 className="home-section-title">A simple path if you are new.</h2>
          </div>
          <ol className="start-step-list">
            {newcomerSteps.map((step) => (
              <li key={step.title} className="start-step-item">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="start-two-column">
          <article className="start-panel">
            <p className="home-eyebrow">Where things happen</p>
            <h2 className="home-section-title">Most weeks include both campus life and church life.</h2>
            <p className="page-copy">
              Fellowship gatherings usually happen on or near Grounds. Services like Great Vespers and
              Divine Liturgy happen at St. Nicholas Orthodox Church in Charlottesville.
            </p>
            <p className="page-copy mt-4">
              If you are not sure where to go, check the events page or send a message first. We would
              much rather help you arrive than have you guess.
            </p>
            <Link href="/events" className="home-inline-link">
              Open the events page
            </Link>
          </article>

          <article className="start-panel">
            <p className="home-eyebrow">Plain-language Orthodoxy</p>
            <h2 className="home-section-title">Orthodoxy is a way of Christian life, not only something to read about.</h2>
            <p className="page-copy">
              In OCF, that usually means prayer, worship, Scripture, friendship, repentance, and
              learning to stay close to Christ in the life of the Church.
            </p>
            <p className="page-copy mt-4">
              If that sounds unfamiliar, you do not need to master the vocabulary before coming. You
              can begin by showing up, listening, and asking questions as they come.
            </p>
            <Link href="/resources/catechism" className="home-inline-link">
              Start with catechism resources
            </Link>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="start-faq">
          <div className="home-section-intro">
            <p className="home-eyebrow">FAQ</p>
            <h2 className="home-section-title">Common questions from first-time visitors.</h2>
          </div>
          <div className="start-faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="start-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="start-section">
          <div className="home-section-intro home-section-intro-left">
            <p className="home-eyebrow">Helpful links</p>
            <h2 className="home-section-title">A few pages worth opening next.</h2>
          </div>
          <div className="start-link-grid">
            {helpfulLinks.map((item) => (
              <Link key={item.href} href={item.href} className="start-link-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="home-inline-link">Open page</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-contact">
          <div>
            <p className="home-eyebrow">Still not sure?</p>
            <h2 className="home-section-title">You can ask a real person before you come.</h2>
            <p className="page-copy">
              If you want help with location, rides, what kind of event to start with, or whether OCF
              feels like the right fit, reach out. A lot of people begin that way.
            </p>
          </div>
          <div className="home-contact-actions">
            <a href="mailto:ann4mb@virginia.edu" className="btn-primary">
              Email a student leader
            </a>
            <a
              href="https://groupme.com/join_group/52539301/WUDGNm6m"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Join Our GroupMe
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
