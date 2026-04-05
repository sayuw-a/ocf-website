import Image from 'next/image';
import Link from 'next/link';

const firstVisitSteps = [
  {
    label: 'Reach out if you want a name to look for',
    description:
      'Join the GroupMe or send an email before you come. We are happy to tell you what is happening that week and help you know where to go.',
  },
  {
    label: 'Start with the kind of event that feels easiest',
    description:
      'Some students begin with Bible study or fellowship. Others come first to Vespers or Divine Liturgy. There is no single correct first step.',
  },
  {
    label: 'Show up without having to perform',
    description:
      'You do not need to already know the prayers, understand everything, or know anyone in the room. You can simply come and be received.',
  },
];

const visitMoments = [
  {
    title: 'Prayer and worship',
    description:
      'Some weeks are centered on church services, feast days, or prayer together at the parish.',
  },
  {
    title: 'Meals, study, and ordinary friendship',
    description:
      'A lot of OCF life looks like dinner, late conversations, Bible study, and students making room for one another.',
  },
  {
    title: 'A place to ask honest questions',
    description:
      'If you are Orthodox-curious, you do not need polished language or background knowledge. Questions are part of the doorway in.',
  },
];

const quickAnswers = [
  {
    question: 'Who can come?',
    answer: 'Orthodox students, Orthodox-curious students, and anyone wanting to learn are welcome.',
  },
  {
    question: 'Where do events happen?',
    answer: 'On or near Grounds during the week, and at St. Nicholas Orthodox Church for services.',
  },
  {
    question: 'What should I do first?',
    answer: 'Start with the newcomer page, message us, or check the next event and come.',
  },
];

export default function Home() {
  return (
    <div className="content-shell home-shell">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Orthodox Christian Fellowship at UVA</p>
          <h1 className="home-title">A real invitation into Orthodox life at UVA.</h1>
          <p className="home-lede">
            OCF is a student community for Orthodox Christians and Orthodox-curious students who want
            prayer, friendship, and a place to stay connected to Christ during college. If you are
            wondering whether you belong here, you do.
          </p>

          <div className="home-actions">
            <Link href="/start-here" className="btn-primary">
              Read the Newcomer Guide
            </Link>
            <Link href="/events" className="btn-secondary">
              See This Week&apos;s Events
            </Link>
            <a href="mailto:ann4mb@virginia.edu" className="home-inline-link">
              Prefer to ask first? Email a student leader
            </a>
          </div>

          <div className="home-answer-row" aria-label="Quick answers for first-time visitors">
            {quickAnswers.map((item) => (
              <div key={item.question} className="home-answer-item">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </div>
        </div>

        <div className="home-hero-visual" aria-label="Recent OCF life">
          <div className="home-hero-photo home-hero-photo-large">
            <Image
              src="/images/group-2023.jpg"
              alt="Group photo of OCF students together"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="home-hero-photo home-hero-photo-small">
            <Image
              src="/images/cookout-2025.jpg"
              alt="Students sharing a meal at an OCF cookout"
              fill
              className="object-cover"
            />
          </div>
          <div className="home-hero-note">
            <p className="home-card-kicker">What happens if you come?</p>
            <p>
              Expect introductions, a low-pressure welcome, and someone willing to help you figure out
              where you are and what is going on.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-invite-band">
          <div>
            <p className="home-eyebrow">New here?</p>
            <h2 className="home-section-title">Start with the practical questions, not the guesswork.</h2>
            <p className="page-copy">
              We put the most common newcomer questions in one place: what Orthodoxy is in plain
              language, who can come, where events happen, what a first visit feels like, and how to
              get connected before you show up.
            </p>
          </div>
          <Link href="/start-here" className="btn-primary">
            Read the newcomer guide
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="home-guidance">
          <div className="home-guidance-intro">
            <p className="home-eyebrow">Your first step</p>
            <h2 className="home-section-title">You do not need to decode the community before entering it.</h2>
            <p className="page-copy">
              The landing page should feel like someone opening the door, not handing you a stack of
              information. Here is the simplest way in.
            </p>
          </div>

          <ol className="home-step-list">
            {firstVisitSteps.map((item, index) => (
              <li key={item.label} className="home-step-row">
                <div className="home-step-badge">{index + 1}</div>
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section">
        <div className="home-story-layout">
          <div className="home-story-copy">
            <p className="home-eyebrow">What OCF feels like</p>
            <h2 className="home-section-title">Not only events, but a rhythm of prayer, friendship, and being known.</h2>
            <p className="page-copy">
              OCF is at its best when students find both spiritual steadiness and actual people to
              reach out to. The point is not to impress you with activity. The point is to help you
              belong somewhere faithful and human.
            </p>

            <div className="home-moment-list">
              {visitMoments.map((item) => (
                <article key={item.title} className="home-moment-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="home-story-photos">
            <div className="home-story-photo-tall">
              <Image
                src="/images/liturgy-2025.jpg"
                alt="OCF students gathered for Divine Liturgy"
                fill
                className="object-cover"
              />
            </div>
            <div className="home-story-photo-wide">
              <Image
                src="/images/pascha-2025.jpg"
                alt="Pascha celebration with OCF students"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-contact">
          <div>
            <p className="home-eyebrow">Ready to come?</p>
            <h2 className="home-section-title">Let us make the first visit easier.</h2>
            <p className="page-copy">
              If you want a person to message, the address for this week, or help deciding which event
              to start with, reach out. You do not have to arrive alone.
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
            <Link href="/about" className="home-inline-link">
              Learn more about OCF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
