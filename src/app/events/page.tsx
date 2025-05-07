import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-light font-sans">
      <Navigation />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="retro-title text-4xl sm:text-5xl lg:text-6xl mb-4">Events</h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-cozy-dark">
              Join us for worship, fellowship, and special events throughout the year!
            </p>
          </div>

          {/* Recurring Events */}
          <div className="mb-16">
            <h2 className="retro-title text-2xl mb-6">Recurring Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="retro-box flex flex-col items-center">
                <Image
                  src="/images/events/weekly-meeting.jpg"
                  alt="Weekly Meeting"
                  width={400}
                  height={250}
                  className="rounded mb-4 object-cover"
                />
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Bible Study & Fellowship</h3>
                <p className="text-cozy-dark mb-2">Every Thursday at 8:00 PM</p>
                <p className="text-cozy-dark">Join us for discussion, prayer, and fellowship. All are welcome!</p>
              </div>
              <div className="retro-box flex flex-col items-center">
                <Image
                  src="/images/events/divine-liturgy.jpg"
                  alt="Divine Liturgy"
                  width={400}
                  height={250}
                  className="rounded mb-4 object-cover"
                />
                <h3 className="font-retro text-xl mb-2 text-cozy-dark">Great Vespers & Divine Liturgy</h3>
                <p className="text-cozy-dark mb-2">Vespers: Saturdays at 5:00 PM<br/>Liturgy: Sundays at 9:30 AM</p>
                <p className="text-cozy-dark">All are welcome to join us for worship at St. Nicholas Orthodox Church.</p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h2 className="retro-title text-2xl mb-6">Special & Upcoming Events</h2>
            <div className="retro-box text-center">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=fc12eba4c5f22cf289e5751d898b3d1caf248f74a1a351eaae11f1b6bc4f579d%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                style={{ border: 0 }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="OCF Events Calendar"
                className="mx-auto w-full max-w-full rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 