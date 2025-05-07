import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-blue-100 py-8 px-2">
      {/* Hero Section */}
      <section className="max-w-2xl mx-auto mb-10 p-6 rounded-2xl border-4 border-blue-400 shadow-[4px_4px_0_0_rgba(80,80,200,0.25)] bg-blue-50 flex flex-col items-center relative" style={{boxShadow: '4px 4px 0 0 #b4aaff, 8px 8px 0 0 #e0e7ff'}}>
        <div className="mb-4">
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
        <h1 className="text-4xl font-bold underline font-sans mb-4 text-purple-900 tracking-tight" style={{ fontSmooth: 'never', WebkitFontSmoothing: 'none', MozOsxFontSmoothing: 'grayscale' }}>
          Welcome to OCF at UVA
        </h1>
        <p className="text-lg text-purple-800 mb-6 font-sans" style={{ fontSmooth: 'never', WebkitFontSmoothing: 'none' }}>
          We are a group of students at the University of Virginia who represent a timeless Christian faith, the Orthodox Christian Church. We open our doors to anyone who is interested in the preserved truths of the Apostolic Church.
        </p>
        <Link href="/about" className="px-6 py-3 rounded-lg font-bold text-white shadow-md border-2 border-blue-500 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 hover:from-blue-500 hover:to-purple-700 transition-all duration-200" style={{ textShadow: '1px 1px 0 #6b46c1' }}>
          Learn More
        </Link>
      </section>

      {/* Recent Events Section */}
      <section className="max-w-5xl mx-auto p-6 rounded-2xl border-4 border-blue-400 shadow-[4px_4px_0_0_rgba(80,80,200,0.25)] bg-blue-50">
        <h2 className="text-2xl font-bold underline font-sans text-center mb-8 text-purple-900 tracking-tight" style={{ fontSmooth: 'never', WebkitFontSmoothing: 'none' }}>
          Recent Events
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[1,2,3].map(num => (
            <div key={num} className="bg-white rounded-xl border-4 border-purple-300 shadow-lg p-2 w-full max-w-xs flex flex-col items-center" style={{boxShadow: '2px 2px 0 0 #b4aaff'}}>
              <Image
                src={`/images/community-${num}.png`}
                alt={`Event ${num}`}
                width={400}
                height={300}
                className="rounded-md object-cover w-full h-56 mb-2"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 