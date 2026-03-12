import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Home, ImageIcon, Mail, Star, CalendarHeart } from 'lucide-react';

// --- Enhanced Animated Background Components (Keep all your fixes!) ---
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
        <div key={star.id} className={`absolute rounded-full ${star.color} animate-pulse shadow-[0_0_5px_white]`} style={{ top: star.top, left: star.left, width: star.size, height: star.size, animationDuration: star.animationDuration }} />
      ))}
      {brightBursts.map((burst) => (
        <div key={burst.id} className="absolute rounded-full bg-pink-100/70 animate-pulse shadow-[0_0_20px_white,0_0_10px_#fdba74]" style={{ top: burst.top, left: burst.left, width: burst.size, height: burst.size, animationDuration: burst.animationDuration }} />
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
            animate={{ y: window.innerHeight + 50, x: Math.random() * window.innerWidth + (Math.random() * 100 - 50), opacity: [0, 1, 1, 0], rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)] }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, delay: Math.random() * 8, ease: "linear" }}
            className="absolute text-rose-500"
          >
            {isHeart ? <Heart fill="currentColor" size={24} className="drop-shadow-[0_0_15px_rgba(244,63,94,1),0_0_10px_#fdba74]" /> : <Star fill="#fdba74" className="text-pink-100 drop-shadow-[0_0_15px_white,0_0_10px_#fdba74]" size={16}/>}
          </motion.div>
        );
      })}
    </div>
  );
};

// --- Single, Unified Hero Frame Component (KEEPING YOUR PERFECT FIXED LAYOUT) ---
const SingleHeroFrame = () => (
    <section className="relative w-full mt-4 flex flex-col items-center px-4 z-10">
      {/* The main card */}
      <div className="relative w-full rounded-3xl border border-rose-500/30 bg-gradient-to-b from-black to-[#1a050f] shadow-[0_0_20px_rgba(225,29,72,0.2)] pb-10">
        {/* TOP HALF: Image Container (Fixed small height) */}
        <div className="relative w-full h-[130px] rounded-t-3xl overflow-hidden z-0">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/hero-eyes.jpg" alt="Our Combined Gaze" className="w-full h-full object-cover object-center" />
          <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        {/* BOTTOM HALF: Text Overlay */}
        <div className="relative w-full text-center z-10 px-2 -mt-6">
          <h2 className="text-[13px] font-serif text-yellow-500 uppercase tracking-widest mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Our Eternal Love.</h2>
          <h1 className="text-[25px] font-serif text-yellow-50 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Written in the Stars.</h1>
          <p className="text-[12px] font-serif text-yellow-200/90 mt-1.5 italic drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Every glance, a new chapter.</p>
        </div>
        {/* Chibi Avatars (Your perfect 80px circles!) */}
        <div className="absolute -bottom-6 left-2 z-20 w-20 h-20 rounded-full bg-black p-0.5 shadow-[0_0_8px_rgba(251,113,133,0.5)]">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-girl.jpg" alt="Chibi Girl" className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="absolute -bottom-6 right-2 z-20 w-20 h-20 rounded-full bg-black p-0.5 shadow-[0_0_8px_rgba(251,113,133,0.5)]">
          <img src="https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-boy.jpg" alt="Chibi Boy" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>
    </section>
);

