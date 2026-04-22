import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — RobotixAcademy",
};

const team = [
  {
    name: "Arjun Kapoor",
    role: "Founder & CEO",
    emoji: "👨‍💼",
    bio: "IIT graduate with 12+ years in AI research. Passionate about making technology education accessible to every child.",
    color: "bg-brand-purple-light",
  },
  {
    name: "Sneha Reddy",
    role: "Head of Curriculum",
    emoji: "👩‍🏫",
    bio: "Former ISRO engineer turned educator. Designs all our programs to be fun, age-appropriate, and standards-aligned.",
    color: "bg-orange-50",
  },
  {
    name: "Vikram Nair",
    role: "Lead Robotics Mentor",
    emoji: "👨‍🔧",
    bio: "National robotics competition winner. Trains our mentors and designs the hands-on kit curriculum.",
    color: "bg-teal-50",
  },
  {
    name: "Priya Joshi",
    role: "Community Manager",
    emoji: "👩‍🎨",
    bio: "Child development expert who ensures every student feels seen, supported, and celebrated in their learning journey.",
    color: "bg-yellow-50",
  },
];

const milestones = [
  { year: "2020", event: "RobotixAcademy founded in Bangalore with 12 students" },
  { year: "2021", event: "Launched our first Robotics Kit — sold 500 units in 3 months" },
  { year: "2022", event: "Expanded to 5 cities across India" },
  { year: "2023", event: "Reached 500+ students, launched online program" },
  { year: "2024", event: "Won 'Best EdTech Startup' at India Education Awards" },
  { year: "2026", event: "Going national — 20+ cities and growing!" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-teal to-indigo-700 text-white py-20 text-center">
        <h1 className="text-5xl font-black mb-4">About RobotixAcademy 🌟</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          We believe every child deserves to understand the technology shaping
          their world — and to build it themselves.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-purple font-bold text-sm uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="text-4xl font-black text-brand-navy mt-2 mb-6">
              Empowering the{" "}
              <span className="gradient-text">Next Generation</span> of Innovators
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              RobotixAcademy was born from a simple belief: when children learn
              to build robots and understand AI, they don&apos;t just learn
              technology — they learn to think creatively, solve problems, and
              shape the future.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our programs are crafted by educators, engineers, and child
              development experts to ensure every child learns at their own
              pace, in a fun and supportive environment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "500+", l: "Kids Trained" },
                { n: "20+", l: "Programs" },
                { n: "4", l: "Kits Launched" },
                { n: "5⭐", l: "Parent Rating" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-brand-purple-light rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-black text-brand-purple">
                    {s.n}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Vision", text: "A world where every child can code, create, and innovate with confidence." },
              { icon: "💡", title: "Innovation", text: "We update our curriculum every 6 months to stay ahead of tech trends." },
              { icon: "❤️", title: "Care", text: "Small batch sizes ensure every child gets personal attention." },
              { icon: "🌱", title: "Growth", text: "We nurture not just technical skills but creativity and critical thinking." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-black text-brand-navy mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-10">
            <span className="text-brand-orange font-bold text-sm uppercase tracking-widest">
              Meet the Team
            </span>
            <h2 className="text-4xl font-black text-brand-navy mt-2">
              The People Behind the Magic 🪄
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className={`${m.color} rounded-3xl p-6 text-center card-hover`}
              >
                <div className="text-6xl mb-4">{m.emoji}</div>
                <h3 className="font-black text-brand-navy text-lg">{m.name}</h3>
                <p className="text-brand-purple text-sm font-bold mb-3">
                  {m.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-10">
            <span className="text-brand-teal font-bold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-4xl font-black text-brand-navy mt-2">
              How We Got Here 🗺️
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-brand-purple/20" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-black text-xs shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
                    <div className="text-brand-purple font-black text-sm mb-1">
                      {m.year}
                    </div>
                    <p className="text-gray-700 text-sm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-brand-purple to-brand-orange rounded-3xl p-10 text-white text-center">
          <h3 className="text-3xl font-black mb-4">
            Want to Be Part of Our Story? 🚀
          </h3>
          <p className="text-white/80 mb-6">
            Enroll your child today or partner with us as a mentor or school.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-purple font-black px-8 py-4 rounded-2xl hover:scale-105 transition-transform"
          >
            Get in Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
