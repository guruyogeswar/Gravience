import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Eye, Target } from 'lucide-react';

// === SectionTitle Component ===
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
    {children}
  </h2>
);

// === Hero Section ===
const Hero = () => (
  <div className="relative text-center py-40 px-4 flex flex-col items-center justify-center min-h-screen bg-black">
    {/* Fog Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-black to-slate-800 opacity-90"></div>
    <div className="absolute inset-0 background-noise" style={{ mixBlendMode: 'overlay', opacity: 0.05 }}></div>

    <div className="relative z-10">
      <motion.h1
        className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Gravience <span className="text-orange-400">Studios</span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Forging Worlds, Crafting Legends.
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-3xl font-bold text-orange-400 tracking-tight animate-pulse">
          COMING SOON
        </p>
      </motion.div>
    </div>
  </div>
);

// === About Section ===
const About = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
    <div className="max-w-4xl mx-auto text-center text-slate-300">
      <SectionTitle>Who We Are</SectionTitle>
      <p className="text-lg">
        Gravience Studios is a collective of developers, designers, and dreamers dedicated to building immersive game worlds from the ground up. We're in stealth mode—but the forge is burning.
      </p>
    </div>
  </section>
);

// === Mission & Vision ===
const MissionVision = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-y border-slate-800">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 text-center text-slate-300">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
          <Target className="text-orange-400 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
        <p>To build emotionally intelligent, story-driven experiences that blur the line between player and protagonist.</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
          <Eye className="text-orange-400 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
        <p>To become a pioneering force in interactive storytelling, pushing the edge of narrative innovation.</p>
      </div>
    </div>
  </section>
);

// === Join Section ===
const JoinUs = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
    <div className="max-w-xl mx-auto text-center">
      <SectionTitle>Join Our Journey</SectionTitle>
      <p className="text-slate-400 mb-6">
        Be the first to hear when we launch. Join our waitlist:
      </p>
      <form action="#" method="POST" className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="you@example.com"
          required
          className="px-4 py-3 rounded-md bg-slate-800 border border-slate-700 text-white w-full"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  </section>
);

// === Footer ===
const Footer = () => (
  <footer className="bg-black border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
    <p>&copy; {new Date().getFullYear()} Gravience Studios. All rights reserved.</p>
    <p>Crafted in the shadows, built for legends.</p>
  </footer>
);

// === Main App ===
export default function App() {
  const svgNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

  return (
    <>
      <style>
        {`
          @keyframes fogShift {
            0% { background-position: 0 0; }
            100% { background-position: 1000px 0; }
          }
          .background-noise {
            background-image: ${svgNoise};
            animation: fogShift 40s linear infinite;
          }
        `}
      </style>
      <div className="text-white">
        <main>
          <Hero />
          <About />
          <MissionVision />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </>
  );
}
