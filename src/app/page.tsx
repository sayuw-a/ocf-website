import Image from 'next/image';
import Link from 'next/link';

const firstVisitSteps = [
  {
    label: 'Text or email first if that would make coming easier',
    description:
      'If you want a name to look for, the location for that week, or just a little reassurance, send a message first. That is normal, and we are happy to help.',
  },
  {
    label: 'Start with the kind of night that feels most natural to you',
    description:
      'Some people come first to Bible study or dinner because it feels easy to talk and meet people. Others want to start with Vespers or Divine Liturgy. Either way is fine.',
  },
  {
    label: 'Come as you are, even if you feel out of place at first',
    description:
      'You do not need to know the prayers, understand every part of the service, or arrive with church words ready. You can just come and let the night unfold.',
  },
];

const galleryMoments = [
  {
    image: 'cookout-2025.jpg',
    alt: 'Students gathered around food at the spring cookout',
    title: 'Meals that turn into long conversations',
    description: 'Cookouts, dinners, and after-church meals are where a lot of friendships begin.',
  },
  {
    image: 'liturgy-2025.jpg',
    alt: 'OCF students gathered with Fr. Robert after Divine Liturgy',
    title: 'Church life that does not stay abstract',
    description: 'Students pray together, learn the services, and stay connected to parish life while at UVA.',
  },
  {
    image: 'jmu-hangout.jpg',
    alt: 'Students from different campuses hanging out together',
    title: 'Friendship beyond one event',
    description: 'Some of the best parts of OCF are the ordinary ones: rides, hangouts, and seeing people again next week.',
  },
];

const visitMoments = [
  {
    title: 'Prayer and worship',
    description:
      'Some weeks are centered on Vespers, Divine Liturgy, feast days, or prayer together at St. Nicholas.',
  },
  {
    title: 'Meals, study, and ordinary college friendship',
    description:
      'A lot of OCF life is simpler than people expect: dinner after church, Bible study, long conversations, rides across town, and students making room for each other.',
  },
  {
    title: 'A place where questions are welcome',
    description:
      'If you are Orthodox-curious, you do not need polished language or background knowledge. Questions are part of how many people begin.',
  },
];

const quickAnswers = [
  {
    question: 'Who can come?',
    answer: 'Orthodox students, curious students, and anyone who wants to learn are welcome.',
  },
  {
    question: 'Where do events happen?',
    answer: 'Usually on or near Grounds during the week, and at St. Nicholas Orthodox Church for services.',
  },
  {
    question: 'What should I do first?',
    answer: 'Read the newcomer guide, message us, or just come to the next event.',
  },
];

export default function Home() {
  return (
    <div className="content-shell home-shell">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="home-eyebrow">Orthodox Christian Fellowship at UVA</p>
          <h1 className="home-title">Prayer, friendship, and a place to belong at UVA.</h1>
          <p className="home-lede">
            OCF is a group of students trying to stay close to Christ together during college. Some of
            us grew up Orthodox. Some showed up with questions. Most people first come because they
            want real friendship, honest conversation, and a place that feels grounded.
          </p>

          <div className="home-actions">
            <Link href="/start-here" className="btn-primary">
              Start Here if You&apos;re New
            </Link>
            <Link href="/events" className="btn-secondary">
              See This Week&apos;s Events
            </Link>
            <a href="mailto:ann4mb@virginia.edu" className="home-inline-link">
              Want to ask first? Email a student leader
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
            <p className="home-card-kicker">A first visit usually means</p>
            <p>
              Usually: someone says hi, someone makes room for you, and by the end of the night you
              know a few names and what is happening next week.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-proof-shell">
          <div className="home-section-intro home-section-intro-left">
            <p className="home-eyebrow">Here&apos;s what we actually do</p>
            <h2 className="home-section-title">A normal OCF week usually looks like some mix of prayer, study, meals, and seeing the same people again.</h2>
            <p className="page-copy">
              If you are trying to picture what it would actually feel like to come, start here. OCF
              is not only a list of events. It is a real student community with a church home, group
              chats, rides, dinners, and people who remember your name.
            </p>
          </div>

          <div className="home-proof-grid">
            {galleryMoments.map((item) => (
              <article key={item.image} className="home-proof-card">
                <div className="home-proof-photo">
                  <Image src={`/images/${item.image}`} alt={item.alt} fill className="object-cover" />
                </div>
                <div className="home-proof-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-guidance">
          <div className="home-guidance-intro">
            <p className="home-eyebrow">Your first step</p>
            <h2 className="home-section-title">You do not have to decode the whole group before coming.</h2>
            <p className="page-copy">
              A first visit should feel like someone opening the door, not like you have to figure out
              everything by yourself first. Here is the easiest path in.
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
        <div className="home-invite-band">
          <div>
            <p className="home-eyebrow">New here?</p>
            <h2 className="home-section-title">Start with the practical questions, not the awkward guesswork.</h2>
            <p className="page-copy">
              We put the common first-visit questions in one place: what Orthodoxy is in plain
              language, who usually comes, where things happen, what a first night feels like, and how
              to get connected before you show up.
            </p>
          </div>
          <div className="home-band-actions">
            <Link href="/start-here" className="btn-primary">
              Open the newcomer guide
            </Link>
            <Link href="/about" className="home-inline-link">
              Meet the people behind OCF
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="home-story-layout">
          <div className="home-story-copy">
            <p className="home-eyebrow">What OCF feels like</p>
            <h2 className="home-section-title">Not polished, not performative, just a steady rhythm of prayer, friendship, and being known.</h2>
            <p className="page-copy">
              Some weeks are quiet. Some are full. Some nights are mostly conversation around a table.
              Some feel more prayerful and liturgical. What matters is that students keep returning to
              the same life together.
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
            <h2 className="home-section-title">If you want, we can make the first visit less awkward.</h2>
            <p className="page-copy">
              If you want the address, a ride, a name to look for, or help figuring out which event to
              start with, reach out. You do not have to show up cold.
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
              Join the GroupMe
            </a>
            <Link href="/about" className="home-inline-link">
              Meet the group
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
