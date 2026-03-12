import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Image as ImageIcon, Mail } from 'lucide-react';

// --- Animated Background Components ---
const StarryBackground = () => {
  const stars = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    size: Math.random() * 2 + 1 + 'px',
  }));

  return (
    <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/40 via-gray-900 to-black overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse shadow-[0_0_5px_white]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

const FallingRoses = () => {
  const petals = Array.from({ length: 15 });
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
          animate={{
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth + (Math.random() * 50 - 25),
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.6)]"
        >
          {/* Using heart as a petal shape */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform scale-y-75 -rotate-45">
             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// --- Main App Component ---
export default function MobileLoveWebsite() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Dynamic Date Calculation starting from Feb 27, 2026
    const startDate = new Date('2026-02-27T00:00:00');
    const updateCounter = () => {
      const now = new Date();
      const difference = now - startDate;
      const daysTogether = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(daysTogether);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-rose-500 overflow-x-hidden flex justify-center">
      <StarryBackground />
      <FallingRoses />

      {/* Main Mobile Container (9:16 aspect ratio bounds) */}
      <main className="z-20 relative w-full max-w-md bg-transparent min-h-screen flex flex-col pb-24 shadow-2xl shadow-rose-900/20">
        
        {/* Top Navigation Links */}
        <nav className="w-full flex justify-center gap-2 sm:gap-3 pt-6 pb-2 px-2 text-[10px] sm:text-xs text-yellow-500/80 tracking-widest font-medium uppercase border-b border-rose-900/30">
          <span className="text-yellow-400 cursor-pointer">HOME</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">OUR STORY</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">MEMORIES</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">LETTERS</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">FOR HER</span>
        </nav>

        {/* Hero Section (Blended Images & Text) */}
        <section className="relative w-full mt-4 flex flex-col items-center px-4">
          <div className="relative w-full h-[220px] rounded-2xl overflow-visible bg-gradient-to-b from-transparent to-black/80">
            
            {/* Split Images */}
            <div className="absolute inset-0 flex rounded-t-2xl overflow-hidden z-0 mask-image-b">
              {/* Replace with your left image (His eyes) */}
              <div className="w-1/2 h-full bg-slate-800">
                <img src="/path-to-his-eyes.jpg" alt="His Eyes" className="w-full h-full object-cover opacity-80" />
              </div>
              {/* Replace with your right image (Her face) */}
              <div className="w-1/2 h-full bg-slate-700">
                <img src="/path-to-her-face.jpg" alt="Her Face" className="w-full h-full object-cover opacity-80" />
              </div>
              {/* Overlay Gradient to blend bottom into text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>

            {/* Overlaid Text */}
            <div className="absolute bottom-6 w-full text-center z-10 px-4">
              <h2 className="text-xl font-serif text-yellow-500 uppercase tracking-widest mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Our Eternal Love.
              </h2>
              <h1 className="text-2xl font-serif text-yellow-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Written in the Stars.
              </h1>
              <p className="text-sm font-serif text-yellow-200/80 mt-1 italic drop-shadow-md">
                Every glance, a new chapter.
              </p>
            </div>

            {/* Chibi Avatars Overflowing */}
            <div className="absolute -bottom-8 left-0 z-20 w-16 h-16 rounded-full bg-black p-0.5 shadow-[0_0_15px_rgba(251,113,133,0.5)]">
              <img src="/path-to-chibi-girl.jpg" alt="Chibi Girl" className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-8 right-0 z-20 w-16 h-16 rounded-full bg-black p-0.5 shadow-[0_0_15px_rgba(251,113,133,0.5)]">
              <img src="/path-to-chibi-boy.jpg" alt="Chibi Boy" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </section>

        {/* Love Counter Section */}
        <section className="mt-16 text-center px-4 flex flex-col items-center">
          <h3 className="text-4xl text-rose-400 mb-2 drop-shadow-[0_0_10px_rgba(251,113,133,0.6)]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>
            Love Counter
          </h3>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-6xl font-serif font-bold text-rose-300 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]">
              {days}
            </span>
            <div className="text-left leading-tight">
              <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase">Beautiful Days</span>
              <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase">Together.</span>
            </div>
          </div>
          
          <p className="text-yellow-500/80 mt-3 font-serif tracking-wide text-sm">
            Starting Feb 27, 2026.
          </p>
        </section>

        {/* Glowing Heart Divider */}
        <div className="flex items-center justify-center w-full px-12 my-8 opacity-80">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-400/50"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-4 text-rose-300 drop-shadow-[0_0_15px_rgba(244,63,94,1)]"
          >
            <Heart fill="currentColor" size={32} />
          </motion.div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-400/50"></div>
        </div>

        {/* Poetry Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center px-6 space-y-6 font-serif"
        >
          <p className="text-lg text-rose-50 leading-relaxed drop-shadow-md">
            In your eyes, I find my home,<br/>
            A universe where I am never alone.
          </p>
          <p className="text-lg text-rose-50 leading-relaxed drop-shadow-md">
            The stars whisper our names at night,<br/>
            Our love, the universe's sweetest light.
          </p>
        </motion.section>

        {/* Fixed Bottom Navigation */}
        <div className="fixed bottom-0 w-full max-w-md bg-black/90 backdrop-blur-md border-t border-yellow-700/50 flex justify-between items-center px-6 py-3 z-50">
          <button className="flex flex-col items-center gap-1 text-yellow-500 hover:text-yellow-300 transition">
            <Home size={20} />
            <span className="text-[10px] tracking-wide">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-yellow-600 hover:text-yellow-300 transition">
            <Heart size={20} />
            <span className="text-[10px] tracking-wide">Our Story</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-yellow-600 hover:text-yellow-300 transition">
            <ImageIcon size={20} />
            <span className="text-[10px] tracking-wide">Memories</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-yellow-600 hover:text-yellow-300 transition">
            <Mail size={20} />
            <span className="text-[10px] tracking-wide">Letters</span>
          </button>
        </div>

      </main>
      
      {/* Required CSS for gradient mask (Add this to your global CSS file if needed) */}
      <style dangerouslySetInnerHTML={{__html: `
        .mask-image-b {
          -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }
      `}} />
    </div>
  );
}
