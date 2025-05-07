import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-cozy-light font-sans">
      <Navigation />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="retro-title text-4xl sm:text-5xl lg:text-6xl mb-4">About OCF at UVA</h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-cozy-dark">
              The Orthodox Christian Fellowship (OCF) at the University of Virginia is a welcoming community of students who seek to live out the timeless Christian faith of the Orthodox Church. We open our doors to anyone interested in the preserved truths and traditions of the Apostolic Church.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="retro-box">
              <h3 className="retro-title text-xl mb-2">Our Mission</h3>
              <p className="text-cozy-dark">
                Our mission is to foster spiritual growth, fellowship, and service among Orthodox Christian students and all who are curious about the Orthodox faith. We gather for prayer, worship, study, and community service, striving to be a light of Christ on Grounds and beyond.
              </p>
            </div>
            <div className="retro-box">
              <h3 className="retro-title text-xl mb-2">Our History</h3>
              <p className="text-cozy-dark">
                Founded in 2005, OCF at UVA has been a home for Orthodox Christian students for many years, providing a place to connect, worship, and grow in faith. We are part of the national OCF network, which supports Orthodox students on college campuses across North America.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="retro-title text-3xl text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="retro-box text-center">
                <h3 className="font-retro text-lg mb-2 text-cozy-dark">President</h3>
                <p className="text-cozy-dark">
                  John Dujmovic<br />
                  <a href="mailto:ann4mb@virginia.edu" className="text-cozy-dark underline">ann4mb@virginia.edu</a>
                </p>
              </div>
              <div className="retro-box text-center">
                <h3 className="font-retro text-lg mb-2 text-cozy-dark">Vice President</h3>
                <p className="text-cozy-dark">Doria Aractingi<br /><a href="mailto:pcz3vw@virginia.edu" className="text-cozy-dark underline">pcz3vw@virginia.edu</a></p>
              </div>
              <div className="retro-box text-center">
                <h3 className="font-retro text-lg mb-2 text-cozy-dark">Treasurer</h3>
                <p className="text-cozy-dark">Benjamin Tang<br /><a href="mailto:qak6ty@virginia.edu" className="text-cozy-dark underline">qak6ty@virginia.edu</a></p>
              </div>
              <div className="retro-box text-center">
                <h3 className="font-retro text-lg mb-2 text-cozy-dark">Social Chair</h3>
                <p className="text-cozy-dark">Abby Elias<br /><a href="mailto:ryp9cj@virginia.edu" className="text-cozy-dark underline">ryp9cj@virginia.edu</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 