// --- Our Story Timeline Page ---
const OurStoryTimeline = () => {
  const milestones = [
    { date: "Feb 27, 2026", title: "Where It All Began", desc: "The day our stars finally aligned and this beautiful journey started." },
    { date: "Forever", title: "Unwritten Chapters", desc: "Every single day with you is my new favorite memory. I can't wait for what's next." }
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full px-6 pt-8 pb-32 z-20 relative">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-rose-300 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>Our Journey</h2>
        <p className="text-yellow-500/80 font-serif text-sm mt-2 tracking-widest uppercase">Chapter by Chapter</p>
      </div>
      <div className="relative border-l-2 border-rose-500/40 ml-4 space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="relative pl-8">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-black rounded-full border-2 border-rose-400 flex items-center justify-center shadow-[0_0_10px_rgba(244,63,94,0.8)]">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-rose-900/50 p-5 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
              <span className="text-rose-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 mb-2"><CalendarHeart size={14} /> {milestone.date}</span>
              <h3 className="text-yellow-100 font-serif text-xl mb-2 drop-shadow-md">{milestone.title}</h3>
              <p className="text-rose-100/80 text-sm italic leading-relaxed">{milestone.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Memories Page with Randomly Placed Frames ---
const MemoriesGallery = () => {
  // Use links to your real pictures here!
  const memories = [
    "https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-girl.jpg",
    "https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/hero-eyes.jpg",
    "https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/chibi-boy.jpg",
    "https://raw.githubusercontent.com/shubham763601/Nikki/main/assets/hero-eyes.jpg",
  ];

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full px-4 pt-10 pb-32 z-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-5xl text-rose-200 drop-shadow-[0_0_20px_white,0_0_10px_#fdba74]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>Our Memories</h2>
        <p className="text-yellow-100 font-serif text-xl mt-4 max-w-[280px] mx-auto leading-tight drop-shadow-lg">we’ll create memories together.</p>
      </div>

      <div className="relative w-full min-h-[400px]">
        {memories.map((memoryUrl, index) => {
          // Calculate semi-random positions so it looks artistic
          const randomX = (index % 2 === 0 ? -15 : 15) + (Math.random() * 20 - 10);
          const randomY = index * 80 + (Math.random() * 30 - 15);
          const randomRotate = (Math.random() * 10 - 5);
          const randomScale = (Math.random() * 0.15 + 0.9);

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: randomScale }}
              viewport={{ once: true, margin: "-80px" }}
              className="absolute w-40 h-40 bg-black/60 rounded-3xl border border-rose-400 p-1.5 shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:border-yellow-400 transition-all cursor-pointer group"
              style={{
                left: `calc(50% + ${randomX}px)`,
                top: `${randomY}px`,
                transform: `translateX(-50%) rotate(${randomRotate}deg) scale(${randomScale})`,
              }}
            >
              <img src={memoryUrl} alt={`Memory ${index + 1}`} className="w-full h-full object-cover rounded-3xl group-hover:opacity-80" />
              {/* Optional glowing effect on hover */}
              <div className="absolute inset-0 rounded-3xl border border-yellow-300 opacity-0 group-hover:opacity-100 shadow-[0_0_15px_yellow] transition-opacity"></div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

// --- Letters Page with Personal Message ---
const LettersPage = () => {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full px-6 pt-10 pb-32 z-20 relative">
      
      {/* Title with your specific font style */}
      <div className="text-center mb-10">
        <h2 className="text-5xl text-rose-300 drop-shadow-[0_0_20px_white,0_0_10px_#fdba74]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>
          Hey punjabi kudi ❤️
        </h2>
        <p className="text-yellow-500/80 font-serif text-sm mt-3 tracking-widest uppercase">A Letter Just for You</p>
      </div>

      {/* The Letter Card */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="bg-black/60 backdrop-blur-md border border-rose-900/50 p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] font-serif relative overflow-hidden"
      >
        {/* Soft radial background backing */}
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(50%_50%_at_center,_var(--tw-gradient-stops))] from-pink-950/20 to-transparent blur-xl"></div>
        
        {/* Top left corner detail */}
        <div className="absolute top-3 left-3 text-rose-400/80"><Heart fill="currentColor" size={24}/></div>

        <div className="text-rose-50 leading-loose space-y-7 text-[15px]">
          <p className="drop-shadow-md">My Dearest Love Nikki,</p>
          <p className="italic drop-shadow-md">Every single day I spend with you is like a beautiful dream come true. You are my everything.</p>
          
          {/* Scattered affectionate phrases */}
          <p className="text-xl text-rose-100 font-bold drop-shadow-[0_0_8px_rgba(251,113,133,0.6)]">I love you jaanu..🥰😘</p>
          
          <p className="drop-shadow-md">No matter what, I'll always be by your side, loving you, supporting you, and celebrating you.</p>
          
          <p className="text-xl text-rose-100 font-bold drop-shadow-[0_0_8px_rgba(251,113,133,0.6)]">I love you sweetu 🥰😘 </p>
          
          <p className="drop-shadow-md">Thank you for bringing so much color and love to my life.</p>
          <p className="italic drop-shadow-md pb-6">Your biggest admirer,</p>
        </div>

        {/* Scattered little hearts for decor */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute text-rose-500/50" style={{ top: `${Math.random() * 80 + 10}%`, left: `${Math.random() * 80 + 10}%`, transform: `rotate(${Math.random() * 30 - 15}deg)` }}>
            <Heart fill="currentColor" size={Math.random() * 12 + 8} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// --- Main App Component ---
export default function MobileLoveWebsite() {
  const [days, setDays] = useState(0);
  const [activeTab, setActiveTab] = useState('home'); // Navigation state!

  useEffect(() => {
    // Dynamic Date Calculation (starting from Feb 27, 2026)
    const startDate = new Date('2026-02-27T00:00:00');
    const updateCounter = () => setDays(Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24)));
    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans selection:bg-rose-500 overflow-x-hidden flex justify-center">
      <EnhancedStarryBackground />
      <EnhancedFallingCascade />

      {/* Main Mobile Container with Intense Central Glow and Soft-Shadow */}
      <main className="z-20 relative w-full max-w-md min-h-screen flex flex-col shadow-2xl shadow-rose-900/30 overflow-y-auto">
        
        {/* Top Text Nav - Works on Home, and switching tabs */}
        <nav className="w-full flex justify-center gap-2 sm:gap-3 pt-6 pb-2 px-2 text-[10px] sm:text-xs text-yellow-500/80 tracking-widest font-medium uppercase border-b border-rose-900/30 z-20">
          <span onClick={() => setActiveTab('home')} className={`cursor-pointer transition ${activeTab === 'home' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'hover:text-yellow-400'}`}>HOME</span> | 
          <span onClick={() => setActiveTab('story')} className={`cursor-pointer transition ${activeTab === 'story' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'hover:text-yellow-400'}`}>OUR STORY</span> | 
          <span onClick={() => setActiveTab('memories')} className={`cursor-pointer transition ${activeTab === 'memories' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'hover:text-yellow-400'}`}>MEMORIES</span> | 
          <span onClick={() => setActiveTab('letters')} className={`cursor-pointer transition ${activeTab === 'letters' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'hover:text-yellow-400'}`}>LETTERS</span>
        </nav>

        {/* Page Content Switcher */}
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col pb-32">
              <SingleHeroFrame />
              <section className="mt-20 text-center px-4 flex flex-col items-center">
                <h3 className="text-4xl text-rose-300 mb-2 drop-shadow-[0_0_15px_rgba(251,113,133,1),0_0_10px_white]" style={{ fontFamily: "'Brush Script MT', 'Dancing Script', cursive" }}>Love Counter</h3>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-7xl font-serif font-bold text-rose-200 drop-shadow-[0_0_20px_rgba(244,63,94,0.8),0_0_10px_white]">{days}</span>
                  <div className="text-left leading-tight">
                    <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase drop-shadow-[0_0_5px_#fdba74]">Beautiful Days</span>
                    <span className="block text-yellow-500 font-serif tracking-widest text-lg uppercase drop-shadow-[0_0_5px_#fdba74]">Together.</span>
                  </div>
                </div>
                <p className="text-yellow-500/80 mt-3 font-serif tracking-wide text-sm drop-shadow-md">Starting Feb 27, 2026.</p>
              </section>

              <div className="flex items-center justify-center w-full px-12 my-10 opacity-90">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-400/50"></div>
                <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="mx-4 text-rose-200 drop-shadow-[0_0_20px_rgba(244,63,94,1),0_0_10px_white]">
                  <Heart fill="currentColor" size={36} />
                </motion.div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-400/50"></div>
              </div>

              <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="text-center px-6 py-6 space-y-8 font-serif relative">
                <p className="text-xl text-rose-50 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">In your eyes, I find my home,<br/>A universe where I am never alone.</p>
                <p className="text-xl text-rose-50 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-10">The stars whisper our names at night,<br/>Our love, the universe's sweetest light.</p>
              </motion.section>
            </motion.div>
          )}

          {activeTab === 'story' && <OurStoryTimeline key="story" />}
          {activeTab === 'memories' && <MemoriesGallery key="memories" />}
          {activeTab === 'letters' && <LettersPage key="letters" />}
        </AnimatePresence>

        {/* Fixed Bottom Navigation (Keep your perfect look!) */}
        <div className="fixed bottom-0 w-full max-w-md bg-black/95 backdrop-blur-sm border-t border-yellow-800/60 flex justify-between items-center px-6 py-4 z-50">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1.5 transition ${activeTab === 'home' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'text-yellow-600 hover:text-yellow-400'}`}>
            <Home size={22} className="drop-shadow-[0_0_5px_#fdba74]" />
            <span className="text-[10px] tracking-wide font-medium">Home</span>
          </button>
          <button onClick={() => setActiveTab('story')} className={`flex flex-col items-center gap-1.5 transition ${activeTab === 'story' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'text-yellow-600 hover:text-yellow-400'}`}>
            <Heart size={22} />
            <span className="text-[10px] tracking-wide font-medium">Our Story</span>
          </button>
          <button onClick={() => setActiveTab('memories')} className={`flex flex-col items-center gap-1.5 transition ${activeTab === 'memories' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'text-yellow-600 hover:text-yellow-400'}`}>
            <ImageIcon size={22} />
            <span className="text-[10px] tracking-wide font-medium">Memories</span>
          </button>
          <button onClick={() => setActiveTab('letters')} className={`flex flex-col items-center gap-1.5 transition ${activeTab === 'letters' ? 'text-yellow-300 drop-shadow-[0_0_5px_#fdba74]' : 'text-yellow-600 hover:text-yellow-400'}`}>
            <Mail size={22} />
            <span className="text-[10px] tracking-wide font-medium">Letters</span>
          </button>
        </div>

      </main>
    </div>
  );
}
