import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Image as ImageIcon, Mail, Star } from 'lucide-react';

// --- Enhanced Animated Background Components ---
const EnhancedStarryBackground = () => {
  const baseStars = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    size: Math.random() * 2 + 1 + 'px',
    color: Math.random() > 0.8 ? 'bg-pink-100' : 'bg-white',
  }));

  const brightBursts = Array.from({ length: 8 }).map((_, i) => ({
    id: `burst-${i}`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 6 + 4}s`,
    size: Math.random() * 6 + 4 + 'px',
  }));

  return (
    <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-950/40 via-gray-900 to-black overflow-hidden pointer-events-none selection:bg-rose-500 selection:text-white">
      {baseStars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${star.color} animate-pulse shadow-[0_0_5px_white]`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
      {brightBursts.map((burst) => (
        <div
          key={burst.id}
          className="absolute rounded-full bg-pink-100/70 animate-pulse shadow-[0_0_20px_white,0_0_10px_#fdba74]"
          style={{
            top: burst.top,
            left: burst.left,
            width: burst.size,
            height: burst.size,
            animationDuration: burst.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

const EnhancedFallingCascade = () => {
  const totalItems = 45; 
  const items = Array.from({ length: totalItems });
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {items.map((_, i) => {
        const isHeart = Math.random() > 0.6; 
        return (
          <motion.div
            key={i}
            initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0, scale: Math.random() * 0.6 + 0.4 }}
            animate={{
              y: window.innerHeight + 50,
              x: Math.random() * window.innerWidth + (Math.random() * 100 - 50), 
              opacity: [0, 1, 1, 0],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)], 
            }}
            transition={{
              duration: Math.random() * 8 + 8, 
              repeat: Infinity,
              delay: Math.random() * 8, 
              ease: "linear"
            }}
            className="absolute text-rose-500"
          >
            {isHeart ? (
              <Heart fill="currentColor" size={24} className="drop-shadow-[0_0_15px_rgba(244,63,94,1),0_0_10px_#fdba74]" />
            ) : (
              <Star fill="#fdba74" className="text-pink-100 drop-shadow-[0_0_15px_white,0_0_10px_#fdba74]" size={16}/>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// --- Single, Unified Hero Frame Component ---
const SingleHeroFrame = () => {
  return (
    <section className="relative w-full mt-4 flex flex-col items-center px-4">
      {/* Taller container to give text its own space */}
      <div className="relative w-full h-[270px] rounded-3xl overflow-visible border-2 border-rose-900/40 bg-black shadow-[0_0_30px_rgba(251,113,133,0.3)]">
        
        {/* Image Frame - 160px height to prevent zooming. No dark opacity filter! */}
        <div className="absolute top-0 w-full h-[160px] rounded-t-3xl overflow-hidden z-0">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/hero-eyes.jpg" alt="Our Combined Gaze" className="w-full h-full object-cover object-center" />
          {/* Subtle fade ONLY at the very bottom edge of the image to blend it */}
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Overlaid Text - Moved down below the image */}
        <div className="absolute top-[170px] w-full text-center z-10 px-4">
          <h2 className="text-xl font-serif text-yellow-500 uppercase tracking-widest mb-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_5px_#fdba74]">
            Our Eternal Love.
          </h2>
          <h1 className="text-2xl font-serif text-yellow-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8),0_0_5px_white]">
            Written in the Stars.
          </h1>
          <p className="text-[13px] font-serif text-yellow-200/90 mt-1 italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            Every glance, a new chapter.
          </p>
        </div>

        {/* Chibi Avatars - Locked size (w-20 h-20) and heavily reduced glow */}
        <div className="absolute -bottom-8 left-2 z-20 w-20 h-20 rounded-full bg-black p-0.5 shadow-[0_0_8px_rgba(251,113,133,0.5),0_0_3px_rgba(255,255,255,0.3)]">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-girl.jpg" alt="Chibi Girl" className="w-full h-full rounded-full object-cover" />
        </div>
        
        <div className="absolute -bottom-8 right-2 z-20 w-20 h-20 rounded-full bg-black p-0.5 shadow-[0_0_8px_rgba(251,113,133,0.5),0_0_3px_rgba(255,255,255,0.3)]">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-boy.jpg" alt="Chibi Boy" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---
export default function MobileLoveWebsite() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    // Dynamic Date Calculation (starting from Feb 27, 2026)
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
      <EnhancedStarryBackground />
      <EnhancedFallingCascade />

      <main className="z-20 relative w-full max-w-md min-h-screen flex flex-col pb-28 shadow-2xl shadow-rose-900/30 overflow-y-auto">
        
        <nav className="w-full flex justify-center gap-2 sm:gap-3 pt-6 pb-2 px-2 text-[10px] sm:text-xs text-yellow-500/80 tracking-widest font-medium uppercase border-b border-rose-900/30">
          <span className="text-yellow-400 cursor-pointer">HOME</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">OUR STORY</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">MEMORIES</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">LETTERS</span> | 
          <span className="cursor-pointer hover:text-yellow-400 transition">FOR HER</span>
        </nav>

        <SingleHeroFrame />

        <section className="mt-20 text-center px-4 flex flex-col items-center">
          <h3 className="text-4xl text-rose-300 mb-2 drop-shadow-[0_0_15px_rgba(251,113,133,1),0_0_10px_white]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>
            Love Counter
          </h3>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-7xl font-serif font-bold text-rose-200 drop-shadow-[0_0_20px_rgba(244,63,94,0.8),0_0_10px_white]">
              {days}
            </span>
            <div className="text-left leading-tight">
              <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase drop-shadow-[0_0_5px_#fdba74]">Beautiful Days</span>
              <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase drop-shadow-[0_0_5px_#fdba74]">Together.</span>
            </div>
          </div>
          
          <p className="text-yellow-500/80 mt-3 font-serif tracking-wide text-sm drop-shadow-md">
            Starting Feb 27, 2026.
          </p>
        </section>

        <div className="flex items-center justify-center w-full px-12 my-10 opacity-90">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-400/50"></div>
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-4 text-rose-200 drop-shadow-[0_0_20px_rgba(244,63,94,1),0_0_10px_white]"
          >
            <Heart fill="currentColor" size={36} />
          </motion.div>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-400/50"></div>
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-center px-6 py-6 space-y-8 font-serif relative"
        >
          <div className="absolute inset-0 z-[-1] bg-[radial-gradient(40%_50%_at_center,_var(--tw-gradient-stops))] from-pink-900/40 to-transparent blur-md"></div>
          
          <p className="text-xl text-rose-50 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            In your eyes, I find my home,<br/>
            A universe where I am never alone.
          </p>
          <p className="text-xl text-rose-50 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-10">
            The stars whisper our names at night,<br/>
            Our love, the universe's sweetest light.
          </p>
        </motion.section>

        <div className="fixed bottom-0 w-full max-w-md bg-black/95 backdrop-blur-sm border-t border-yellow-800/60 flex justify-between items-center px-6 py-4 z-50">
          <button className="flex flex-col items-center gap-1.5 text-yellow-400 hover:text-yellow-200 transition">
            <Home size={22} className="drop-shadow-[0_0_5px_#fdba74]" />
            <span className="text-[10px] tracking-wide font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-yellow-600 hover:text-yellow-400 transition">
            <Heart size={22} />
            <span className="text-[10px] tracking-wide font-medium">Our Story</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-yellow-600 hover:text-yellow-400 transition">
            <ImageIcon size={22} />
            <span className="text-[10px] tracking-wide font-medium">Memories</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 text-yellow-600 hover:text-yellow-400 transition">
            <Mail size={22} />
            <span className="text-[10px] tracking-wide font-medium">Letters</span>
          </button>
        </div>

      </main>
    </div>
  );
}
