"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const recentEvents = [
  {
    image: 'cookout-2025.jpg',
    title: '2025 Spring Cookout',
    description: 'Saying goodbye to our graduating 4th years Josh and Megnot'
  },
  {
    image: 'liturgy-2025.jpg',
    title: 'Last Divine Liturgy of the Year',
    description: 'Taken with Fr. Robert at St. Nicks'
  },
  {
    image: 'pascha-2025.jpg',
    title: 'Pascha 2025',
    description: 'Christ is Risen! Thank you to all at St. Nicks for hosting us'
  },
];

const galleryImages = [
  'community-1.png',
  'community-2.png',
  'community-3.png',
  'community-4.png',
  'community-5.png',
  'community-6.png',
  'community-7.png',
  'community-8.png',
  'group-2023.jpg',
  'cookout-2025.jpg',
  'liturgy-2025.jpg',
  'pascha-2025.jpg',
  'volleyball.jpg',
  'jmu-hangout.jpg',
  'pascha.jpg',
];

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 8);

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center',
      }}
    >
      <Navigation />
      <main className="flex-grow py-8 px-2">
        {/* Hero Section */}
        <section className="retro-box flex flex-col items-center relative max-w-2xl mx-auto mb-10">
          <div className="mb-2">
            <Image
              src="/images/logo.png"
              alt="OCF Logo"
              width={80}
              height={80}
              className="mx-auto"
              priority
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
          <h1
            className="retro-title text-4xl mb-4 flex items-center gap-2 justify-center"
            style={{
              textDecoration: 'none',
              backgroundImage: 'linear-gradient(to right, #44337a 100%, #44337a 100%)',
              backgroundPosition: '0 100%',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '100% 3px',
              paddingBottom: '2px',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Welcome to OCF at UVA
            <img
              src="/images/torocat1.gif"
              alt="cat gif"
              style={{
                display: 'inline',
                height: '1rem',
                verticalAlign: 'middle',
                marginLeft: '0.5rem',
              }}
            />
          </h1>
          <p className="text-lg text-cozy-dark mb-6 font-sans text-center">
            We are a group of students at the University of Virginia who represent a timeless Christian faith, the Orthodox Christian Church. We open our doors to anyone who is interested in the preserved truths of the Apostolic Church.
          </p>
          <Link href="/about" className="px-6 py-3 rounded-lg font-bold text-white shadow-md border-2 border-blue-500 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all duration-200" style={{ textShadow: '1px 1px 0 #6b46c1' }}>
            Learn More
          </Link>
        </section>

        {/* Recent Events Section */}
        <section className="retro-box max-w-5xl mx-auto mb-10">
          <h2 className="retro-title text-2xl text-center mb-8">
            Recent Events
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {recentEvents.map((event, idx) => (
              <div key={event.image} className="bg-white rounded-xl border-4 border-purple-300 shadow-lg p-2 w-full max-w-xs flex flex-col items-center" style={{boxShadow: '2px 2px 0 0 #b4aaff'}}>
                <div className="w-full h-56 mb-2 overflow-hidden rounded-md">
                  <Image
                    src={`/images/${event.image}`}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl rounded-md"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <h3 className="retro-title text-lg mt-2 mb-1">{event.title}</h3>
                <p className="text-cozy-dark text-sm mb-2 text-center">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="retro-box max-w-5xl mx-auto">
          <h2
            className="retro-title text-2xl text-center mb-8 cursor-pointer select-none"
            onClick={() => setShowAll((v) => !v)}
            title="Click to expand/collapse gallery"
          >
            Our Community Gallery {showAll ? '▲' : '▼'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayedImages.map((img, i) => (
              <div key={img} className="aspect-square relative flex items-center justify-center bg-white border-2 border-blue-200 rounded-lg shadow overflow-hidden">
                <Image
                  src={`/images/${img}`}
                  alt={`Gallery image ${i+1}`}
                  fill
                  className="object-cover rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-cozy-dark">
            Click the header to {showAll ? 'collapse' : 'expand'} the gallery.
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="retro-box max-w-2xl mx-auto mt-10">
          <h2 className="retro-title text-2xl text-center mb-4">Contact Information</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ocf@virginia.edu"
              className="px-6 py-3 rounded-lg font-bold text-white shadow-md border-2 border-blue-500 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all duration-200 text-center"
              style={{ textShadow: '1px 1px 0 #6b46c1' }}
            >
              Email Us
            </a>
            <a
              href="https://groupme.com/join_group/52539301/WUDGNm6m"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-bold text-white shadow-md border-2 border-blue-500 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all duration-200 text-center"
              style={{ textShadow: '1px 1px 0 #6b46c1' }}
            >
              Join Our GroupMe
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 