"use client";

import Link from "next/link";

function RobotSVG() {
  return (
    <svg viewBox="0 0 220 280" className="w-full max-w-xs mx-auto drop-shadow-2xl">
      {/* Antenna */}
      <line x1="110" y1="30" x2="110" y2="8" stroke="#FFD60A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="110" cy="5" r="8" fill="#FFD60A" />
      {/* Head */}
      <rect x="55" y="30" width="110" height="85" rx="22" fill="#6C3CE1" />
      {/* Eyes */}
      <circle cx="85" cy="68" r="14" fill="white" />
      <circle cx="135" cy="68" r="14" fill="white" />
      <circle cx="88" cy="71" r="7" fill="#FF6B35" />
      <circle cx="138" cy="71" r="7" fill="#FF6B35" />
      <circle cx="90" cy="69" r="3" fill="white" />
      <circle cx="140" cy="69" r="3" fill="white" />
      {/* Smile */}
      <path d="M82 100 Q110 118 138 100" stroke="#FFD60A" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Ear bolts */}
      <circle cx="55" cy="72" r="8" fill="#7B4DF0" />
      <circle cx="165" cy="72" r="8" fill="#7B4DF0" />
      {/* Body */}
      <rect x="40" y="125" width="140" height="90" rx="18" fill="#6C3CE1" />
      {/* Chest panel */}
      <rect x="70" y="140" width="80" height="55" rx="10" fill="#5A2CC7" />
      <circle cx="90" cy="160" r="8" fill="#FFD60A" />
      <circle cx="110" cy="160" r="8" fill="#00C9A7" />
      <circle cx="130" cy="160" r="8" fill="#FF6B35" />
      <rect x="80" y="175" width="60" height="8" rx="4" fill="#7B4DF0" />
      {/* Arms */}
      <rect x="10" y="128" width="28" height="75" rx="14" fill="#7B4DF0" />
      <circle cx="24" cy="210" r="12" fill="#6C3CE1" />
      <rect x="182" y="128" width="28" height="75" rx="14" fill="#7B4DF0" />
      <circle cx="196" cy="210" r="12" fill="#6C3CE1" />
      {/* Legs */}
      <rect x="62" y="218" width="36" height="50" rx="12" fill="#5A2CC7" />
      <rect x="122" y="218" width="36" height="50" rx="12" fill="#5A2CC7" />
      {/* Feet */}
      <rect x="56" y="258" width="48" height="18" rx="9" fill="#6C3CE1" />
      <rect x="116" y="258" width="48" height="18" rx="9" fill="#6C3CE1" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-purple-light via-brand-bg to-white">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-brand-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-brand-orange/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl" />

      {/* Floating badges */}
      <div className="absolute top-24 left-8 sm:left-16 animate-float hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg px-4 py-2 z-10">
        <span className="text-2xl">🤖</span>
        <span className="text-xs font-bold text-brand-navy">Robotics Kit</span>
      </div>
      <div className="absolute top-36 right-8 sm:right-16 animate-float-delay hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg px-4 py-2 z-10">
        <span className="text-2xl">🧠</span>
        <span className="text-xs font-bold text-brand-navy">AI Learning</span>
      </div>
      <div className="absolute bottom-24 left-8 sm:left-20 animate-float hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-lg px-4 py-2 z-10">
        <span className="text-2xl">⭐</span>
        <span className="text-xs font-bold text-brand-navy">500+ Kids</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span className="animate-spin-slow inline-block">⚙️</span>
              India&apos;s #1 Kids AI & Robotics Academy
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy leading-tight mb-6">
              Making Kids{" "}
              <span className="gradient-text">Smart</span> with{" "}
              <span className="text-brand-orange">AI</span> &{" "}
              <span className="text-brand-teal">Robotics</span> ✨
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Hands-on programs that teach kids to build robots, code with AI,
              and develop 21st-century skills — all through fun and play!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/programs"
                className="bg-brand-purple text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-200"
              >
                🎓 Explore Programs
              </Link>
              <Link
                href="/kits"
                className="bg-white text-brand-navy font-bold px-8 py-4 rounded-2xl text-lg border-2 border-brand-purple hover:bg-brand-purple-light transition-all hover:scale-105"
              >
                🔧 View Kits
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              {[
                { value: "500+", label: "Happy Kids" },
                { value: "20+", label: "Programs" },
                { value: "15+", label: "Expert Mentors" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-black text-brand-purple">{s.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Robot illustration */}
          <div className="animate-float">
            <RobotSVG />
            {/* Orbit circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-dashed border-brand-purple/20 rounded-full animate-spin-slow pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
