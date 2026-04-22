import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — RobotixAcademy",
  description: "Explore AI and Robotics programs for kids aged 6–16 at RobotixAcademy.",
};

const programs = [
  {
    emoji: "🌱",
    title: "Little Explorers",
    subtitle: "Beginner · Ages 6–9",
    duration: "3 Months",
    sessions: "2 sessions/week",
    color: "from-green-400 to-teal-400",
    badge: "bg-green-100 text-green-700",
    modules: [
      { name: "What is AI?", icon: "🤔" },
      { name: "Block Coding with Scratch", icon: "🧩" },
      { name: "Build Your First Robot", icon: "🤖" },
      { name: "Sensors & Motors", icon: "⚙️" },
      { name: "Fun AI Games", icon: "🎮" },
      { name: "Mini Project Showcase", icon: "🏆" },
    ],
  },
  {
    emoji: "⚡",
    title: "Tech Builders",
    subtitle: "Intermediate · Ages 10–13",
    duration: "4 Months",
    sessions: "3 sessions/week",
    color: "from-brand-purple to-indigo-500",
    badge: "bg-purple-100 text-brand-purple",
    featured: true,
    modules: [
      { name: "Python Programming", icon: "🐍" },
      { name: "Machine Learning Basics", icon: "🧠" },
      { name: "Arduino & Electronics", icon: "💡" },
      { name: "Smart Robot Assembly", icon: "🤖" },
      { name: "Computer Vision Intro", icon: "👁️" },
      { name: "Hackathon Project", icon: "🚀" },
    ],
  },
  {
    emoji: "🚀",
    title: "Future Innovators",
    subtitle: "Advanced · Ages 14–16",
    duration: "6 Months",
    sessions: "3 sessions/week",
    color: "from-brand-orange to-red-500",
    badge: "bg-orange-100 text-brand-orange",
    modules: [
      { name: "Advanced Python & AI", icon: "🐍" },
      { name: "Deep Learning", icon: "🧠" },
      { name: "Computer Vision Projects", icon: "👁️" },
      { name: "Autonomous Robots", icon: "🤖" },
      { name: "IoT & Smart Devices", icon: "📡" },
      { name: "Innovation Challenge", icon: "🏆" },
    ],
  },
  {
    emoji: "☀️",
    title: "Holiday Camps",
    subtitle: "All Levels · Ages 6–16",
    duration: "2 Weeks",
    sessions: "5 days/week · Full day",
    color: "from-yellow-400 to-orange-400",
    badge: "bg-yellow-100 text-yellow-700",
    modules: [
      { name: "Robot Wars Challenge", icon: "⚔️" },
      { name: "AI Art & Music", icon: "🎨" },
      { name: "Drone Flying Basics", icon: "🚁" },
      { name: "Game Design with AI", icon: "🎮" },
      { name: "Smart Home Projects", icon: "🏠" },
      { name: "Grand Showcase Day", icon: "🎉" },
    ],
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-purple to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">Our Programs 🎓</h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Carefully designed learning paths that grow with your child — from
          curious beginner to confident innovator.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm card-hover ${
                p.featured ? "ring-4 ring-brand-purple ring-offset-4" : ""
              }`}
            >
              {p.featured && (
                <div className="bg-brand-purple text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                  ⭐ Most Popular
                </div>
              )}
              <div className={`bg-gradient-to-r ${p.color} p-8 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{p.emoji}</span>
                  <div>
                    <h2 className="text-2xl font-black">{p.title}</h2>
                    <p className="text-white/80 text-sm">{p.subtitle}</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⏱ {p.duration}
                  </span>
                  <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    📅 {p.sessions}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-brand-navy mb-4">
                  What You&apos;ll Learn:
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {p.modules.map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-lg">{m.icon}</span>
                      <span>{m.name}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-brand-navy text-white font-bold py-3 rounded-2xl hover:bg-brand-purple transition-colors"
                >
                  Enroll in This Program →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
